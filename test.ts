import { fake_complete, runFakeComplete } from "./main";
import { TOKEN } from "./token";
import { targetList } from "./types/AmbroseIslandTargetList";
import asyncPool from "tiny-async-pool";

export async function fakeCompleteEvergreen(oauthToken = TOKEN) {

    
    return await fake_complete("f8ec92c2-4fa2-471e-ae08-545480c746ee", {
        complete: true,
        targetList: targetList.slice(0, 2),
        time: 40960,
        maxRequests: 99,
        silent: true,
        contractType: "evergreen",
        oauthToken,
        evergreen: true,
        evergreen_asleader: true,
        postEvents: [
            () => [
                {
                    "Name": "Evergreen_EvaluateChallenge",
                    "Value": "",
                },
                {
                    "Name": "EvergreenExitTriggeredOrWounded",
                    "Value": "",
                },
                {
                    "Name": "ScoringScreenEndState_HotCompleted",
                    "Value": "",
                },
                {
                    "Name": "Evergreen_MissionCompleted_Hot",
                    "Value": "",
                },
                ...Array(50).fill({
                    "Name": "PayoutObjective_Completed",
                    "Value": "",
                })
            ]
        ],
        challenges: [
            () => [
                {
                    "Name": "EvergreenCampaignActivated",
                    "Value": "",
                },
                {
                    "Name": "Activate_SASO",
                    "Value": {
                        "SafehouseDummy": true,
                        "Payout": "50000"
                    },
                },
                {
                    "Timestamp": 33.948906,
                    "Name": "Activate_DontTakeDamage",
                    "ContractSessionId": "2517249993229548828-3ff48e0b-850f-4349-a3c4-4c7275951854",
                    "ContractId": "f8ec92c2-4fa2-471e-ae08-545480c746ee",
                    "Value": {
                        "SafehouseDummy": true,
                        "Payout": "500"
                    },
                    "UserId": "fe76faee-ecdc-4dd7-a6d5-c5b84054a87c",
                    "SessionId": "76561199133083972-1167209241",
                    "Origin": "gameclient",
                    "Id": "d651bcc3-b295-46b3-81e2-bb2a242a98a2"
                },
                {
                    "Timestamp": 8.204260,
                    "Name": "Activate_KillGuard_SubMachineGun",
                    "ContractSessionId": "2517250493815325343-9ccedea3-32bd-4a3d-8059-7261d2cc9139",
                    "ContractId": "f8ec92c2-4fa2-471e-ae08-545480c746ee",
                    "Value": {
                        "SafehouseDummy": true,
                        "Payout": "1000"
                    },
                    "UserId": "fe76faee-ecdc-4dd7-a6d5-c5b84054a87c",
                    "SessionId": "76561199133083972-3546323201",
                    "Origin": "gameclient",
                    "Id": "10dc3d14-2c66-406e-a251-cd711089d577"
                },
                {
                    "Timestamp": 0.000000,
                    "Name": "NumberOfTargets",
                    "ContractSessionId": "2517250533733430709-107b7ab6-f914-4fdb-b3d7-ab69f90766d8",
                    "ContractId": "4d9b38ab-5ea8-4bc3-8fbe-273a36c72731",
                    "Value": 2,
                    "UserId": "fe76faee-ecdc-4dd7-a6d5-c5b84054a87c",
                    "SessionId": "76561199133083972-2457592651",
                    "Origin": "gameclient",
                    "Id": "4aa0fddf-c527-4e7a-9586-601d51c38eaa"
                },
                {
                    "Timestamp": 0.000000,
                    "Name": "Evergreen_Mission_Data",
                    "ContractSessionId": "2517250533733430709-107b7ab6-f914-4fdb-b3d7-ab69f90766d8",
                    "ContractId": "4d9b38ab-5ea8-4bc3-8fbe-273a36c72731",
                    "Value": {
                        "DifficultyRank": 3,
                        "MissionAlerted": false,
                        "IsHot": true,
                        "IsMild": false,
                        "CrimeType": 3,
                        "Hardcore": true
                    },
                    "UserId": "fe76faee-ecdc-4dd7-a6d5-c5b84054a87c",
                    "SessionId": "76561199133083972-2457592651",
                    "Origin": "gameclient",
                    "Id": "09d92eb9-f208-42d9-9586-601df37b98e6"
                }
                ,
                {
                    "Timestamp": 0.000000,
                    "Name": "Activate_LimitedDisguise",
                    "ContractSessionId": "2517249988888201274-68350a44-0c7c-41de-97e5-04f67cd21a83",
                    "ContractId": "8caa8f0e-ac39-4088-95c1-42075afe8213",
                    "Value": {
                        "SafehouseDummy": false,
                        "Payout": "1000"
                    },
                    "UserId": "fe76faee-ecdc-4dd7-a6d5-c5b84054a87c",
                    "SessionId": "76561199133083972-1167209241",
                    "Origin": "gameclient",
                    "Id": "be1e4a04-b9f8-486b-b35c-18327741687e"
                },
                {
                    "Timestamp": 45.002823,
                    "Name": "FriskedSuccess",
                    "ContractSessionId": "2517249988888201274-68350a44-0c7c-41de-97e5-04f67cd21a83",
                    "ContractId": "8caa8f0e-ac39-4088-95c1-42075afe8213",
                    "Value": "",
                    "UserId": "fe76faee-ecdc-4dd7-a6d5-c5b84054a87c",
                    "SessionId": "76561199133083972-1167209241",
                    "Origin": "gameclient",
                    "Id": "21d2d710-3b58-437c-8e19-0aeddbfe6184"
                }, {
                    "Timestamp": 77.582222,
                    "Name": "CompleteEvergreenPrimaryObj",
                    "ContractSessionId": "2517249988888201274-68350a44-0c7c-41de-97e5-04f67cd21a83",
                    "ContractId": "8caa8f0e-ac39-4088-95c1-42075afe8213",
                    "Value": "",
                    "UserId": "fe76faee-ecdc-4dd7-a6d5-c5b84054a87c",
                    "SessionId": "76561199133083972-1167209241",
                    "Origin": "gameclient",
                    "Id": "aa83dc3d-2079-4aab-a226-3bc1a9cdb54e"
                },
                {
                    "Timestamp": 77.766563,
                    "Name": "NoTargetsLeft",
                    "ContractSessionId": "2517249988888201274-68350a44-0c7c-41de-97e5-04f67cd21a83",
                    "ContractId": "8caa8f0e-ac39-4088-95c1-42075afe8213",
                    "Value": "",
                    "UserId": "fe76faee-ecdc-4dd7-a6d5-c5b84054a87c",
                    "SessionId": "76561199133083972-1167209241",
                    "Origin": "gameclient",
                    "Id": "d261669c-1454-459d-a226-3bc1de89cd87"
                },
            ]
        ]
    })
}

