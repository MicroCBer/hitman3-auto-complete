export interface ChallengeServiceResponse {
    Challenge:   Challenge;
    Progression: Progression;
}

export interface Challenge {
    Id:             string;
    GroupId:        string;
    Name:           string;
    Type:           TypeEnum;
    Description:    string;
    ImageName:      null | string;
    Definition:     Definition;
    Tags:           string[];
    Drops:          string[];
    LastModified:   Date;
    Xp:             number;
    XpModifier:     XPModifier;
    PlayableSince:  null;
    PlayableUntil:  null;
    InclusionData?: InclusionData;
    CrowdChoice?:   CrowdChoice;
}

export interface CrowdChoice {
    Tag: string;
}

export interface Definition {
    Constants?:              Constants;
    Context?:                Context;
    ContextListeners?:       ContextListeners;
    Scope?:                  Scope;
    States:                  States;
    ResetOnCycleCompletion?: boolean;
    Repeatable?:             DefinitionRepeatable;
}

export interface Constants {
    Goal?:               number;
    RequiredChallenges?: string[];
    Target?:             string;
    Targets?:            string[];
    EligibleDisguises?:  string[];
    Item?:               string;
}

export interface Context {
    CompletedChallenges?: any[];
    IntelItemPickedup?:   any[];
    _SessionRewards?:     any[];
    RecordingDestroyed?:  boolean;
    Targets?:             any[];
    Witnesses?:           any[];
    LastAccidentTime?:    number;
    DisguiseEquipped?:    any[];
    KilledTargets?:       any[];
    FriskZone?:           any[];
    Count?:               number;
    HitmanIsInBlock?:     boolean;
    AreaIDs?:             any[];
    SniperKillSierraCar?: boolean;
}

export interface ContextListeners {
    Count?:               AreaIDs;
    RecordingDestroyed?:  RecordingDestroyed;
    KilledTargets?:       CompletedChallenges;
    CompletedChallenges?: CompletedChallenges;
    AreaIDs?:             AreaIDs;
    DisguiseEquipped?:    AreaIDs;
}

export interface AreaIDs {
    type:  Type;
    count: string;
    total: Total;
    text?: string;
}

export enum Total {
    EligibleDisguisesCount = "($.EligibleDisguises).Count",
    Goal = "$.Goal",
}

export enum Type {
    Challengecounter = "challengecounter",
}

export interface CompletedChallenges {
    comparand: string;
    type:      string;
}

export interface RecordingDestroyed {
    type: string;
}

export interface DefinitionRepeatable {
    Base:  number;
    Delta: number;
}

export enum Scope {
    Hit = "hit",
    Profile = "profile",
    Session = "session",
}

export interface States {
    Start:              Start;
    Active?:            Active;
    Checkbodyfound?:    Check;
    CheckNoticedKill?:  CheckNoticedKill;
    CheckUnnoticed?:    Check;
    CheckDisguise?:     CheckDisguise;
    WaitForSuccess?:    WaitForSuccess;
    Deprivation_State?: DeprivationState;
    Is_DoubleKill?:     IsDoubleKill;
    CheckWater?:        CheckWater;
    TurnonCleansing?:   TurnonCleansing;
}

export interface Active {
    Kill: ActiveKill;
}

export interface ActiveKill {
    Condition:  PurpleCondition;
    Transition: CurrentState;
}

export interface PurpleCondition {
    $and: ContractStartCondition[];
}

export interface ContractStartCondition {
    $eq: Array<boolean | string>;
}

export enum CurrentState {
    Active = "Active",
    DeprivationState = "Deprivation_State",
    Failure = "Failure",
    Start = "Start",
    Success = "Success",
    TurnonCleansing = "TurnonCleansing",
}

export interface CheckDisguise {
    Disguise:    Disguise;
    ContractEnd: CheckDisguiseContractEnd;
}

export interface CheckDisguiseContractEnd {
    Actions:    ContractEndActions;
    Transition: CurrentState;
}

export interface ContractEndActions {
    $pushunique: Array<boolean | string>;
}

export interface Disguise {
    Transition: CurrentState;
}

export interface CheckNoticedKill {
    DeadBodySeen:   Disguise;
    Unnoticed_Kill: Disguise;
}

export interface Check {
    $timer:              Timer;
    BodyFound:           Disguise;
    Spotted:             Disguise;
    Unnoticed_Pacified?: Disguise;
    Unnoticed_Kill?:     Disguise;
}

export interface Timer {
    Condition:  TimerCondition;
    Transition: CurrentState;
}

