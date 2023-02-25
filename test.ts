import { getExp, fake_complete, runFakeComplete } from "./main";
import { TOKEN } from "./token";
import { targetList } from "./types/AmbroseIslandTargetList";
import asyncPool from "tiny-async-pool";

export async function fakeCompleteEvergreen(oauthToken = TOKEN) {
    await fake_complete("060a48f0-117b-4b22-a165-111fd4a5b745", {
        complete: true,
        targetList: targetList.slice(0, 10),
        time: 40960,
        maxRequests: 99,
        silent: true,
        contractType: "evergreen",
        oauthToken,
        evergreen: true,
        evergreen_asleader: true,
        challenges: [
            () => [
                {
                    "Timestamp": 0.000000,
                    "Name": "Activate_EliminationPayout",
                    "ContractSessionId": "2517250493815325343-9ccedea3-32bd-4a3d-8059-7261d2cc9139",
                    "ContractId": "f8ec92c2-4fa2-471e-ae08-545480c746ee",
                    "Value": {
                        "SafehouseDummy": false,
                        "Payout": "500"
                    },
                    "UserId": "fe76faee-ecdc-4dd7-a6d5-c5b84054a87c",
                    "SessionId": "76561199133083972-3546323201",
                    "Origin": "gameclient",
                    "Id": "4e6025ba-2f86-4f8f-9de5-5faac05451d0"
                },
                {
                    "Timestamp": 15.668826,
                    "Name": "Activate_Hot_Killmethod_Escaping",
                    "ContractSessionId": "2517250493815325343-9ccedea3-32bd-4a3d-8059-7261d2cc9139",
                    "ContractId": "f8ec92c2-4fa2-471e-ae08-545480c746ee",
                    "Value": {
                        "SafehouseDummy": true,
                        "Payout": "3000"
                    },
                    "UserId": "fe76faee-ecdc-4dd7-a6d5-c5b84054a87c",
                    "SessionId": "76561199133083972-3546323201",
                    "Origin": "gameclient",
                    "Id": "74011f2a-2eb4-4754-a6c5-e3d480227fd6"
                },
                {
                    "Timestamp": 8.204260,
                    "Name": "Activate_DartGun_Target",
                    "ContractSessionId": "2517250493815325343-9ccedea3-32bd-4a3d-8059-7261d2cc9139",
                    "ContractId": "f8ec92c2-4fa2-471e-ae08-545480c746ee",
                    "Value": {
                        "SafehouseDummy": true,
                        "Payout": "1500"
                    },
                    "UserId": "fe76faee-ecdc-4dd7-a6d5-c5b84054a87c",
                    "SessionId": "76561199133083972-3546323201",
                    "Origin": "gameclient",
                    "Id": "69cc8b4e-fdb9-4101-a251-cd711abf8194"
                },
                {
                    "Timestamp": 8.204260,
                    "Name": "Activate_No_Witnesses",
                    "ContractSessionId": "2517250493815325343-9ccedea3-32bd-4a3d-8059-7261d2cc9139",
                    "ContractId": "f8ec92c2-4fa2-471e-ae08-545480c746ee",
                    "Value": {
                        "SafehouseDummy": true,
                        "Payout": "1000"
                    },
                    "UserId": "fe76faee-ecdc-4dd7-a6d5-c5b84054a87c",
                    "SessionId": "76561199133083972-3546323201",
                    "Origin": "gameclient",
                    "Id": "41c3a7d5-e280-4d80-a251-cd715b82148c"
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
                    "Value": 10,
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
                    "Name": "ObjectiveCompleted",
                    "ContractSessionId": "2517250493377433991-a689d113-9254-4f46-a6cc-8a3bac501ac8",
                    "ContractId": "6efd360a-5f78-44ac-9823-df077018c2b3",
                    "Value": {
                        "Id": "eae71e0a-0bb0-4897-abc5-8ed3c2f7efd0",
                        "Type": "setpiece",
                        "Category": "secondary",
                        "ExcludeFromScoring": false
                    },
                    "XboxGameMode": 2.000000,
                    "XboxDifficulty": 0.000000,
                    "Timestamp": 82.320374,
                    "UserId": "fe76faee-ecdc-4dd7-a6d5-c5b84054a87c",
                    "SessionId": "76561199133083972-3546323201",
                    "Origin": "gameclient",
                    "Id": "8d3e2808-f1cd-4652-ad13-1ecf577ca3c2"
                },
                {
                    "Name": "ObjectiveCompleted",
                    "ContractSessionId": "2517250493377433991-a689d113-9254-4f46-a6cc-8a3bac501ac8",
                    "ContractId": "6efd360a-5f78-44ac-9823-df077018c2b3",
                    "Value": {
                        "Id": "deb2f131-6ec9-45be-99c3-317392a3988a",
                        "Type": "custom",
                        "Category": "primary",
                        "ExcludeFromScoring": false
                    },
                    "XboxGameMode": 2.000000,
                    "XboxDifficulty": 0.000000,
                    "Timestamp": 82.320374,
                    "UserId": "fe76faee-ecdc-4dd7-a6d5-c5b84054a87c",
                    "SessionId": "76561199133083972-3546323201",
                    "Origin": "gameclient",
                    "Id": "73d5fb80-892e-4b47-ad13-1ecf466b9fea"
                }, {
                    "Name": "ObjectiveCompleted",
                    "ContractSessionId": "2517250493377433991-a689d113-9254-4f46-a6cc-8a3bac501ac8",
                    "ContractId": "6efd360a-5f78-44ac-9823-df077018c2b3",
                    "Value": {
                        "Id": "c7df70ce-c35f-4c9d-8f34-9b671e40e42a",
                        "Type": "custom",
                        "Category": "secondary",
                        "ExcludeFromScoring": false
                    },
                    "XboxGameMode": 2.000000,
                    "XboxDifficulty": 0.000000,
                    "Timestamp": 80.654007,
                    "UserId": "fe76faee-ecdc-4dd7-a6d5-c5b84054a87c",
                    "SessionId": "76561199133083972-3546323201",
                    "Origin": "gameclient",
                    "Id": "fe7aa59f-ae50-44af-ac14-f986052554fd"
                },
                {
                    "Name": "ObjectiveCompleted",
                    "ContractSessionId": "2517250493377433991-a689d113-9254-4f46-a6cc-8a3bac501ac8",
                    "ContractId": "6efd360a-5f78-44ac-9823-df077018c2b3",
                    "Value": {
                        "Id": "a87c7080-1c6b-4a7e-8f0b-6ea4ee68b821",
                        "Type": "custom",
                        "Category": "secondary",
                        "ExcludeFromScoring": false
                    },
                    "XboxGameMode": 2.000000,
                    "XboxDifficulty": 0.000000,
                    "Timestamp": 80.654007,
                    "UserId": "fe76faee-ecdc-4dd7-a6d5-c5b84054a87c",
                    "SessionId": "76561199133083972-3546323201",
                    "Origin": "gameclient",
                    "Id": "f9fb0e9b-1e1f-4217-ac14-f9868e9c305c"
                }
            ]
        ]
    })
}


