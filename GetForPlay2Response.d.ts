export interface GetForPlay2Response {
    Contract:                Contract;
    ContractSessionId:       string;
    ContractProgressionData: null;
}

export interface Contract {
    Data:     Data;
    Metadata: Metadata;
    UserData: UserData;
}

export interface Data {
    Objectives:       Objective[];
    GameChangers:     any[];
    Bricks:           any[];
    MandatoryLoadout: MandatoryLoadout[];
    EnableSaving:     boolean;
}

export interface MandatoryLoadout {
    Id:         string;
    Properties: Properties;
}

export interface Properties {
    LoadoutSlot:  string;
    RepositoryId: string;
}

export interface Objective {
    Type:         Type;
    Id:           string;
    BriefingText: BriefingText;
    HUDTemplate:  HUDTemplate;
    Category:     Category;
    Definition:   Definition;
}

export interface BriefingText {
    $loc: LOC;
}

export interface LOC {
    key:  Key;
    data: string;
}

export enum Key {
    UIContractGeneralObjKill = "UI_CONTRACT_GENERAL_OBJ_KILL",
}

export enum Category {
    Primary = "primary",
}

export interface Definition {
    Scope:   Scope;
    Context: Context;
    States:  States;
}

export interface Context {
    Targets: string[];
}

export enum Scope {
    Hit = "Hit",
}

export interface States {
    Start: Start;
}

export interface Start {
    Kill: Kill[];
}

export interface Kill {
    Condition:  Condition;
    Transition: Transition;
}

export interface Condition {
    $eq: string[];
}

export enum Transition {
    Success = "Success",
}

export interface HUDTemplate {
    display: BriefingText;
}

export enum Type {
    Statemachine = "statemachine",
}

export interface Metadata {
    Title:                      string;
    Description:                string;
    ScenePath:                  string;
    Location:                   string;
    IsPublished:                boolean;
    CreatorUserId:              string;
    GameVersion:                string;
    ServerVersion:              string;
    Type:                       string;
    Id:                         string;
    PublicId:                   string;
    TileImage:                  string;
    GroupObjectiveDisplayOrder: GroupObjectiveDisplayOrder[];
    CreationTimestamp:          Date;
    IsFeatured:                 boolean;
    Briefing:                   Briefing;
    OpportunityData:            any[];
}

export interface Briefing {
    CreatorPlatformId: string;
    TopTen:            TopTen[];
    FriendsTopTen:     any[];
}

export interface TopTen {
    ProfileId:  string;
    PlatformId: string;
    Score:      number;
}

export interface GroupObjectiveDisplayOrder {
    Id: string;
}

export interface UserData {
}