export interface TimerCondition {
    $after: number;
}

export interface CheckWater {
    ROYCE_IN_WATER: Disguise;
}

export interface DeprivationState {
    Kill:                   Kill;
    DEPRIVATION_LEFT_EVENT: Disguise;
}

export interface Kill {
    Condition?: OpportunityEventsCondition;
    Transition: string;
}

export interface OpportunityEventsCondition {
    $and: Element[];
}

export interface Element {
    $eq: string[];
}

export interface IsDoubleKill {
    $timer: Timer;
    Kill:   IsDoubleKillKill;
}

export interface IsDoubleKillKill {
    Condition:  FluffyCondition;
    Transition: CurrentState;
}

export interface FluffyCondition {
    $and: PurpleAnd[];
}

export interface PurpleAnd {
    $any?:      Any;
    $eq?:       string[];
    $contains?: string[];
}

export interface Any {
    "?": Element;
    in:  string;
}

export interface Start {
    ChallengeCompleted?:             ChallengeCompleted[];
    PollResult_Drown?:               Disguise;
    ItemPickedUp?:                   ItemPickedUpElement[] | Actorsick;
    Spotted?:                        Spotted;
    ContractEnd?:                    StartContractEnd;
    Kill?:                           KillElement[] | PurpleKill;
    AreaDiscovered?:                 AreaDiscoveredElement[] | Disguise;
    AccidentBodyFound?:              AccidentBodyFound;
    MurderedBodySeen?:               MurderedBodySeen[];
    CrowdNPC_Died?:                  Disguise;
    Witnesses?:                      Witnesses;
    SecuritySystemRecorder?:         SecuritySystemRecorderElement[] | PurpleSecuritySystemRecorder;
    StartingSuit?:                   StartingSuit;
    Disguise?:                       DisguiseElement[] | PurpleDisguise;
    PollResult_HeadShot?:            Disguise;
    PollResult_FibreWire?:           Disguise;
    Pacify?:                         PacifyElement[] | Kill;
    BodyHidden?:                     Disguise;
    FoxTargetIdEvent?:               Disguise;
    Level_Setup_Events?:             LevelSetupEvent[] | Actorsick;
    ContractStart?:                  ContractStart[];
    PollResult_Poison?:              Disguise;
    ObjectiveCompleted?:             ObjectiveCompleted;
    BeingFrisked?:                   BeingFrisked;
    Door_Unlocked?:                  Disguise;
    PollResult_Accident?:            Disguise;
    Rat_Door_B_Open?:                Disguise;
    exit_gate?:                      ExitGate;
    Rat_Door_A_Open?:                Disguise;
    HATCH_OPEN_EVENT?:               Disguise;
    FACILITY_EXIT_EVENT?:            Disguise;
    Rat_Ladder_A_Open?:              Disguise;
    CollectOneAccedDongle?:          CollectOneAccedDongle[];
    NOSAFTY_COMPLETE_EVENT?:         Disguise;
    MINDDESTRACTION_COMPLETE_EVENT?: Disguise;
    Actorsick?:                      Actorsick;
    OpportunityEvents?:              Kill;
    DEPRIVATION_ENTERED_EVENT?:      Disguise;
    MNEMONIC_COMPLETE_EVENT?:        Disguise;
    KILLINGTHEPAST_COMPLETE_EVENT?:  Disguise;
    SniperKillSierraCar?:            SniperKillSierraCar;
    DRONE_DESTROYED?:                CollectOneAccedDongle[];
    ARCHIVIST_TERMINAL_CORRECT?:     Disguise;
    BREAKSIGNAL_COMPLETE_EVENT?:     Disguise;
    MAINTENANCE_COMPLETE_EVENT?:     Disguise;
}

export interface AccidentBodyFound {
    $set: string[];
}

export interface Actorsick {
    Condition:  Element;
    Transition: CurrentState;
}

export interface AreaDiscoveredElement {
    Actions?:    StartingSuit;
    Condition?:  Element;
    Transition?: CurrentState;
}

export interface StartingSuit {
    $pushunique: string[];
}

export interface BeingFrisked {
    Condition:  StartingSuit;
    Transition: string;
}

export interface ChallengeCompleted {
    Condition?:   ChallengeCompletedCondition;
    Actions?:     StartingSuit;
    Transition?:  CurrentState;
    $pushunique?: string[];
}

export interface ChallengeCompletedCondition {
    $any?: Any;
    $ge?:  Ge[];
    $all?: All;
}

export interface All {
    "?": Empty;
    in:  string;
}

export interface Empty {
    $any: Any;
}

