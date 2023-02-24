import { getExp, fake_complete, runFakeComplete } from "./main";
import { TOKEN } from "./token";

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
            challenges: [
                () => [
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
                            "DifficultyRank": 1,
                            "MissionAlerted": false,
                            "IsHot": false,
                            "IsMild": true,
                            "CrimeType": 3,
                            "Hardcore": false
                        },
                        "UserId": "fe76faee-ecdc-4dd7-a6d5-c5b84054a87c",
                        "SessionId": "76561199133083972-2457592651",
                        "Origin": "gameclient",
                        "Id": "09d92eb9-f208-42d9-9586-601df37b98e6"
                    },
                    {
                        "Timestamp": 0.199999,
                        "Name": "AddSyndicateTarget",
                        "Value": {
                            "repoID": "87be73e8-64a2-4381-8438-013bb5d4f241"
                        },
                        "Origin": "gameclient",
                    },
                    {
                        "Name": "TargetPickedConfirm",
                        "Value": {
                            "RepositoryId": "87be73e8-64a2-4381-8438-013bb5d4f241"
                        },
                        "XboxGameMode": 2.000000,
                        "XboxDifficulty": 0.000000,
                        "Origin": "gameclient",
                    },
                ]
            ]
        }, async (oauthToken) => {
            return (await (await fetch("https://hm3-service.hitman.io/profiles/page/Destination?locationId=LOCATION_PARENT_SNUG",
                { headers: { Authorization: oauthToken } })).json() as any).data.MasteryData[0].CompletionData;
        })
    }
})()