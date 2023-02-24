import { getExp, fake_complete, runFakeComplete } from "./main";
import { TOKEN } from "./token";
import { targetList } from "./types/AmbroseIslandTargetList";

!(async () => {
    // setInterval(async()=>{
    //     console.log((await (await fetch("https://hm3-service.hitman.io/profiles/page/Destination?locationId=LOCATION_PARENT_SNUG",
    //     { headers: { Authorization: TOKEN } })).json() as any).data.MasteryData[0].CompletionData)
    // },5000)
    // return;
    for (let x = 0; x < 100; x++) {
        await runFakeComplete("060a48f0-117b-4b22-a165-111fd4a5b745", {
            complete: true,
            targetList: ["87be73e8-64a2-4381-8438-013bb5d4f241"],
            time: 40960,
            maxRequests: 99,
            silent: true,
            contractType: "evergreen",
            oauthToken: TOKEN,
            pickup: true,
            evergreen: true
        }, async (oauthToken) => {
            return (await (await fetch("https://hm3-service.hitman.io/profiles/page/Destination?locationId=LOCATION_PARENT_SNUG",
                { headers: { Authorization: oauthToken } })).json() as any).data.MasteryData[0].CompletionData;
        })
    }
})()