export enum Ge {
    CompletedChallengesCount = "($.CompletedChallenges).Count",
    Goal = "$.Goal",
}

export interface CollectOneAccedDongle {
    Actions?:    CollectOneAccedDongleActions;
    Condition?:  Element;
    Transition?: CurrentState;
}

export interface CollectOneAccedDongleActions {
    $inc: string;
}

export interface StartContractEnd {
    Actions?:   ContractEndActions;
    Transition: CurrentState;
    Condition?: ContractEndCondition;
}

export interface ContractEndCondition {
    $and: FluffyAnd[];
}

export interface FluffyAnd {
    $eq?:  Array<boolean | string>;
    $all?: All;
}

export interface ContractStart {
    Condition:  ContractStartCondition;
    Transition: string;
}

export interface DisguiseElement {
    Condition:   DisguiseCondition;
    Actions?:    StartingSuit;
    Transition?: CurrentState;
}

export interface DisguiseCondition {
    $any?: Any;
    $all?: All;
}

export interface PurpleDisguise {
    Condition?: { [key: string]: In[] };
    Transition: CurrentState;
}

export enum In {
    DisguiseEquipped = "DisguiseEquipped",
    Target = "$.Target",
    Value = "$Value",
}

export interface ItemPickedUpElement {
    Actions?:    ItemPickedUpActions;
    Condition:   TentacledCondition;
    Transition?: CurrentState;
}

export interface ItemPickedUpActions {
    $pushunique?: string[];
    $inc?:        string;
}

export interface TentacledCondition {
    $and?: TentacledAnd[];
    $any?: Any;
    $eq?:  string[];
}

export interface TentacledAnd {
    $eq?:  string[];
    $not?: Empty;
}

export interface KillElement {
    Condition:   StickyCondition;
    Transition?: string;
    Actions?:    StartingSuit;
}

export interface StickyCondition {
    $and?: StickyAnd[];
    $eq?:  Array<boolean | string>;
    $or?:  ConditionOr[];
}

export interface StickyAnd {
    $eq?:  Array<boolean | number | string>;
    $not?: PurpleNot;
    $any?: PurpleAny;
}

export interface PurpleAny {
    "?": Element;
    in:  string[];
}

export interface PurpleNot {
    $eq: Array<number | string>;
}

export interface ConditionOr {
    $and: OrAnd[];
}

export interface OrAnd {
    $not?: FluffyNot;
    $eq?:  Array<boolean | string>;
    $or?:  AndOr[];
}

export interface FluffyNot {
    $contains?: string[];
    $eq?:       Array<number | string>;
}

export interface AndOr {
    $not?: Element;
    $and?: ContractStartCondition[];
}

export interface PurpleKill {
    Condition:  IndigoCondition;
    Transition: Transition;
    Actions?:   StartingSuit;
}

export interface IndigoCondition {
    $and?: IndigoAnd[];
    $eq?:  Array<boolean | string>;
}

export interface IndigoAnd {
    $eq?:       Array<boolean | number | string>;
    $not?:      PurpleNot;
    $any?:      Any;
    $contains?: string[];
}

export enum Transition {
    CheckWater = "CheckWater",
    Checkbodyfound = "Checkbodyfound",
    Failure = "Failure",
    IsDoubleKill = "Is_DoubleKill",
    Success = "Success",
}

export interface LevelSetupEvent {
    Condition: Element;
    $set:      Array<boolean | string>;
}

export interface MurderedBodySeen {
    Condition:   MurderedBodySeenCondition;
    Actions?:    StartingSuit;
    Transition?: CurrentState;
}

export interface MurderedBodySeenCondition {
    $eq?:  Array<boolean | string>;
    $and?: IndecentAnd[];
}

export interface IndecentAnd {
    $eq?:  Array<boolean | string>;
    $not?: Element;
}

export interface ObjectiveCompleted {
    Condition:  ContractStartCondition;
    Actions:    StartingSuit;
    Transition: CurrentState;
}

export interface PacifyElement {
    Condition:   IndecentCondition;
    Actions?:    CollectOneAccedDongleActions;
    Transition?: CurrentState;
}

export interface IndecentCondition {
    $and?: HilariousAnd[];
    $eq?:  string[];
}

export interface HilariousAnd {
    $eq?:  Array<boolean | number | string>;
    $any?: Any;
}

export interface SecuritySystemRecorderElement {
    Actions?:    SniperKillSierraCar;
    Condition:   HilariousCondition;
    Transition?: CurrentState;
}

export interface SniperKillSierraCar {
    $set: Array<boolean | SetEnum>;
}