!(async () => {
    // setInterval(async()=>{
    //     console.log((await (await fetch("https://hm3-service.hitman.io/profiles/page/Destination?locationId=LOCATION_PARENT_SNUG",
    //     { headers: { Authorization: TOKEN } })).json() as any).data.MasteryData[0].CompletionData)
    // },5000)
    // return;

    function* infinityIterator() {
        let i = 0;
        while (true) {
            yield i++;
        }
    }
    for await (const value of asyncPool(2, infinityIterator(), async () => {
        return await fakeCompleteEvergreen(TOKEN);
    })) {
        console.log("+1");
    }
})()

!(async function () {
    const getExp = async (oauthToken) => {
        return (await (await fetch("https://hm3-service.hitman.io/profiles/page/Destination?locationId=LOCATION_PARENT_SNUG",
            { headers: { Authorization: oauthToken } })).json() as any).data.MasteryData[0].CompletionData;
    };

    let lastExp = (await getExp(TOKEN) as any).XP;
    setInterval(async () => {
        // get delta exp
        const exp = (await getExp(TOKEN) as any).XP;
        const deltaExp = exp - lastExp;
        lastExp = exp;
        console.log(`- XP: +${deltaExp} exp (${deltaExp / 10}exp/s)`);
        console.log(`- Level: ${exp.Level}`)
    }, 10000)
})()