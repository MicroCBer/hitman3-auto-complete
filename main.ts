import fetch from "node-fetch"
import { GetForPlay2Response, Objective } from './GetForPlay2Response';
import { v4 as uuidv4 } from 'uuid';
import { targetList } from './AmbroseIslandTargetList';
import asyncPool from "tiny-async-pool"
import { promises as fs } from "fs"
import { ChallengeServiceResponse, PurpleKill } from './ChallengeServiceResponse';

const SESSION_ID = "76561199133083900-573176600"

interface FakeCompleteConfig {
    complete?: boolean,
    time?: number,
    targetList?: string[],
    pickup?: boolean,
    uploadIn1Req?: boolean,
    maxRequests?: number,
    silent?: boolean,
    doorUnlockEventNum?: number,
    challenges?: string[] | (() => any)[],
    contractType?: "elusive" | "usercreate",
    oauthToken: string,
    forceGetforplay?: boolean
}

async function fake_complete(contractid, config: FakeCompleteConfig) {
    let get4play2: GetForPlay2Response = await (await fetch("https://hm3-service.hitman.io/authentication/api/userchannel/ContractsService/GetForPlay2",
        { method: "POST", headers: { Authorization: config.oauthToken }, body: JSON.stringify({ "id": contractid, "locationId": "LOCATION_COLORADO", "extraGameChangerIds": [], "difficultyLevel": 2.000000 }) }
    )
    ).json() as any;

    function parseJwt(token) {
        return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
    }
    let userID = parseJwt(config.oauthToken).sub

    if (!get4play2.ContractSessionId && config.forceGetforplay) throw Error("Get for play 2 failed!")


    let sessionid = get4play2.ContractSessionId || makeRepoID();
    let contractStart = await (await fetch("https://hm3-service.hitman.io/authentication/api/userchannel/EventsService/SaveEvents2",
        {
            method: "POST",
            headers: { Authorization: config.oauthToken },
            body: JSON.stringify({
                "userId": userID,
                "values": [
                    {
                        "Name": "ContractStart",
                        "ContractSessionId": sessionid,
                        "ContractId": contractid,
                        "Value": {
                            "Loadout": [
                                {
                                    "RepositoryId": "73875794-5a86-410e-84a4-1b5b2f7e5a54",
                                    "InstanceId": "",
                                    "OnlineTraits": [
                                        "pistol"
                                    ],
                                    "Category": null
                                },
                                {
                                    "RepositoryId": "1a11a060-358c-4054-98ec-d3491af1d7c6",
                                    "InstanceId": "",
                                    "OnlineTraits": [
                                        "fiberwire"
                                    ],
                                    "Category": null
                                },
                                {
                                    "RepositoryId": "dda002e9-02b1-4208-82a5-cf059f3c79cf",
                                    "InstanceId": "",
                                    "OnlineTraits": [
                                        "distraction"
                                    ],
                                    "Category": null
                                },
                                {
                                    "RepositoryId": "dda002e9-02b1-4208-82a5-cf059f3c79cf",
                                    "InstanceId": "",
                                    "OnlineTraits": [
                                        "distraction"
                                    ],
                                    "Category": null
                                },
                                {
                                    "RepositoryId": "dda002e9-02b1-4208-82a5-cf059f3c79cf",
                                    "InstanceId": "",
                                    "OnlineTraits": [
                                        "distraction"
                                    ],
                                    "Category": null
                                },
                                {
                                    "RepositoryId": "dda002e9-02b1-4208-82a5-cf059f3c79cf",
                                    "InstanceId": "",
                                    "OnlineTraits": [
                                        "distraction"
                                    ],
                                    "Category": null
                                },
                                {
                                    "RepositoryId": "dda002e9-02b1-4208-82a5-cf059f3c79cf",
                                    "InstanceId": "",
                                    "OnlineTraits": [
                                        "distraction"
                                    ],
                                    "Category": null
                                }
                            ],
                            "Disguise": "00000000-0000-0000-0000-000000000000",
                            "LocationId": "LOCATION_COLORADO",
                            "GameChangers": [],
                            "ContractType": config.contractType || "usercreate",
                            "DifficultyLevel": 2.000000,
                            "IsVR": false,
                            "IsHitmanSuit": true,
                            "SelectedCharacterId": "00000000-0000-0000-0000-000000000000"
                        },
                        "XboxGameMode": 2.000000,
                        "XboxDifficulty": 0.000000,
                        "Timestamp": 0.000000,
                        "UserId": userID,
                        "SessionId": SESSION_ID,
                        "Origin": "gameclient",
                        "Id": uuidv4()
                    }
                ],
                "lastEventTicks": "637961585103490253",
                "clienttype": "gameclient",
                "lastPushDt": "0"
            })
        })).json()

    let killEvents: any[] = [];

    function addKillEvent(repoid: string) {
        killEvents.push({
            "Timestamp": 80.117386,
            "Name": "Kill",
            "ContractSessionId": sessionid,
            "ContractId": contractid,
            "Value": {
                "RepositoryId": repoid,
                "ActorId": 0.000000,
                "ActorName": "",
                "ActorType": 1.000000,
                "KillType": 5.000000,
                "KillContext": 4.000000,
                "KillClass": "ballistic",
                "Accident": true,
                "WeaponSilenced": false,
                "Explosive": true,
                "ExplosionType": 1.000000,
                "Projectile": false,
                "Sniper": false,
                "IsHeadshot": false,
                "IsTarget": true,
                "ThroughWall": false,
                "BodyPartId": 3.000000,
                "TotalDamage": 3127.244385,
                "IsMoving": true,
                "RoomId": 19.000000,
                "ActorPosition": "-7.66638, -42.8737, -1.42002",
                "HeroPosition": "-7.05382, -52.8057, -1.42002",
                "DamageEvents": [
                    "Shoot"
                ],
                "PlayerId": 0.000000,
                "OutfitRepositoryId": "054f443b-824f-4913-8b29-64dfcd82b089",
                "OutfitIsHitmanSuit": true,
                "EvergreenRarity": -1.000000,
                "KillItemRepositoryId": "73875794-5a86-410e-84a4-1b5b2f7e5a54",
                "KillItemInstanceId": "",
                "KillItemCategory": "pistol",
                "KillMethodBroad": "pistol",
                "KillMethodStrict": "",
                "History": []
            },
            "UserId": userID,
            "SessionId": SESSION_ID,
            "Origin": "gameclient",
            "Id": uuidv4()
        })
    }

    function addDoorUnlocked() {
        killEvents.push({
            "Timestamp": 1050.173462,
            "Name": "Door_Unlocked",
            "ContractSessionId": sessionid,
            "ContractId": contractid,
            "Value": "",
            "UserId": userID,
            "SessionId": SESSION_ID,
            "Origin": "gameclient",
            "Id": uuidv4()
        })
    }

    function addOpportunityEvent(repoid: string) {
        killEvents.push(
            {
                "Timestamp": 1219.772949,
                "Name": "OpportunityEvents",
                "ContractSessionId": sessionid,
                "ContractId": contractid,
                "Value": {
                    "RepositoryId": repoid,
                    "Event": "Enabled"
                },
                "UserId": userID,
                "SessionId": SESSION_ID,
                "Origin": "gameclient",
                "Id": uuidv4()
            }
        )
    }

    function addPickTargetEvent(repoid: string) {
        killEvents.push({
            "Timestamp": 97.324448,
            "Name": "TargetPicked",
            "ContractSessionId": sessionid,
            "ContractId": contractid,
            "Value": {
                "Position": { "x": -60.972000, "y": 74.101028, "z": 3.934181, "w": 1.000000 },
                "RepositoryId": repoid,
                "Name": "0"
            },
            "UserId": userID,
            "SessionId": SESSION_ID,
            "Origin": "gameclient",
            "Id": uuidv4()
        })
    }

    if (!config.targetList)
        for (let objective of get4play2.Contract.Data.Objectives) {
            if (objective.Definition.Scope === "Hit") {
                let repoid = objective.Definition.Context.Targets[0];
                addKillEvent(repoid);
            }
        }
    else
        for (let objective of config.targetList) {
            if (config.pickup) addPickTargetEvent(objective)
            addKillEvent(objective)
        }

    if (config.doorUnlockEventNum) {
        for (let n = 0; n < config.doorUnlockEventNum; n++)addDoorUnlocked()
    }

    if (config.challenges) {
        for (let challenge of config.challenges) {
            if (typeof challenge === "string") addOpportunityEvent(challenge)
            else {
                killEvents.push({
                    "ContractSessionId": sessionid,
                    "ContractId": contractid,
                    "SessionId": SESSION_ID,
                    "Origin": "gameclient",
                    "Id": uuidv4(),
                    "UserId": userID,
                    ...challenge()
                })

            }
        }
    }

    if (!config.complete) killEvents.pop();

    if (!config.silent)
        console.log(`Uploading kill events(${killEvents.length})`)


    if (config.uploadIn1Req)
        await (await fetch("https://hm3-service.hitman.io/authentication/api/userchannel/EventsService/SaveEvents2",
            {
                method: "POST",
                headers: { Authorization: config.oauthToken },
                body: JSON.stringify({
                    "userId": userID,
                    "values": killEvents,
                    "lastEventTicks": "637961581105885696",
                    "clienttype": "gameclient",
                    "lastPushDt": "0"
                })
            })).json()
    else {
        let killEventLen = killEvents.length, completedNum = 0;
        let maxT = config.maxRequests || 3;

        let killEventsMig: number[][] = [[]];
        for (let x = 0; x < killEvents.length; x++) {
            killEventsMig[0].push(killEvents[x]);
            if (killEventsMig[0].length > 3) {
                killEventsMig.unshift([]);
            }
        }

        for await (const value of asyncPool(maxT, killEventsMig, async (val) => {
            await (await fetch("https://hm3-service.hitman.io/authentication/api/userchannel/EventsService/SaveEvents2",
                {
                    method: "POST",
                    headers: { Authorization: config.oauthToken },
                    body: JSON.stringify({
                        "userId": userID,
                        "values": val,
                        "lastEventTicks": "637961581105885696",
                        "clienttype": "gameclient",
                        "lastPushDt": "0"
                    })
                })).json()
            completedNum += val.length;
        })) {
            if (!config.silent)
                console.log(`Event uploaded - ${completedNum}/${killEventLen}`);
        }
    }

    let last: any = {
        "Name": "ContractFailed",
        "ContractSessionId": sessionid,
        "ContractId": contractid,
        "Value": "Contract ended manually: OnRestartLevel",
        "XboxGameMode": 2.000000,
        "XboxDifficulty": 0.000000,
        "Timestamp": config.time || 8888,
        "UserId": userID,
        "SessionId": SESSION_ID,
        "Origin": "gameclient",
        "Id": uuidv4()
    };

    if (config.complete) {
        last = {
            "Name": "ContractEnd",
            "ContractSessionId": sessionid,
            "ContractId": contractid,
            "Value": {
                "ContractType": config.contractType || "usercreate",
                "GameMode": 0.000000,
                "EngineMode": 0.000000
            }, "XboxGameMode": 2.000000,
            "XboxDifficulty": 0.000000,
            "Timestamp": config.time || 8888,
            "UserId": userID,
            "SessionId": SESSION_ID,
            "Origin": "gameclient",
            "Id": uuidv4()
        }
    }

    let Eresult = await (await fetch("https://hm3-service.hitman.io/authentication/api/userchannel/EventsService/SaveEvents2",
        {
            method: "POST",
            headers: { Authorization: config.oauthToken },
            body: JSON.stringify({
                "userId": userID,
                "values": [
                    last
                ],
                "lastEventTicks": "637961581105885696",
                "clienttype": "gameclient",
                "lastPushDt": "0"
            })
        })).json()
}