export enum SetEnum {
    RecordingDestroyed = "RecordingDestroyed",
    SniperKillSierraCar = "SniperKillSierraCar",
}

export interface HilariousCondition {
    $eq?: EqEnum[];
    $or?: Element[];
}

export enum EqEnum {
    CameraDestroyed = "CameraDestroyed",
    Spotted = "spotted",
    ValueEvent = "$Value.event",
}

export interface PurpleSecuritySystemRecorder {
    Condition:  AmbitiousCondition;
    Actions:    ContractEndActions;
    Transition: CurrentState;
}

export interface AmbitiousCondition {
    $or: Element[];
}

export interface Spotted {
    Transition?: CurrentState;
    Condition?:  SpottedCondition;
}

export interface SpottedCondition {
    $any: FluffyAny;
}

export interface FluffyAny {
    in:  In;
    "?": StartingSuit;
}

export interface Witnesses {
    Condition: SpottedCondition;
}

export interface ExitGate {
    Condition:  ExitGateCondition;
    Transition: CurrentState;
}

export interface ExitGateCondition {
    $eq?:  string[];
    $and?: AmbitiousAnd[];
}

export interface AmbitiousAnd {
    $any: PurpleAny;
}

export interface TurnonCleansing {
    Kill: Kill;
}

export interface WaitForSuccess {
    FriskedSuccess: Disguise;
}

export interface InclusionData {
    ContractIds:   null;
    ContractTypes: ContractType[];
    Locations:     null;
    GameModes:     null;
}

export enum ContractType {
    Arcade = "arcade",
    Campaign = "campaign",
    Creation = "creation",
    Elusive = "elusive",
    Escalation = "escalation",
    Featured = "featured",
    Flashback = "flashback",
    Mission = "mission",
    Orbis = "orbis",
    Placeholder = "placeholder",
    Tutorial = "tutorial",
    Usercreated = "usercreated",
    Vsrace = "vsrace",
}

export enum TypeEnum {
    Hit = "Hit",
    Statistic = "Statistic",
}

export interface XPModifier {
}

export interface Progression {
    ChallengeId: string;
    ProfileId:   string;
    State:       State;
    CompletedAt: Date | null;
    Completed:   boolean;
}

export interface State {
    CompletedChallenges?: string[];
    CurrentState?:        CurrentState;
    _SysVars?:            SysVars;
    $StateEntryTime?:     number;
    $TimerEntryEvent?:    TimerEntryEvent;
    Count?:               number;
    AreaIDs?:             string[];
    Goal?:                number;
    DisguiseEquipped?:    string[];
    Witnesses?:           string[];
    KilledTargets?:       string[];
    RecordingDestroyed?:  boolean;
    LastAccidentTime?:    number;
    Targets?:             string[];
    SniperKillSierraCar?: boolean;
}

export interface TimerEntryEvent {
    CreatedAt:         Date;
    Token:             string;
    Id:                string;
    Name:              string;
    UserId:            string;
    ContractId:        string;
    SessionId:         string;
    ContractSessionId: string;
    Timestamp:         number;
    Value:             Value;
    Origin:            string;
    Version:           Version;
    IsReplicated:      boolean;
}

export interface Value {
    RepositoryId:         string;
    ActorId:              number;
    ActorName:            string;
    ActorType:            number;
    KillType:             number;
    KillContext:          number;
    KillClass:            string;
    Accident:             boolean;
    WeaponSilenced:       boolean;
    Explosive:            boolean;
    ExplosionType:        number;
    Projectile:           boolean;
    Sniper:               boolean;
    IsHeadshot:           boolean;
    IsTarget:             boolean;
    ThroughWall:          boolean;
    BodyPartId:           number;
    TotalDamage:          number;
    IsMoving:             boolean;
    RoomId:               number;
    ActorPosition:        string;
    HeroPosition:         string;
    DamageEvents:         string[];
    PlayerId:             number;
    OutfitRepositoryId:   string;
    OutfitIsHitmanSuit:   boolean;
    EvergreenRarity:      number;
    KillItemRepositoryId: string;
    KillItemInstanceId:   string;
    KillItemCategory:     string;
    KillMethodBroad:      string;
    KillMethodStrict:     string;
    History:              any[];
}

export interface Version {
    Major:    number;
    Minor:    number;
    Build:    number;
    Revision: number;
}

export interface SysVars {
    Repeatable: SysVarsRepeatable;
}

export interface SysVarsRepeatable {
    SuccessCount:     number;
    CompletionCount?: number;
}
