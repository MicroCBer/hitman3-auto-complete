import Koa from "koa"
import koaBody from "koa-body";
import { checkPlayed, fetchChallengeFromChallengeService, runFakeComplete } from "./main"
const app = new Koa();

enum TaskType {
    CompleteAllETs = "CompleteAllETs",
    CompleteAll7DS = "CompleteAll7DS"
}

enum TaskStatus {
    Succeeded = "Succeeded", Failed = "Failed", Processing = "Processing", Waiting = "Waiting"
}


type Task = {
    type: TaskType,
    status: TaskStatus,
    token: string,
    ip: string,
    failedReason?: string,
    pendingText?: string
}

let tasks: Task[] = [];

app.use(koaBody());

let processingTask = false;

async function processTask(task: Task) {
    let log=''
    console.log=(...args)=>{
        log+=args.join(" ")+"\n"
    }

    switch (task.type) {
        case TaskType.CompleteAllETs: {
            let totalDeltaXP = 0;

            const ETs = ["8043a9b9-8ba6-453d-83f8-aa507c5a1c08","507b8b04-8b93-4420-84d1-c0c3a5ce56c3","28aa7003-1917-46e4-bad4-0f43112aae4e","dce08b14-b14a-4c14-aea9-a2eb5222f889","654685ab-d52d-49cb-815d-f98ee00454d3","ca86c369-320f-49ca-989d-bd727951b9ef","81e01a84-7c7f-4967-a4e6-a5450c5cf274","9f5b8d74-1f70-49ea-94e2-21d2de3e5cf3","244eb6cf-6a0c-422e-ac03-4ffd85657852","655c5a57-69d1-48b6-a14b-2ae396c16174","deace35f-ab6d-44c9-b1a6-98757e854f74","7ad29733-7060-4c44-8780-b76482fb1937","d8eb1a30-44e3-4792-b45d-2156fd744be1","043585fa-455f-481c-aa0a-8d31d063b93a","f11f5299-12d1-4c65-a7d3-d65b22d94285"]

            let n=0;
            for (let et of ETs) {
                task.pendingText=`${n}/${ETs.length} Pending: ${et} \n\nLog:${log}`
                console.log("Pending:", et);

                if(await checkPlayed(et,task.token)){
                    console.log(`Played, ${et} skipped.`)
                    n++;
                    continue
                }

                totalDeltaXP += await runFakeComplete(et, {
                    complete: true,
                    targetList: [],
                    time: 4096,
                    maxRequests: 99,
                    silent: false,
                    contractType: "elusive",
                    oauthToken: task.token,
                    // challenges: await fetchChallengeFromChallengeService("b2c0251e-1803-4e12-b860-b9fa6ce5c004",task.token),
                })
                n++;
            }

            return totalDeltaXP;
        }
        case TaskType.CompleteAll7DS: {
            let totalDeltaXP = 0;

            const contracts = ["ae04c7a0-4028-4524-b27f-6a62f020fdca", "494d97a6-9e31-45e0-9dae-f3793c731336", "a838c4b0-7db5-4ac7-8d52-e8c5b82aa376", "e3b65e65-636b-4dfd-bb42-65a18c5dce4a", "5121acde-313d-4517-ae70-6a54ca5d775a", "8c8ed496-948f-4672-879b-4d9575406577", "8e95dcd0-704f-4121-8be6-088a3812f838"]

            let n=0;
            for (let contract of contracts) {
                task.pendingText=`${n}/${contracts.length} Pending: ${contract} \n\nLog:\n${log}`
                console.log("Pending:", contract);

                if(await checkPlayed(contract,task.token)){
                    console.log(`Played, ${contract} skipped.`)
                    n++;
                    continue
                }

                totalDeltaXP += await runFakeComplete(contract, {
                    complete: true,
                    targetList: [],
                    time: 4096,
                    maxRequests: 99,
                    silent: false,
                    contractType: "elusive",
                    oauthToken: task.token,
                    forceGetforplay: true
                    // challenges: await fetchChallengeFromChallengeService("b2c0251e-1803-4e12-b860-b9fa6ce5c004",task.token),
                })
                n++;
            }

            return totalDeltaXP;
        }
    }
}

async function startProcessTask() {
    if (processingTask) return;

    let taskIndex = tasks.findIndex(v => v.status === TaskStatus.Waiting);
    while (taskIndex !== -1) {
        processingTask = true;

        try {
            tasks[taskIndex].status = TaskStatus.Processing;
            await processTask(tasks[taskIndex]);
            tasks[taskIndex].status = TaskStatus.Succeeded;
            tasks[taskIndex].pendingText = ""
            processingTask = false
        } catch (e) {
            tasks[taskIndex].status = TaskStatus.Failed
            tasks[taskIndex].failedReason = e.toString()
            tasks[taskIndex].pendingText = ""
            processingTask = false
            // throw e
        }

        taskIndex = tasks.findIndex(v => v.status === TaskStatus.Waiting)
    }
}

app.use(ctx => {
    if (ctx.URL.pathname === "/addTask") {
        let body = JSON.parse(ctx.request.body);

        let nTasks = tasks.reduce((p, v) => p + ((v.ip === ctx.ip && (v.status === TaskStatus.Waiting || v.status === TaskStatus.Processing)) as unknown as number), 0);

        if (nTasks > 5) {
            ctx.body = { status: "Failed", reason: "Too many pending tasks" };
            return;
        }

        if (!body["type"] || !body["token"]) {
            ctx.body = { status: "Failed", reason: "Invalid request" };
            return;
        }

        let validTask = false;
        function matchTask(taskname: string) {
            if (body["type"] === taskname) {
                tasks.push({
                    ip: ctx.ip,
                    type: taskname as TaskType,
                    status: TaskStatus.Waiting,
                    token: body["token"]
                })

                validTask = true
            }
        }

        matchTask("CompleteAllETs");
        matchTask("CompleteAll7DS");

        if (validTask) {
            ctx.body = { status: "Succeeded" };
            startProcessTask()
        }
        else ctx.body = { status: "Failed", reason: "Invalid task" };
    }

    if (ctx.URL.pathname === "/getTasks") {
        ctx.body = tasks.map(v => ({ ...v, token: "" }));
        return;
    }
});



app.listen(2780);