async function getExp(oauthToken) {
    return (await (await fetch("https://hm3-service.hitman.io/profiles/page/GetPlayerProfileXpData", { headers: { Authorization: oauthToken } })).json() as any).data.PlayerProfileXpData;
}

// !(async () => {
//     let lastExp = await getExp()
//     for (let x = 0; x < 100; x++) {
//         console.log(`Starting ${x}th XP: ${lastExp.XP} Level: ${lastExp.Level}`)
//         let ts = new Date().getTime();
//         await fake_complete(CONTRACT_ID, {
//             complete: true
//         })
//         let currentExp = await getExp()
//         console.log(`Finished ${x}th XP: ${currentExp.XP}(+${currentExp.XP - lastExp.XP}) Level: ${currentExp.Level}(+${currentExp.Level - lastExp.Level}) Time used: ${((new Date().getTime() - ts) / 1000).toFixed(2)}s`)
//         lastExp = currentExp
//     }
// })()

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

function makeRepoID() {
    return `${makeid(8)}-${makeid(4)}-${makeid(4)}-${makeid(4)}-${makeid(12)}`
}

async function fetchChallengeFromChallengeService(contractid: string, oauthToken: string) {
    let resp: ChallengeServiceResponse[] = await (await fetch("https://hm3-service.hitman.io/authentication/api/userchannel/ChallengesService/GetActiveChallengesAndProgression",
        {
            headers: { Authorization: oauthToken },
            method: "POST",
            body: JSON.stringify({ "contractId": contractid, "difficultyLevel": 2.000000 })
        })).json() as any;

    fs.writeFile("test.json", JSON.stringify(resp, null, "\t"))

    let challenges: (() => any)[] = [];
    for (let data of resp) {
        if (data.Challenge.Definition.Constants?.Target)
            challenges.push(() => ({
                "Name": "OpportunityEvents",
                "Value": {
                    "RepositoryId": data.Challenge.Definition.Constants?.Target,
                    "Event": "Trigger"
                }
            }))

        let kill = data.Challenge.Definition.States.Start?.Kill as PurpleKill;
        if (kill && kill.Condition && kill.Condition?.$eq) {
            if (typeof kill.Condition?.$eq[1] === "string") {
                let repoid = kill.Condition?.$eq[1];
                challenges.push(() => ({
                    "Name": "Kill",
                    "Value": {
                        "RepositoryId": repoid,
                        "ActorId": 0.000000,
                        "ActorName": "",
                        "ActorType": 1.000000,
                        "KillType": 5.000000,
                        "KillContext": 4.000000,
                        "KillClass": "ballistic",
                        "Accident": true,
                        "WeaponSilenced": false,
                        "Explosive": true,
                        "ExplosionType": 1.000000,
                        "Projectile": false,
                        "Sniper": false,
                        "IsHeadshot": false,
                        "IsTarget": true,
                        "ThroughWall": false,
                        "BodyPartId": 3.000000,
                        "TotalDamage": 3127.244385,
                        "IsMoving": true,
                        "RoomId": 19.000000,
                        "ActorPosition": "-7.66638, -42.8737, -1.42002",
                        "HeroPosition": "-7.05382, -52.8057, -1.42002",
                        "DamageEvents": [
                            "Shoot"
                        ],
                        "PlayerId": 0.000000,
                        "OutfitRepositoryId": "054f443b-824f-4913-8b29-64dfcd82b089",
                        "OutfitIsHitmanSuit": true,
                        "EvergreenRarity": -1.000000,
                        "KillItemRepositoryId": "73875794-5a86-410e-84a4-1b5b2f7e5a54",
                        "KillItemInstanceId": "",
                        "KillItemCategory": "pistol",
                        "KillMethodBroad": "pistol",
                        "KillMethodStrict": "",
                        "History": []
                    }
                }))
            }
        }
    }

    return challenges
}

async function checkPlayed(contractid: string, token:string){
    let res=await(await fetch("https://hm3-service.hitman.io/profiles/page/LeaderboardEntries?contractid="+contractid+"&page=999999&type=singleplayer&difficultyLevel=2",{
        headers:{
            Authorization:token,
            Version:"8.9.0",
        }
    })).json() as any

    return res.data.PlayerEntry!==null
}

async function runFakeComplete(contractid: string, config: FakeCompleteConfig) {
    let lastExp = await getExp(config.oauthToken)
    let ts = new Date().getTime();
    await fake_complete(contractid, config)
    let currentExp = await getExp(config.oauthToken)
    let time = ((new Date().getTime() - ts) / 1000);
    let deltaExp = currentExp.XP - lastExp.XP;
    let speed = (deltaExp / time);
    console.log(`Finished \n\t- XP: ${currentExp.XP}(+${deltaExp}) \n\t- Level: ${currentExp.Level}(+${currentExp.Level - lastExp.Level}) \n\t- Time used: ${time.toFixed(2)}s \n\t- Speed:${speed.toFixed(2)} exp/s`)
    return deltaExp
}

export { runFakeComplete, fetchChallengeFromChallengeService, checkPlayed };