const getExp = async (oauthToken) => {
    return (await (await fetch("https://hm3-service.hitman.io/profiles/page/Destination?locationId=LOCATION_PARENT_SNUG",
        { headers: { Authorization: oauthToken } })).json() as any).data.MasteryData[0].CompletionData;
};

let updateXP = (xp) => { };

// !(async () => {
//     // setInterval(async()=>{
//     // console.log((await (await fetch("https://hm3-service.hitman.io/profiles/page/Destination?locationId=LOCATION_PARENT_SNUG",
//     // { headers: { Authorization: TOKEN } })).json() as any).data.MasteryData[0].CompletionData)
//     // },5000)
//     // return;

//     function* infinityIterator() {
//         let i = 0;
//         while (true) {
//             yield i++;
//         }
//     }

//     // const xp = (await getExp(TOKEN) as any).XP

//     // await fakeCompleteEvergreen(TOKEN);

//     // console.log((await getExp(TOKEN) as any).XP - xp)

//     for await (const value of asyncPool(2, infinityIterator(), async () => {
//         const result = await fakeCompleteEvergreen(TOKEN);

//         const contractEnd = (await (await fetch(`https://hm3-service.hitman.io/profiles/page/MissionEnd?contractSessionId=${result.sessionid}&masteryUnlockableId=`,
//             { headers: { Authorization: TOKEN } })).json() as any);


//         if (contractEnd.data.MissionReward?.CompletionData) {
//             console.log(`
// ----------------------
// Evergreen Completed

// XPGain: ${contractEnd.data.MissionReward?.LocationProgression?.XPGain}
// XPSource: 
// ${contractEnd.data.MissionReward?.Challenges?.map(v => `${v.ChallengeName}: ${v.XPGain}`).join("\n")}
// ----------------------
//         `)
//             updateXP(contractEnd.data.MissionReward?.CompletionData);
//             writeFileSync("./1.json", JSON.stringify(contractEnd, null, 4));
//         }

//     })) {
//     }
// })()



// import cliProgress from "cli-progress"
// import { resourceLimits } from "worker_threads";
// import { writeFileSync } from "fs";

// !(async function () {




//     let lastExp = (await getExp(TOKEN) as any);

//     const createBar = (level) => new cliProgress.SingleBar({
//         format: `Evergreen LV${level} |{bar}| {percentage}% || {value}/{total} Exp || ETA: {eta}s`,
//         barCompleteChar: '\u2588',
//         barIncompleteChar: '\u2591',
//         hideCursor: true
//     });
//     let bar = createBar(lastExp.Level);


//     let levelMaxExp = Math.round(lastExp.XpLeft / (1 - lastExp.Completion));
//     bar.start(levelMaxExp, levelMaxExp - lastExp.XpLeft);

//     updateXP = async (exp) => {
//         // const exp = (await getExp(TOKEN) as any);
//         bar.update(levelMaxExp - exp.XpLeft);
//         if (lastExp.Level !== exp.Level) {
//             bar.update(levelMaxExp);
//             bar.stop();
//             bar = createBar(exp.Level);
//             levelMaxExp = Math.round(lastExp.XpLeft / (1 - lastExp.Completion));
//             bar.start(levelMaxExp, 0);
//         }
//         lastExp = exp;
//     }
// })()