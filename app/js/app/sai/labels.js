/*jslint browser: true, eqeq: true, white: true, plusplus: true */
/*global angular, console, alert*/

(function() {
  "use strict";

  var app = angular.module("keira2");

  /*  In this file are listed all SmartAI editor view labels:
   *  - all index values correspond to the action_type, event_type, or target_type value
   *  - for example app.saiLabels.action_type.param1[2] will be the label of the action_type param1 when action_type is 2
   *  - most labels are taken from https://github.com/Discover-/SAI-Editor/blob/master/SAI-Editor/sqlite_database.db
   *  - most comment labels are taken from https://github.com/Discover-/SAI-Editor/blob/master/SAI-Editor/Classes/CommentGenerator.cs
   */

  /* INIT ARRAYS */
  app.saiLabels = [];
  app.saiLabels.action_type = [];
  app.saiLabels.event_type = [];
  app.saiLabels.target_type = [];

  app.saiLabels.action_type.name = [];
  app.saiLabels.event_type.name = [];
  app.saiLabels.target_type.name = [];

  app.saiLabels.action_type.tooltip = [];
  app.saiLabels.event_type.tooltip = [];
  app.saiLabels.target_type.tooltip = [];

  app.saiLabels.action_type.param1 = [];
  app.saiLabels.action_type.param2 = [];
  app.saiLabels.action_type.param3 = [];
  app.saiLabels.action_type.param4 = [];
  app.saiLabels.action_type.param5 = [];
  app.saiLabels.action_type.param6 = [];

  app.saiLabels.event_type.param1 = [];
  app.saiLabels.event_type.param2 = [];
  app.saiLabels.event_type.param3 = [];
  app.saiLabels.event_type.param4 = [];

  app.saiLabels.target_type.param1 = [];
  app.saiLabels.target_type.param2 = [];
  app.saiLabels.target_type.param3 = [];

  app.saiLabels.action_type.paramTooltip1 = [];
  app.saiLabels.action_type.paramTooltip2 = [];
  app.saiLabels.action_type.paramTooltip3 = [];
  app.saiLabels.action_type.paramTooltip4 = [];
  app.saiLabels.action_type.paramTooltip5 = [];
  app.saiLabels.action_type.paramTooltip6 = [];

  app.saiLabels.action_type.flagger1 = [];
  app.saiLabels.action_type.flagger2 = [];
  app.saiLabels.action_type.flagger3 = [];
  app.saiLabels.action_type.flagger4 = [];
  app.saiLabels.action_type.flagger5 = [];
  app.saiLabels.action_type.flagger6 = [];

  app.saiLabels.event_type.paramTooltip1 = [];
  app.saiLabels.event_type.paramTooltip2 = [];
  app.saiLabels.event_type.paramTooltip3 = [];
  app.saiLabels.event_type.paramTooltip4 = [];

  app.saiLabels.target_type.paramTooltip1 = [];
  app.saiLabels.target_type.paramTooltip2 = [];
  app.saiLabels.target_type.paramTooltip3 = [];

  app.saiLabels.comment = [];
  app.saiLabels.comment.action = [];
  app.saiLabels.comment.event = [];
  app.saiLabels.comment.target = [];

  /* Action Flag Picker */

  app.saiLabels.action_type.flagger1[18] = "partials/sai/modals/unit_flag.html";
  app.saiLabels.action_type.flagger1[19] = "partials/sai/modals/unit_flag.html";
  app.saiLabels.action_type.flagger1[81] = "partials/sai/modals/npc_flag.html";
  app.saiLabels.action_type.flagger1[82] = "partials/sai/modals/npc_flag.html";
  app.saiLabels.action_type.flagger1[83] = "partials/sai/modals/npc_flag.html";

  app.saiLabels.action_type.flagger2[11] = "partials/sai/modals/cast_flag.html";
  app.saiLabels.action_type.flagger2[12] =
    "partials/sai/modals/summon_types.html";

  //app.saiLabels.action_type.flagger3[11] = "partials/sai/modals/cast_flag.html";

  /* ACTION NAMES */
  app.saiLabels.action_type.name[0] = "NONE";
  app.saiLabels.action_type.name[1] = "TALK";
  app.saiLabels.action_type.name[2] = "SET_FACTION";
  app.saiLabels.action_type.name[3] = "MORPH_TO_ENTRY_OR_MODEL";
  app.saiLabels.action_type.name[4] = "SOUND";
  app.saiLabels.action_type.name[5] = "PLAY_EMOTE";
  app.saiLabels.action_type.name[6] = "FAIL_QUEST";
  app.saiLabels.action_type.name[7] = "ADD_QUEST";
  app.saiLabels.action_type.name[8] = "SET_REACT_STATE";
  app.saiLabels.action_type.name[9] = "ACTIVATE_GOBJECT";
  app.saiLabels.action_type.name[10] = "RANDOM_EMOTE";
  app.saiLabels.action_type.name[11] = "CAST";
  app.saiLabels.action_type.name[12] = "SUMMON_CREATURE";
  app.saiLabels.action_type.name[13] = "THREAT_SINGLE_%";
  app.saiLabels.action_type.name[14] = "THREAT_ALL_%";
  app.saiLabels.action_type.name[15] = "CALL AREA EXPLORED OR EVENT HAPPENS";
  app.saiLabels.action_type.name[16] = "UNUSED_16";
  app.saiLabels.action_type.name[17] = "SET EMOTE STATE";
  app.saiLabels.action_type.name[18] = "SET UNIT FLAG";
  app.saiLabels.action_type.name[19] = "REMOVE UNIT FLAG";
  app.saiLabels.action_type.name[20] = "AUTO_ATTACK";
  app.saiLabels.action_type.name[21] = "ALLOW_COMBAT_MOVEMENT";
  app.saiLabels.action_type.name[22] = "SET_EVENT_PHASE";
  app.saiLabels.action_type.name[23] = "INC_EVENT_PHASE";
  app.saiLabels.action_type.name[24] = "EVADE";
  app.saiLabels.action_type.name[25] = "FLEE_FOR_ASSIST";
  app.saiLabels.action_type.name[26] = "CALL_GROUP EVENT HAPPENS";
  app.saiLabels.action_type.name[27] = "CALL_CASTED CREATURE OR GO";
  app.saiLabels.action_type.name[28] = "REMOVEAURASFROMSPELL";
  app.saiLabels.action_type.name[29] = "FOLLOW";
  app.saiLabels.action_type.name[30] = "RANDOM_PHASE";
  app.saiLabels.action_type.name[31] = "RANDOM_PHASE_RANGE";
  app.saiLabels.action_type.name[32] = "RESET_GOBJECT";
  app.saiLabels.action_type.name[33] = "CALL_KILLEDMONSTER";
  app.saiLabels.action_type.name[34] = "SET_INST_DATA";
  app.saiLabels.action_type.name[35] = "SET_INST_DATA64";
  app.saiLabels.action_type.name[36] = "UPDATE_TEMPLATE";
  app.saiLabels.action_type.name[37] = "DIE";
  app.saiLabels.action_type.name[38] = "SET_IN_COMBAT_WITH_ZONE";
  app.saiLabels.action_type.name[39] = "CALL_FOR_HELP";
  app.saiLabels.action_type.name[40] = "SET_SHEATH";
  app.saiLabels.action_type.name[41] = "FORCE_DESPAWN";
  app.saiLabels.action_type.name[42] = "SET_INVINCIBILITY_HP_LEVEL";
  app.saiLabels.action_type.name[43] = "MOUNT_TO_ENTRY_OR_MODEL";
  app.saiLabels.action_type.name[44] = "SET_INGAME_PHASE_MASK";
  app.saiLabels.action_type.name[45] = "SET_DATA";
  app.saiLabels.action_type.name[46] = "MOVE_FORWARD";
  app.saiLabels.action_type.name[47] = "SET_VISIBILITY";
  app.saiLabels.action_type.name[48] = "SET_ACTIVE";
  app.saiLabels.action_type.name[49] = "ATTACK_START";
  app.saiLabels.action_type.name[50] = "SUMMON_GO";
  app.saiLabels.action_type.name[51] = "KILL_UNIT";
  app.saiLabels.action_type.name[52] = "ACTIVATE_TAXI";
  app.saiLabels.action_type.name[53] = "WP_START";
  app.saiLabels.action_type.name[54] = "WP_PAUSE";
  app.saiLabels.action_type.name[55] = "WP_STOP";
  app.saiLabels.action_type.name[56] = "ADD_ITEM";
  app.saiLabels.action_type.name[57] = "REMOVE_ITEM";
  app.saiLabels.action_type.name[58] = "INSTALL_AI_TEMPLATE";
  app.saiLabels.action_type.name[59] = "SET_RUN";
  app.saiLabels.action_type.name[60] = "SMART_ACTION_SET_DISABLE_GRAVITY";
  app.saiLabels.action_type.name[61] = "SET_SWIM";
  app.saiLabels.action_type.name[62] = "TELEPORT";
  app.saiLabels.action_type.name[63] = "STORE VARIABLE DECIMAL";
  app.saiLabels.action_type.name[64] = "STORE_TARGET_LIST";
  app.saiLabels.action_type.name[65] = "WP_RESUME";
  app.saiLabels.action_type.name[66] = "SET_ORIENTATION";
  app.saiLabels.action_type.name[67] = "CREATE_TIMED_EVENT";
  app.saiLabels.action_type.name[68] = "PLAYMOVIE";
  app.saiLabels.action_type.name[69] = "MOVE_TO_POS";
  app.saiLabels.action_type.name[70] = "RESPAWN_TARGET";
  app.saiLabels.action_type.name[71] = "EQUIP";
  app.saiLabels.action_type.name[72] = "CLOSE_GOSSIP";
  app.saiLabels.action_type.name[73] = "TRIGGER_TIMED_EVENT";
  app.saiLabels.action_type.name[74] = "REMOVE_TIMED_EVENT";
  app.saiLabels.action_type.name[75] = "ADD_AURA";
  app.saiLabels.action_type.name[76] = "OVERRIDE_SCRIPT_BASE_OBJECT";
  app.saiLabels.action_type.name[77] = "RESET_SCRIPT_BASE_OBJECT";
  app.saiLabels.action_type.name[78] = "CALL_SCRIPT_RESET";
  app.saiLabels.action_type.name[79] = "SET_RANGED_MOVEMENT";
  app.saiLabels.action_type.name[80] = "CALL_TIMED_ACTIONLIST";
  app.saiLabels.action_type.name[81] = "SET_NPC_FLAG";
  app.saiLabels.action_type.name[82] = "ADD_NPC_FLAG";
  app.saiLabels.action_type.name[83] = "REMOVE_NPC_FLAG";
  app.saiLabels.action_type.name[84] = "SIMPLE_TALK";
  app.saiLabels.action_type.name[85] = "INVOKER_CAST";
  app.saiLabels.action_type.name[86] = "CROSS_CAST";
  app.saiLabels.action_type.name[87] = "CALL_RANDOM_TIMED_ACTIONLIST";
  app.saiLabels.action_type.name[88] = "CALL_RANDOM_RANGE_TIMED_ACTIONLIST";
  app.saiLabels.action_type.name[89] = "RANDOM_MOVE";
  app.saiLabels.action_type.name[90] = "SET_UNIT_FIELD_BYTES_1";
  app.saiLabels.action_type.name[91] = "REMOVE_UNIT_FIELD_BYTES_1";
  app.saiLabels.action_type.name[92] = "INTERRUPT_SPELL";
  app.saiLabels.action_type.name[93] = "SEND_GO_CUSTOM_ANIM";
  app.saiLabels.action_type.name[94] = "SET_DYNAMIC_FLAG";
  app.saiLabels.action_type.name[95] = "ADD_DYNAMIC_FLAG";
  app.saiLabels.action_type.name[96] = "REMOVE_DYNAMIC_FLAG";
  app.saiLabels.action_type.name[97] = "JUMP_TO_POS";
  app.saiLabels.action_type.name[98] = "SEND_GOSSIP_MENU";
  app.saiLabels.action_type.name[99] = "GO_SET_LOOT_STATE";
  app.saiLabels.action_type.name[100] = "SEND_TARGET_TO_TARGET";
  app.saiLabels.action_type.name[101] = "SET_HOME_POS";
  app.saiLabels.action_type.name[102] = "SET_HEALTH_REGEN";
  app.saiLabels.action_type.name[103] = "SET_ROOT";
  app.saiLabels.action_type.name[104] = "SET_GO_FLAG";
  app.saiLabels.action_type.name[105] = "ADD_GO_FLAG";
  app.saiLabels.action_type.name[106] = "REMOVE_GO_FLAG";
  app.saiLabels.action_type.name[107] = "SUMMON_CREATURE_GROUP";
  app.saiLabels.action_type.name[108] = "SET_POWER";
  app.saiLabels.action_type.name[109] = "ADD_POWER";
  app.saiLabels.action_type.name[110] = "REMOVE_POWER";
  app.saiLabels.action_type.name[111] = "SMART_ACTION_GAME_EVENT_STOP";
  app.saiLabels.action_type.name[112] = "SMART_ACTION_GAME_EVENT_START";
  app.saiLabels.action_type.name[113] = "Notused";
  app.saiLabels.action_type.name[114] = "Notused";
  app.saiLabels.action_type.name[115] = "SMART_ACTION_RANDOM_SOUND";
  app.saiLabels.action_type.name[116] = "SMART_ACTION_SET_CORPSE_DELAY";
  app.saiLabels.action_type.name[117] = "SMART_ACTION_DISABLE_EVADE";
  app.saiLabels.action_type.name[118] = "SMART_ACTION_GO_SET_GO_STATE";
  app.saiLabels.action_type.name[119] = "SMART_ACTION_ADD_QUEST_OBJECTIVE";
  app.saiLabels.action_type.name[120] = "Unused";
  app.saiLabels.action_type.name[121] = "Unused";
  app.saiLabels.action_type.name[122] = "Unused";
  app.saiLabels.action_type.name[123] = "Unused";
  app.saiLabels.action_type.name[124] = "Unused";
  app.saiLabels.action_type.name[125] = "Unused";
  app.saiLabels.action_type.name[126] = "Unused";
  app.saiLabels.action_type.name[127] = "Unused";
  app.saiLabels.action_type.name[128] = "SMART_ACTION_PLAY_ANIMKIT";
  app.saiLabels.action_type.name[129] = "SMART_ACTION_SCENE_PLAY";
  app.saiLabels.action_type.name[130] = "SMART_ACTION_SCENE_CANCEL";

  /* EVENT NAMES */
  app.saiLabels.event_type.name[0] = "UPDATE_IC(Or TimedEvent)";
  app.saiLabels.event_type.name[1] = "UPDATE_OUT_OF_COMBAT";
  app.saiLabels.event_type.name[2] = "HEALT_%";
  app.saiLabels.event_type.name[3] = "MANA_%";
  app.saiLabels.event_type.name[4] = "AGGRO";
  app.saiLabels.event_type.name[5] = "KILL";
  app.saiLabels.event_type.name[6] = "DEATH";
  app.saiLabels.event_type.name[7] = "EVADE";
  app.saiLabels.event_type.name[8] = "SPELLHIT";
  app.saiLabels.event_type.name[9] = "RANGE";
  app.saiLabels.event_type.name[10] = "OOC_LOS";
  app.saiLabels.event_type.name[11] = "RESPAWN";
  app.saiLabels.event_type.name[12] = "TARGET_HEALTH_%";
  app.saiLabels.event_type.name[13] = "TARGET_CASTING(Victim)";
  app.saiLabels.event_type.name[14] = "FRIENDLY_HEALTH";
  app.saiLabels.event_type.name[15] = "FRIENDLY_IS_CC";
  app.saiLabels.event_type.name[16] = "FRIENDLY_MISSING_BUFF";
  app.saiLabels.event_type.name[17] = "SUMMONED_UNIT";
  app.saiLabels.event_type.name[18] = "TARGET_MANA_%";
  app.saiLabels.event_type.name[19] = "ACCEPTED_QUEST";
  app.saiLabels.event_type.name[20] = "REWARD_QUEST";
  app.saiLabels.event_type.name[21] = "REACHED_HOME";
  app.saiLabels.event_type.name[22] = "RECEIVE_EMOTE";
  app.saiLabels.event_type.name[23] = "HAS_AURA";
  app.saiLabels.event_type.name[24] = "TARGET_BUFFED";
  app.saiLabels.event_type.name[25] = "RESET";
  app.saiLabels.event_type.name[26] = "IC_LOS";
  app.saiLabels.event_type.name[27] = "PASSENGER_BOARDED";
  app.saiLabels.event_type.name[28] = "PASSENGER_REMOVED";
  app.saiLabels.event_type.name[29] = "CHARMED";
  app.saiLabels.event_type.name[30] = "CHARMED_TARGET";
  app.saiLabels.event_type.name[31] = "SPELLHIT_TARGET";
  app.saiLabels.event_type.name[32] = "DAMAGED";
  app.saiLabels.event_type.name[33] = "DAMAGED_TARGET";
  app.saiLabels.event_type.name[34] = "MOVEMENT INFORM";
  app.saiLabels.event_type.name[35] = "SUMMON_DESPAWNED";
  app.saiLabels.event_type.name[36] = "CORPSE_REMOVED";
  app.saiLabels.event_type.name[37] = "AI_INIT";
  app.saiLabels.event_type.name[38] = "DATA_SET";
  app.saiLabels.event_type.name[39] = "WAYPOINT_START";
  app.saiLabels.event_type.name[40] = "WAYPOINT_REACHED";
  app.saiLabels.event_type.name[41] = "TRANSPORT_ADDPLAYER";
  app.saiLabels.event_type.name[42] = "TRANSPORT_ADDCREATURE";
  app.saiLabels.event_type.name[43] = "TRANSPORT_REMOVE_PLAYER";
  app.saiLabels.event_type.name[44] = "TRANSPORT_RELOCATE";
  app.saiLabels.event_type.name[45] = "INSTANCE_PLAYER_ENTER";
  app.saiLabels.event_type.name[46] = "AREATRIGGER_ONTRIGGER";
  app.saiLabels.event_type.name[47] = "QUEST_ACCEPTED";
  app.saiLabels.event_type.name[48] = "QUEST_OBJ_COPLETETION";
  app.saiLabels.event_type.name[49] = "QUEST_COMPLETION";
  app.saiLabels.event_type.name[50] = "QUEST_REWARDED";
  app.saiLabels.event_type.name[51] = "QUEST_FAIL";
  app.saiLabels.event_type.name[52] = "TEXT_OVER";
  app.saiLabels.event_type.name[53] = "RECEIVE_HEAL";
  app.saiLabels.event_type.name[54] = "JUST_SUMMONED";
  app.saiLabels.event_type.name[55] = "WAYPOINT_PAUSED";
  app.saiLabels.event_type.name[56] = "WAYPOINT_RESUMED";
  app.saiLabels.event_type.name[57] = "WAYPOINT_STOPPED";
  app.saiLabels.event_type.name[58] = "WAYPOINT_ENDED";
  app.saiLabels.event_type.name[59] = "TIMED_EVENT_TRIGGERED";
  app.saiLabels.event_type.name[60] = "UPDATE";
  app.saiLabels.event_type.name[61] = "LINK";
  app.saiLabels.event_type.name[62] = "GOSSIP_SELECT";
  app.saiLabels.event_type.name[63] = "JUST_CREATED";
  app.saiLabels.event_type.name[64] = "GOSSIP_HELLO";
  app.saiLabels.event_type.name[65] = "FOLLOW_COMPLETED";
  app.saiLabels.event_type.name[66] = "DUMMY_EFFECT";
  app.saiLabels.event_type.name[67] = "IS_BEHIND_TARGET";
  app.saiLabels.event_type.name[68] = "GAME_EVENT_START";
  app.saiLabels.event_type.name[69] = "GAME_EVENT_END";
  app.saiLabels.event_type.name[70] = "GO_STATE_CHANGED";
  app.saiLabels.event_type.name[71] = "GO_EVENT_INFORM";
  app.saiLabels.event_type.name[72] = "ACTION_DONE";
  app.saiLabels.event_type.name[73] = "ON_SPELLCLICK";
  app.saiLabels.event_type.name[74] = "FRIENDLY_HEALTH_PCT";
  app.saiLabels.event_type.name[75] = "DISTANCE_CREATURE";
  app.saiLabels.event_type.name[76] = "DISTANCE_GAMEOBJECT";
  app.saiLabels.event_type.name[77] = "COUNTER_SET";
  app.saiLabels.event_type.name[78] = "SMART_EVENT_SCENE_START";
  app.saiLabels.event_type.name[79] = "SMART_EVENT_SCENE_TRIGGER";
  app.saiLabels.event_type.name[80] = "SMART_EVENT_SCENE_CANCEL";
  app.saiLabels.event_type.name[81] = "SMART_EVENT_SCENE_COMPLETE";

  /* TARGET NAMES */
  app.saiLabels.target_type.name[0] = "NONE";
  app.saiLabels.target_type.name[1] = "SELF";
  app.saiLabels.target_type.name[2] = "VICTIM";
  app.saiLabels.target_type.name[3] = "HOSTILE_SECOND_AGGRO";
  app.saiLabels.target_type.name[4] = "HOSTILE_LAST_AGGRO";
  app.saiLabels.target_type.name[5] = "HOSTILE_RANDOM";
  app.saiLabels.target_type.name[6] = "HOSTILE_RANDOM_NOT_TOP";
  app.saiLabels.target_type.name[7] = "ACTION_INVOKER";
  app.saiLabels.target_type.name[8] = "POSITION";
  app.saiLabels.target_type.name[9] = "CREATURE_RANGE";
  app.saiLabels.target_type.name[10] = "CREATURE_GUID";
  app.saiLabels.target_type.name[11] = "CREATURE_DISTANCE";
  app.saiLabels.target_type.name[12] = "STORED";
  app.saiLabels.target_type.name[13] = "GAMEOBJECT_RANGE";
  app.saiLabels.target_type.name[14] = "GAMEOBJECT_GUID";
  app.saiLabels.target_type.name[15] = "GAMEOBJECT_DISTANCE";
  app.saiLabels.target_type.name[16] = "INVOKER_PARTY";
  app.saiLabels.target_type.name[17] = "PLAYER_RANGE";
  app.saiLabels.target_type.name[18] = "PLAYER_DISTANCE";
  app.saiLabels.target_type.name[19] = "CLOSEST_CREATURE";
  app.saiLabels.target_type.name[20] = "CLOSEST_GAMEOBJECT";
  app.saiLabels.target_type.name[21] = "CLOSEST_PLAYER";
  app.saiLabels.target_type.name[22] = "ACTION_INVOKER_VEHICLE";
  app.saiLabels.target_type.name[23] = "OWNER_OR_SUMMONER";
  app.saiLabels.target_type.name[24] = "THREAT_LIST";
  app.saiLabels.target_type.name[25] = "CLOSEST_ENEMY";
  app.saiLabels.target_type.name[26] = "CLOSEST_FRIENDLY";
  app.saiLabels.target_type.name[27] = "LOOT_RECIPIENTS";
  app.saiLabels.target_type.name[28] = "SMART_TARGET_FARTHEST";
  app.saiLabels.target_type.name[29] = "SMART_TARGET_VEHICLE_ACCESSORY";

  /* ACTION TOOLTIPS */
  app.saiLabels.action_type.tooltip[0] =
    "No action type is specified. Do not use because it will cause errors on start-up.";
  app.saiLabels.action_type.tooltip[1] = "Creature says a creature_text line";
  app.saiLabels.action_type.tooltip[2] = "Set faction of target";
  app.saiLabels.action_type.tooltip[3] =
    "Morph the creature to an entry or modelid. If both parameters are 0, this will demorph the creature";
  app.saiLabels.action_type.tooltip[4] = "Play a sound id";
  app.saiLabels.action_type.tooltip[5] = "Play en emote";
  app.saiLabels.action_type.tooltip[6] =
    "Set a certain quest of our (player) target to 'fail', making them have to re-take it";
  app.saiLabels.action_type.tooltip[7] =
    "Add a quest to our (player) target's quest list";
  app.saiLabels.action_type.tooltip[8] =
    "Set our reactstate (0 = passive, 1 = defensive, 2 = aggressive)";
  app.saiLabels.action_type.tooltip[9] =
    "Activate a gameobject (targets our target_type, so it must be a gameobject)";
  app.saiLabels.action_type.tooltip[10] =
    "Play a random emote. Out of a total of 6 parameters it will pick one and ignore all fields with the value '0'.";
  app.saiLabels.action_type.tooltip[11] = "Cast a spell to our target type";
  app.saiLabels.action_type.tooltip[12] =
    "Summons a creature of a certain entry for a given time (or permanent, depending on the summon type which is set in the second parameter).";
  app.saiLabels.action_type.tooltip[13] =
    "Add or remove a certain percentage of threat from our current threat. Only one of the parameters (so either 1 or 2) may be used at the same time";
  app.saiLabels.action_type.tooltip[14] =
    "Add or remove a certain percentage of threat from our current threat. Only one of the parameters (so either 1 or 2) may be used at the same time";
  app.saiLabels.action_type.tooltip[15] =
    "Complete a quest requirement (by entry) of our current (player) target.";
  app.saiLabels.action_type.tooltip[16] = "Unused action type";
  app.saiLabels.action_type.tooltip[17] = "Set emote state";
  app.saiLabels.action_type.tooltip[17] = "Set the emote state of the creature";
  app.saiLabels.action_type.tooltip[18] =
    "Set the unit flags of the target (using creature_template.unit_flags and creature_template.unit_flags2)";
  app.saiLabels.action_type.tooltip[19] =
    "Removes unit flags from the target (using creature_template.unit_flags and creature_template.unit_flags2)";
  app.saiLabels.action_type.tooltip[20] =
    "Start or stop attacking our target (start or stop is determined by first parameter).";
  app.saiLabels.action_type.tooltip[21] =
    "Allow or disallow moving while the creature is in combat";
  app.saiLabels.action_type.tooltip[22] =
    "Set the creature's event phasemask to a new value (warning: this is NOT the creature's actual phase!)";
  app.saiLabels.action_type.tooltip[23] =
    "Increment or decrement the creature's event phasemask (warning: this is NOT the creature's actual phase!)";
  app.saiLabels.action_type.tooltip[24] =
    "Makes the creature evade and therefore make it stop attacking and leave combat.";
  app.saiLabels.action_type.tooltip[25] =
    "Makes the creature flee for assistance of nearby friendly units";
  app.saiLabels.action_type.tooltip[26] =
    "Complete a quest requirement (by entry) of our current (player) target.";
  app.saiLabels.action_type.tooltip[27] =
    "Complete a quest requirement (by entry) of our current (player) target. Completes a killed monster credit as well as gives credit for a spellcast.";
  app.saiLabels.action_type.tooltip[28] =
    "Remove an aura/spell from our target";
  app.saiLabels.action_type.tooltip[29] =
    "Makes the creature follow the target at a certain distance and with a certain angle.";
  app.saiLabels.action_type.tooltip[30] =
    "Set the creature's event phase (warning: this is NOT the creature's actual phase!)";
  app.saiLabels.action_type.tooltip[31] =
    "Set the creature's event phase randomly between two values (warning: this is NOT the creature's actual phase!)";
  app.saiLabels.action_type.tooltip[32] =
    "Reset a gameobject, usually used to open/close a door (calls GameObject::ResetDoorOrButton).";
  app.saiLabels.action_type.tooltip[33] =
    "Gives a kill credit to our (player) target. The entry is the same entry as quest_template.RequiredNpcOrGo(1/2/3/4).";
  app.saiLabels.action_type.tooltip[34] =
    "Sets a certain instance data field to a specific value. This will be recieved and can be handled inside the InstanceScript of the instance we are sending this to (InstanceScripts are always written in C++).";
  app.saiLabels.action_type.tooltip[35] =
    "Sets a certain instance data field to a specific value. This will be recieved and can be handled inside the InstanceScript of the instance we are sending this to (InstanceScripts are always written in C++).";
  app.saiLabels.action_type.tooltip[36] =
    "Updates the creature's entry to a new one, making it become a completely different unit.";
  app.saiLabels.action_type.tooltip[37] = "Instantly kills the target";
  app.saiLabels.action_type.tooltip[38] =
    "Sets the creature in combat with its zone. Useful for bosses inside instances so all players will be set in combat until the fight ends.";
  app.saiLabels.action_type.tooltip[39] =
    "Makes the creature cry/call for help which makes nearby creatures that are not yet in combat and are able to assist this creature, run to this creature and attack its attackers.";
  app.saiLabels.action_type.tooltip[40] =
    "Set the sheathe state of the creature. The sheath state determines which weapon will be displayed on the model.";
  app.saiLabels.action_type.tooltip[41] =
    "Despawns the creature/gameobject within a given time (in milliseconds).";
  app.saiLabels.action_type.tooltip[42] =
    "Sets the creature's invincibility health to a flat value or percentage. Either one of the parameters must be set (so not both), and you can not reverse this effect (both parameters at 0 will result in an error).";
  app.saiLabels.action_type.tooltip[43] =
    "Sets the mount model to the model given in the second parameter (or takes the model of the entry given in the first parameter). Only one parameter may be used at the same time.";
  app.saiLabels.action_type.tooltip[44] =
    "Sets the ACTUAL phasemask of the creature. This is not the event phasemask, but the actual phasemask. Sets the phasemask column in the creature table in the world database.";
  app.saiLabels.action_type.tooltip[45] =
    "Calls SMART_EVENT_DATA_SET with given field and data, making it possible to communicate between different entries.";
  app.saiLabels.action_type.tooltip[46] =
    "Move a set amount of yards forward from the current position";
  app.saiLabels.action_type.tooltip[47] =
    "Sets the visibility of the creature or gameobject";
  app.saiLabels.action_type.tooltip[48] =
    "Sets whether or not the creature or gameobject is counted as 'active'. When it's set to be 'active', it means the grid this entitiy is spawned in is no longer able to become inactive.";
  app.saiLabels.action_type.tooltip[49] =
    "Makes the creature start attacking the first unit it finds on the target list.";
  app.saiLabels.action_type.tooltip[50] = "Summon a gameobject entry";
  app.saiLabels.action_type.tooltip[51] = "Kills the unit target instantly";
  app.saiLabels.action_type.tooltip[52] =
    "Activates a taxipath of the given id for our (player) target.";
  app.saiLabels.action_type.tooltip[53] =
    "Starts a waypoint using the `waypoints` table in the world database.";
  app.saiLabels.action_type.tooltip[54] =
    "Pauses the waypoint path the creature is currently following for a specific time (milliseconds).";
  app.saiLabels.action_type.tooltip[55] =
    "Stops the waypoint path the creature is currently following. Also allows you to specify a despawn time from that point on as well as which quest id should be counted as 'fail' (or not, based on the third parameter).";
  app.saiLabels.action_type.tooltip[56] =
    "Adds a certain item entry a specific amount of times to our player target.";
  app.saiLabels.action_type.tooltip[57] =
    "Removes a certain item entry a specific amount of times to our player target.";
  app.saiLabels.action_type.tooltip[58] =
    "Installs a SmartAI template which are basically pre-defined scripts for scripts that are used in a lot of cases. Thing of casters with specific spells, passive, turrets, etc.";
  app.saiLabels.action_type.tooltip[59] = "Sets running flag on or off.";
  app.saiLabels.action_type.tooltip[60] = "Sets disable gravity no fall down.";
  app.saiLabels.action_type.tooltip[61] = "Sets swimming flag on or off.";
  app.saiLabels.action_type.tooltip[62] =
    "Teleport target to a specific map using coordinates in the target X/Y/Z/O fields. Note: May NOT use SMART_TARGET_POSITION (8)!";
  app.saiLabels.action_type.tooltip[63] =
    "Stores a decimal variable (number) under a variable id to store information for the creature during runtime.";
  app.saiLabels.action_type.tooltip[64] =
    "Stores a list of targets under a variable id so it can later be read again.";
  app.saiLabels.action_type.tooltip[65] =
    "Resume the waypoint path the creature was previously following.";
  app.saiLabels.action_type.tooltip[66] =
    "Sets the orientation of the creature to a given value. Must use SMART_TARGET_POSITION. If you, however, want the creature to face its spawn/home position, you can just use SMART_TARGET_SELF and leave all parameters at 0.";
  app.saiLabels.action_type.tooltip[67] =
    "Calls SMART_EVENT_UPDATE after a specific time with given parameters.";
  app.saiLabels.action_type.tooltip[68] = "Plays a movie of a given entry.";
  app.saiLabels.action_type.tooltip[69] =
    "Move to a given position using the target co-ordinate fields (target_x/target_y/target_z/target_o) with SMART_TARGET_POSITION. First parameter is an id which can be read using SMART_EVENT_MOVEMENTINFORM. Explanation in tooltip.";
  app.saiLabels.action_type.tooltip[70] =
    "Respawns the target. Only works for gameobject target. Action does not actually respawn the target, it just sets the respawn time of the target, but this is how gameobject respawning is handled.";
  app.saiLabels.action_type.tooltip[71] =
    "Set the creature's equipment template to a certain entry. If no entry (first parameter) is set, it will set the three item entries which are ordered by slot (param3 is main-hand, param4 is off-hand, param5 is gun/bow/etc). The slotmask (param2) value is 0 by default and goes by bits, so if it's '2' it will only show the off-hand weapon (bits are 1, 2 and 4). Having 0 defaults to 7, so all slots.";
  app.saiLabels.action_type.tooltip[72] =
    "Closes the currently opened gossip to our player target.";
  app.saiLabels.action_type.tooltip[73] =
    "Calls SMART_EVENT_TIMED_EVENT_TRIGGERED with a given id.";
  app.saiLabels.action_type.tooltip[74] =
    "Interrupts the timed event called from SMART_ACTION_TRIGGER_TIMED_EVENT. 0 is NOT a proper value!";
  app.saiLabels.action_type.tooltip[75] = "Adds an aura to our target.";
  app.saiLabels.action_type.tooltip[76] =
    "Overrides the current creature's/gameobject's script to a new source using the targettype. If more than one target is specified, the first on the list will be used.";
  app.saiLabels.action_type.tooltip[77] =
    "Resets the script of the source to its original state. Only useful after SMART_ACTION_OVERRIDE_SCRIPT_BASE_OBJECT was called (because we store the original guid when doing this).";
  app.saiLabels.action_type.tooltip[78] =
    "Calls SMART_EVENT_RESET (only calls this, doesn't actually reset the creature/gameobject).";
  app.saiLabels.action_type.tooltip[79] =
    "Sets the creature's attack distance and angle to chase its target with. The distance (first parameter) is the minimum distance it will keep away from its target during combat.";
  app.saiLabels.action_type.tooltip[80] =
    "Calls a script for the source with a given entry.";
  app.saiLabels.action_type.tooltip[81] =
    "Set the npc flags of the target (using creature_template.npcflag)";
  app.saiLabels.action_type.tooltip[82] =
    "Adds npc flags of the target (using creature_template.npcflag)";
  app.saiLabels.action_type.tooltip[83] =
    "Removes npc flags of the target (using creature_template.npcflag)";
  app.saiLabels.action_type.tooltip[84] =
    "Functions the same as SMART_ACTION_TALK, except that it makes the player target say it. Does NOT trigger SMART_EVENT_TEXT_OVER.";
  app.saiLabels.action_type.tooltip[85] =
    "Make our action invoker type cast a spell to our target type";
  app.saiLabels.action_type.tooltip[86] =
    "Make the specified target type (in parameters) cast a spell to our target type";
  app.saiLabels.action_type.tooltip[87] =
    "Calls a random script for the source with given entries";
  app.saiLabels.action_type.tooltip[88] =
    "Calls a random script between two values for the source with given entries. So if parameter 1 is 500 and parameter 2 is 550, a script will randomly be picked between 500 and 550.";
  app.saiLabels.action_type.tooltip[89] =
    "Move randomly around within a given distance";
  app.saiLabels.action_type.tooltip[90] =
    "Set the unit field bytes 1 flags of the target to a specific value";
  app.saiLabels.action_type.tooltip[91] =
    "Removes specific unit field bytes 1 flags of the target";
  app.saiLabels.action_type.tooltip[92] =
    "Interrupt a given spell id (or any, if the second parameter is 0).";
  app.saiLabels.action_type.tooltip[93] =
    "Sends a custom gameobject animation from the target";
  app.saiLabels.action_type.tooltip[94] =
    "Sets the dynamic flags of the target to a specific value";
  app.saiLabels.action_type.tooltip[95] =
    "Adds dynamic flags to the current value of the target";
  app.saiLabels.action_type.tooltip[96] =
    "Removes specific dynamic flags of the target's current dynamic flags";
  app.saiLabels.action_type.tooltip[97] =
    "Jump to a given position with a given speed. Must use SMART_TARGET_POSITION with this action_type.";
  app.saiLabels.action_type.tooltip[98] =
    "Sends a specific gossip menu to a player which will then be opened for this player";
  app.saiLabels.action_type.tooltip[99] =
    "Sets the gameobject's loot state to a given value";
  app.saiLabels.action_type.tooltip[100] =
    "Sends a stored target id to our given target type. The id comes from SMART_ACTION_STORE_TARGET and can be used with SMART_TARGET_STORED";
  app.saiLabels.action_type.tooltip[101] =
    "Sets the home position of the source to a new position. The home position is the position the creature runs to when evading/reseting/etc. Uses the target type to determine the new home position.";
  app.saiLabels.action_type.tooltip[102] =
    "Turns the health regeneration of the creature on or off";
  app.saiLabels.action_type.tooltip[103] =
    "Roots or unroots the creature (or player target)";
  app.saiLabels.action_type.tooltip[104] =
    "Sets the gameobject's flags to a specific value";
  app.saiLabels.action_type.tooltip[105] =
    "Adds specific flags to the gameobject's flags field";
  app.saiLabels.action_type.tooltip[106] =
    "Removes specific flags from the gameobject's flags field";
  app.saiLabels.action_type.tooltip[107] =
    "Summon a set of creatures in once using the creature_summon_groups table in the world database.";
  app.saiLabels.action_type.tooltip[108] =
    "Sets the value of a given power type to a specific value";
  app.saiLabels.action_type.tooltip[109] =
    "Adds a given value to a given power type";
  app.saiLabels.action_type.tooltip[110] =
    "Removes a given value from a given power type";
  app.saiLabels.action_type.tooltip[112] =
    "Stops a game event with specified id (game_event.id)";
  app.saiLabels.action_type.tooltip[113] =
    "Starts moving by the closest waypoint it can find. Parameters allow to give up to 6 waypoint id's and it will start the closest.";
  app.saiLabels.action_type.tooltip[117] =
    "Same like set antigravity with Flíing effect.";
  app.saiLabels.action_type.tooltip[118] =
    "You can stop movement for any target!.";
  app.saiLabels.action_type.tooltip[119] =
    "Add any Quest Objective count/complete...";
  app.saiLabels.action_type.tooltip[128] =
    "Type (0 = oneShot, 1 = aiAnim, 2 = meleeAnim, 3 = movementAnim)";

  /* EVENT TOOLTIPS */
  app.saiLabels.event_type.tooltip[0] =
    "While in combat. Parameters represent a timer: 1000,2000,4000,4000 will call this event_type randomly between 1 and 2 seconds and repeat this every 4 seconds";
  app.saiLabels.event_type.tooltip[1] =
    "While out of combat. Parameters represent a timer: 1000,2000,4000,4000 will call this event_type randomly between 1 and 2 seconds and repeat this every 4 seconds";
  app.saiLabels.event_type.tooltip[2] =
    "At health percentage. First and second parameters function as min-max health percentage values, so if they are  50,80, the event will be called when the source is between 50% and 80% health. The last two parameters are repeat timers in milliseconds.";
  app.saiLabels.event_type.tooltip[3] =
    "At mana percentage. First and second parameters function as min-max mana percentage values, so if they are  50,80, the event will be called when the source is between 50% and 80% mana. The last two parameters are repeat timers in milliseconds.";
  app.saiLabels.event_type.tooltip[4] = "When the creature enters combat";
  app.saiLabels.event_type.tooltip[5] = "When the creature killed something";
  app.saiLabels.event_type.tooltip[6] = "When the creature just died";
  app.saiLabels.event_type.tooltip[7] =
    "When the creature evades out of combat";
  app.saiLabels.event_type.tooltip[8] = "On creature struck by a spell id";
  app.saiLabels.event_type.tooltip[9] =
    "When the creature is within a certain range of our target type";
  app.saiLabels.event_type.tooltip[10] =
    "When the creature detects movement of an unit that is within line of sight while the creature is out of combat. This should be used when attempting to trigger an action when a player or so moves within a distance of some place/trigger.";
  app.saiLabels.event_type.tooltip[11] =
    "When the creature or gameobject respawns or spawns";
  app.saiLabels.event_type.tooltip[12] =
    "When the target of the creature is at a certain health percentage";
  app.saiLabels.event_type.tooltip[13] =
    "When the target of the creature is casting a spell. Leaving the third parameter at 0 will mean any spell the target casts will trigger this event.";
  app.saiLabels.event_type.tooltip[14] =
    "When a friendly unit within a certain range reaches a certain amount of health (NOT PERCENTAGE!). If you are looking for percentage, use event type 74.";
  app.saiLabels.event_type.tooltip[15] =
    "When a friendly unit within a certain range is under the effect of a crowd control spell";
  app.saiLabels.event_type.tooltip[16] =
    "When a friendly unit within a certain range is missing or having an aura/spell on them. If the first parameter is the spellid in a negative format, it will mean the event is triggered when a friendly unit within a certain range HAS a buff.";
  app.saiLabels.event_type.tooltip[17] =
    "When we summoned a creature with a certain entry. First parameter is the creature entry and if it's left at 0 it means we trigger this for any creature.";
  app.saiLabels.event_type.tooltip[18] =
    "When the target of the creature is at a certain mana percentage";
  app.saiLabels.event_type.tooltip[19] =
    "When the creature succesfully offered a quest to a player";
  app.saiLabels.event_type.tooltip[20] =
    "When the creature succesfully rewarded a quest of a player";
  app.saiLabels.event_type.tooltip[21] =
    "When the creature reached its home position";
  app.saiLabels.event_type.tooltip[22] = "When the creature receives an emote";
  app.saiLabels.event_type.tooltip[23] =
    "When the creature is missing or having an aura/spell on them. If the first parameter is the spellid in a negative format, it will mean the event is triggered when a friendly unit within a certain range is MISSING a buff.";
  app.saiLabels.event_type.tooltip[24] =
    "When the creature's target is missing or having an aura/spell on them. If the first parameter is the spellid in a negative format, it will mean the event is triggered when a friendly unit within a certain range is MISSING a buff.";
  app.saiLabels.event_type.tooltip[25] =
    "When the creature resets (evades, respawns, spawns or resets out of combat)";
  app.saiLabels.event_type.tooltip[26] =
    "When the creature detects movement of an unit that is within line of sight while the creature is in combat. This should be used when attempting to trigger an action when a player or so moves within a distance of some place/trigger.";
  app.saiLabels.event_type.tooltip[27] = "SMART_EVENT_PASSENGER_BOARDED";
  app.saiLabels.event_type.tooltip[28] = "SMART_EVENT_PASSENGER_REMOVED";
  app.saiLabels.event_type.tooltip[29] = "On creature charmed";
  app.saiLabels.event_type.tooltip[30] = "On target charmed";
  app.saiLabels.event_type.tooltip[31] = "On target spellhit by a spell";
  app.saiLabels.event_type.tooltip[32] =
    "On creature damaged for a certain amount";
  app.saiLabels.event_type.tooltip[33] =
    "On target damaged for a certain amount";
  app.saiLabels.event_type.tooltip[34] =
    "On movement inform. Useful when for example you want your creature to do something after it moving to a certain spot by using SMART_ACTION_MOVE_TO.";
  app.saiLabels.event_type.tooltip[35] = "On summoned unit despawned";
  app.saiLabels.event_type.tooltip[36] = "On creature corpse removal";
  app.saiLabels.event_type.tooltip[37] =
    "On AI initialization, so when the creature spawns (not when it respawns, resets or evades!)";
  app.saiLabels.event_type.tooltip[38] =
    "On data set, called after SMART_ACTION_SET_DATA is called to this source with a certain field and a certain value.";
  app.saiLabels.event_type.tooltip[39] = "On waypoint started";
  app.saiLabels.event_type.tooltip[40] = "On waypoint reached";
  app.saiLabels.event_type.tooltip[46] = "On areatrigger reached by a player";
  app.saiLabels.event_type.tooltip[52] =
    "When a creature says something it shows a balloon for a few seconds. This event is triggered after the balloon fades and thus the text 'finishes'.";
  app.saiLabels.event_type.tooltip[53] =
    "On creature received a certain heal amount";
  app.saiLabels.event_type.tooltip[54] =
    "Called when the creature or gameobject has just been summoned";
  app.saiLabels.event_type.tooltip[55] = "On waypoint paused";
  app.saiLabels.event_type.tooltip[56] = "On waypoint resumed";
  app.saiLabels.event_type.tooltip[57] = "On waypoint stopped";
  app.saiLabels.event_type.tooltip[58] = "On waypoint ended";
  app.saiLabels.event_type.tooltip[59] =
    "Called when a timed event called by SMART_ACTION_CREATE_TIMED_EVENT is triggered";
  app.saiLabels.event_type.tooltip[60] =
    "On update, should be used as a timer. Basically functions like both SMART_EVENT_UPDATE_IC and SMART_EVENT_UPDATE_OOC in one.";
  app.saiLabels.event_type.tooltip[61] = "On link";
  app.saiLabels.event_type.tooltip[62] =
    "Called on gossip option selected. Imagine you have four gossip items under the menu id 5 and their id's are 0, 1 and 2. If you now call this event with first parameter '5' and second parameter '1', it will be called when the second gossip option is selected. Tables gossip_menu_option and gossip_menu.";
  app.saiLabels.event_type.tooltip[63] =
    "On gameobject just created (so when it spawns for the first time)";
  app.saiLabels.event_type.tooltip[64] =
    "On gossip menu opened. Also called for gameobjects that just got 'opened' by a player.";
  app.saiLabels.event_type.tooltip[65] = "On follow completed/finished";
  app.saiLabels.event_type.tooltip[67] =
    "On behind target within a certain cooldown time";
  app.saiLabels.event_type.tooltip[68] = "On game event entry just started";
  app.saiLabels.event_type.tooltip[69] = "On game event entry just ended";
  app.saiLabels.event_type.tooltip[70] = "On gameobject state changed.";
  app.saiLabels.event_type.tooltip[71] =
    "Called when the gameobject becomes the target of an event happening. This is called in cases like a building is damaged/destroyed/rebuild, a goober is used, etc.";
  app.saiLabels.event_type.tooltip[72] =
    "Called on a certain action id 'done'. Those can only be called from core scripts (SmartAI::DoAction).";
  app.saiLabels.event_type.tooltip[73] =
    "On unit spellclick. For more information on what spellclicks are, take a look at the wiki and search for the table 'npc_spellclick_spells' (world database).";
  app.saiLabels.event_type.tooltip[74] =
    "When a friendly unit within a certain range reaches a certain health percentage (so NOT flat health!). If you are looking for a flat modifier, use event type 14.";
  app.saiLabels.event_type.tooltip[75] =
    "Event triggered when a creature with a specific guid or entry coems within a given distance (in yards) of the source.";
  app.saiLabels.event_type.tooltip[76] =
    "Event triggered when a gameobject with a specific guid or entry coems within a given distance (in yards) of the source.";

  /* TARGET TOOLTIPS */
  app.saiLabels.target_type.tooltip[0] =
    "No specified target. Only use this if you're sure the action type does not use targets at all (and event then it could not be safe. It's usually smart to default to SMART_TARGET_SELF (1)).";
  app.saiLabels.target_type.tooltip[1] =
    "Targets the creature/gameobject/areatrigger itself";
  app.saiLabels.target_type.tooltip[2] =
    "Targets the current victim of the creature";
  app.saiLabels.target_type.tooltip[3] =
    "The unit that is second highest on the current threatlist of the creature";
  app.saiLabels.target_type.tooltip[4] =
    "The unit that is last (so lowest threat) on the current threatlist of the creature";
  app.saiLabels.target_type.tooltip[5] =
    "A random unit on the current threatlist of the creature";
  app.saiLabels.target_type.tooltip[6] =
    "A random unit on the current threatlist of the creature. Ignores the last unit on the threatlist (so it can never target unit with lowest threat)";
  app.saiLabels.target_type.tooltip[7] =
    "The unit that caused this event type to occur. For example if used with SMART_EVENT_SPELLHIT, the initial caster of the spell will be targeted by this target type.";
  app.saiLabels.target_type.tooltip[8] =
    "Targets a given position. Only a handful of action types actually use this so make sure you're using one of these! This target type uses the target coordinate parameters and not the normal target parameter fields.";
  app.saiLabels.target_type.tooltip[9] =
    "Targets any creature of a given entry within a given range (if entry is left at 0 it will target all creatures within the given range)";
  app.saiLabels.target_type.tooltip[10] =
    "Targets a specific creature guid and entry";
  app.saiLabels.target_type.tooltip[11] =
    "Targets any creature of a given entry (or any creature, if first parameter is left at 0) within a given distance";
  app.saiLabels.target_type.tooltip[12] =
    "Takes a target stored by an id when using SMART_ACTION_STORE_TARGET_LIST";
  app.saiLabels.target_type.tooltip[13] =
    "Targets any gameobject of a given entry within a given range (if entry is left at 0 it will target all gameobjects within the given range)";
  app.saiLabels.target_type.tooltip[14] =
    "Targets a specific gameobject guid and entry";
  app.saiLabels.target_type.tooltip[15] =
    "Targets any gameobject of a given entry (or any gameobject, if first parameter is left at 0) within a given distance";
  app.saiLabels.target_type.tooltip[16] =
    "Targets all party members of the action invoker (SMART_TARGET_ACTION_INVOKER)";
  app.saiLabels.target_type.tooltip[17] =
    "Targets any player within a given minimum and maximum distance";
  app.saiLabels.target_type.tooltip[18] =
    "Targets any player within a given maximum distance";
  app.saiLabels.target_type.tooltip[19] =
    "Takes the closest creature within a given distance and entry (or the closest creature of any entry, if first parameter is left at 0).";
  app.saiLabels.target_type.tooltip[20] =
    "Takes the closest gameobject within a given distance and entry (or the closest gameobject of any entry, if first parameter is left at 0).";
  app.saiLabels.target_type.tooltip[21] =
    "Takes the closest player within a given distance";
  app.saiLabels.target_type.tooltip[22] =
    "Takes the vehicle of the action invoker (SMART_TARGET_ACTION_INVOKER)";
  app.saiLabels.target_type.tooltip[23] =
    "Takes the owner or the summoner of the creature/gameobject";
  app.saiLabels.target_type.tooltip[24] =
    "Targets the entire threatlist of the creature";
  app.saiLabels.target_type.tooltip[25] =
    "Takes the closest unfriendly unit (both creatures and players) within a given distance. If second parameter is set to 1, it will only target nearby friendly players";
  app.saiLabels.target_type.tooltip[26] =
    "Takes the closest friendly unit (both creatures and players) within a given distance. If second parameter is set to 1, it will only target nearby friendly players";
  app.saiLabels.target_type.tooltip[27] = "All tagging players";
  app.saiLabels.target_type.tooltip[28] = "Select most distanced player!";

  /*  ACTION PARAM MODAL FLAG PICKER*/

  /* ACTION PARAM1 NAMES */
  app.saiLabels.action_type.param1[1] = "GroupId";
  app.saiLabels.action_type.param1[2] = "FactionId";
  app.saiLabels.action_type.param1[3] = "Creature entry";
  app.saiLabels.action_type.param1[4] = "Sound id";
  app.saiLabels.action_type.param1[5] = "Emote id";
  app.saiLabels.action_type.param1[6] = "Quest id";
  app.saiLabels.action_type.param1[7] = "Quest id";
  app.saiLabels.action_type.param1[8] = "React state";
  app.saiLabels.action_type.param1[10] = "Emote id 1";
  app.saiLabels.action_type.param1[11] = "Spell ID";
  app.saiLabels.action_type.param1[12] = "Creature entry";
  app.saiLabels.action_type.param1[13] = "Threat increase in pct";
  app.saiLabels.action_type.param1[14] = "Threat increase in pct";
  app.saiLabels.action_type.param1[15] = "Quest id";
  app.saiLabels.action_type.param1[17] = "Emote id";
  app.saiLabels.action_type.param1[18] = "Unit flags";
  app.saiLabels.action_type.param1[19] = "Unit flags";
  app.saiLabels.action_type.param1[20] = "Start or stop (0 / 1)";
  app.saiLabels.action_type.param1[21] = "Allow or disallow (0 / 1)";
  app.saiLabels.action_type.param1[22] = "Phasemask";
  app.saiLabels.action_type.param1[23] = "Increment";
  app.saiLabels.action_type.param1[25] = "Say flee text (0 / 1)";
  app.saiLabels.action_type.param1[26] = "Quest id";
  app.saiLabels.action_type.param1[27] = "Creature id";
  app.saiLabels.action_type.param1[28] = "Spell id";
  app.saiLabels.action_type.param1[29] = "Distance";
  app.saiLabels.action_type.param1[30] = "Phasemask 1";
  app.saiLabels.action_type.param1[31] = "Phasemask 1";
  app.saiLabels.action_type.param1[33] = "Creature entry";
  app.saiLabels.action_type.param1[34] = "Field";
  app.saiLabels.action_type.param1[35] = "Field";
  app.saiLabels.action_type.param1[36] = "Creature entry";
  app.saiLabels.action_type.param1[39] = "Radius";
  app.saiLabels.action_type.param1[40] = "Sheath state";
  app.saiLabels.action_type.param1[41] = "Time to despawn (ms)";
  app.saiLabels.action_type.param1[42] = "Flat value";
  app.saiLabels.action_type.param1[43] = "Creature entry";
  app.saiLabels.action_type.param1[44] = "Phasemask";
  app.saiLabels.action_type.param1[45] = "Field";
  app.saiLabels.action_type.param1[46] = "Distance in yards";
  app.saiLabels.action_type.param1[47] = "Visible (0/1)";
  app.saiLabels.action_type.param1[48] = "Active (0/1)";
  app.saiLabels.action_type.param1[50] = "Gameobject entry";
  app.saiLabels.action_type.param1[52] = "Taxi id";
  app.saiLabels.action_type.param1[53] = "Walk/run (0/1)";
  app.saiLabels.action_type.param1[54] = "Time (ms)";
  app.saiLabels.action_type.param1[55] = "Despawn time (ms)";
  app.saiLabels.action_type.param1[56] = "Item entry";
  app.saiLabels.action_type.param1[57] = "Item entry";
  app.saiLabels.action_type.param1[58] = "Template entry";
  app.saiLabels.action_type.param1[59] = "Off/on (0/1)";
  app.saiLabels.action_type.param1[60] = "Off/on (0/1)";
  app.saiLabels.action_type.param1[61] = "Off/on (0/1)";
  app.saiLabels.action_type.param1[62] = "Map id";
  app.saiLabels.action_type.param1[63] = "Variable id";
  app.saiLabels.action_type.param1[64] = "Variable id";
  app.saiLabels.action_type.param1[67] = "Event id";
  app.saiLabels.action_type.param1[68] = "Movie entry";
  app.saiLabels.action_type.param1[69] = "Point id (0 any)";
  app.saiLabels.action_type.param1[70] = "Respawn time (seconds)";
  app.saiLabels.action_type.param1[71] = "Equip template entry";
  app.saiLabels.action_type.param1[73] = "Event id";
  app.saiLabels.action_type.param1[75] = "Spell id";
  app.saiLabels.action_type.param1[79] = "Attack distance";
  app.saiLabels.action_type.param1[80] = "Script entry";
  app.saiLabels.action_type.param1[81] = "Npc flags";
  app.saiLabels.action_type.param1[82] = "Npc flags";
  app.saiLabels.action_type.param1[83] = "Npc flags";
  app.saiLabels.action_type.param1[84] = "Groupid";
  app.saiLabels.action_type.param1[85] = "Spell ID";
  app.saiLabels.action_type.param1[86] = "Spell ID";
  app.saiLabels.action_type.param1[87] = "Script entry 1";
  app.saiLabels.action_type.param1[88] = "Script entry 1";
  app.saiLabels.action_type.param1[89] = "Maximum distance";
  app.saiLabels.action_type.param1[90] = "Unit field bytes 1";
  app.saiLabels.action_type.param1[91] = "Unit field bytes 1";
  app.saiLabels.action_type.param1[92] = "With delay (0/1)";
  app.saiLabels.action_type.param1[93] = "Animation (0-255)";
  app.saiLabels.action_type.param1[94] = "Dynamic flags";
  app.saiLabels.action_type.param1[95] = "Dynamic flags";
  app.saiLabels.action_type.param1[96] = "Dynamic flags";
  app.saiLabels.action_type.param1[97] = "Speed XY";
  app.saiLabels.action_type.param1[98] = "Gossip menu id";
  app.saiLabels.action_type.param1[99] = "Gameobject state";
  app.saiLabels.action_type.param1[100] = "Target id";
  app.saiLabels.action_type.param1[102] = "Off/on (0/1)";
  app.saiLabels.action_type.param1[103] = "Unroot/root (0/1)";
  app.saiLabels.action_type.param1[104] = "Gameobject flags";
  app.saiLabels.action_type.param1[105] = "Gameobject flags";
  app.saiLabels.action_type.param1[106] = "Gameobject flags";
  app.saiLabels.action_type.param1[107] = "Summon group id";
  app.saiLabels.action_type.param1[108] = "Power type";
  app.saiLabels.action_type.param1[109] = "Power type";
  app.saiLabels.action_type.param1[110] = "Power type";
  app.saiLabels.action_type.param1[111] = "Id of the event";
  app.saiLabels.action_type.param1[112] = "Id of the event";
  app.saiLabels.action_type.param1[113] = "Waypoint 1";
  app.saiLabels.action_type.param1[115] = "soundId1";
  app.saiLabels.action_type.param1[116] = "timer";
  app.saiLabels.action_type.param1[117] = "0/1 (1 = disabled, 0 = enabled)";
  app.saiLabels.action_type.param1[118] = "State";
  app.saiLabels.action_type.param1[119] = "QuestID";
  app.saiLabels.action_type.param1[128] = "id";
  app.saiLabels.action_type.param1[129] = "sceneId";
  app.saiLabels.action_type.param1[130] = "sceneId";

  /* ACTION PARAM2 NAMES */
  app.saiLabels.action_type.param2[1] = "Duration";
  app.saiLabels.action_type.param2[3] = "Creature model";
  app.saiLabels.action_type.param2[4] = "Only to self (0/1)";
  app.saiLabels.action_type.param2[10] = "Emote id 2";
  app.saiLabels.action_type.param2[11] = "Cast Flags";
  app.saiLabels.action_type.param2[12] = "Summon type";
  app.saiLabels.action_type.param2[13] = "Threat decrease in pct";
  app.saiLabels.action_type.param2[14] = "Threat decrease in pct";
  app.saiLabels.action_type.param2[18] = "Type (0 / 1)";
  app.saiLabels.action_type.param2[19] = "Type (0 / 1)";
  app.saiLabels.action_type.param2[23] = "Decrement";
  app.saiLabels.action_type.param2[27] = "Spell id";
  app.saiLabels.action_type.param2[28] = "Charges";
  app.saiLabels.action_type.param2[29] = "Angle";
  app.saiLabels.action_type.param2[30] = "Phasemask 2";
  app.saiLabels.action_type.param2[31] = "Phasemask 2";
  app.saiLabels.action_type.param2[34] = "Data";
  app.saiLabels.action_type.param2[35] = "Data";
  app.saiLabels.action_type.param2[36] = "Team";
  app.saiLabels.action_type.param2[39] = "Say text (0/1)";
  app.saiLabels.action_type.param2[42] = "Pct value";
  app.saiLabels.action_type.param2[43] = "Creature model";
  app.saiLabels.action_type.param2[45] = "Data";
  app.saiLabels.action_type.param2[50] = "Duration (ms)";
  app.saiLabels.action_type.param2[53] = "Waypoint entry";
  app.saiLabels.action_type.param2[55] = "Quest id";
  app.saiLabels.action_type.param2[56] = "Count";
  app.saiLabels.action_type.param2[57] = "Count";
  app.saiLabels.action_type.param2[63] = "Decimal";
  app.saiLabels.action_type.param2[67] = "InitialMin";
  app.saiLabels.action_type.param2[71] = "Slotmask";
  app.saiLabels.action_type.param2[79] = "Attack angle";
  app.saiLabels.action_type.param2[80] = "Timer type (0/1/2)";
  app.saiLabels.action_type.param2[85] = "Cast Flags";
  app.saiLabels.action_type.param2[86] = "Cast Flags";
  app.saiLabels.action_type.param2[87] = "Script entry 2";
  app.saiLabels.action_type.param2[88] = "Script entry 2";
  app.saiLabels.action_type.param2[90] = "Type (0/2/3)";
  app.saiLabels.action_type.param2[91] = "Type (0/2/3)";
  app.saiLabels.action_type.param2[92] = "Spell id (0 any)";
  app.saiLabels.action_type.param2[97] = "Speed Z";
  app.saiLabels.action_type.param2[98] = "Npc text id";
  app.saiLabels.action_type.param2[107] = "Attack invoker (0 / 1)";
  app.saiLabels.action_type.param2[108] = "Power value";
  app.saiLabels.action_type.param2[109] = "Power value";
  app.saiLabels.action_type.param2[110] = "Power value";
  app.saiLabels.action_type.param2[113] = "Waypoint 2";
  app.saiLabels.action_type.param2[115] = "soundId2";
  app.saiLabels.action_type.param2[118] = "Movementexpired (0/1)";
  app.saiLabels.action_type.param2[119] = "QuestObjective";
  app.saiLabels.action_type.param2[128] = "Type";

  /* ACTION PARAM3 NAMES */
  app.saiLabels.action_type.param3[10] = "Emote id 3";
  app.saiLabels.action_type.param3[12] = "Duration (milliseconds)";
  app.saiLabels.action_type.param3[29] = "End creature entry";
  app.saiLabels.action_type.param3[30] = "Phasemask 3";
  app.saiLabels.action_type.param3[53] = "Repeat path (0/1)";
  app.saiLabels.action_type.param3[55] = "Fail quest (0/1)";
  app.saiLabels.action_type.param3[67] = "InitialMax";
  app.saiLabels.action_type.param3[69] = "DisablePathfinding (0/1)";
  app.saiLabels.action_type.param3[71] = "Item entry 1";
  app.saiLabels.action_type.param3[86] = "Target type of caster";
  app.saiLabels.action_type.param3[87] = "Script entry 3";
  app.saiLabels.action_type.param3[92] = "Instant (0/1)";
  app.saiLabels.action_type.param3[113] = "Waypoint 3";
  app.saiLabels.action_type.param3[115] = "soundId3";
  app.saiLabels.action_type.param3[119] = "Count (0=All)";

  /* ACTION PARAM4 NAMES */
  app.saiLabels.action_type.param4[10] = "Emote id 4";
  app.saiLabels.action_type.param4[11] = "TargetsLimit";
  app.saiLabels.action_type.param4[12] = "Attack invoker (0/1)";
  app.saiLabels.action_type.param4[29] = "Credit creature entry";
  app.saiLabels.action_type.param4[30] = "Phasemask 4";
  app.saiLabels.action_type.param4[53] = "Quest id";
  app.saiLabels.action_type.param4[67] = "RepeatMin";
  app.saiLabels.action_type.param4[71] = "Item entry 2";
  app.saiLabels.action_type.param4[85] = "TargetsLimit";
  app.saiLabels.action_type.param4[86] = "Target parameter 1 of caster";
  app.saiLabels.action_type.param4[87] = "Script entry 4";
  app.saiLabels.action_type.param4[113] = "Waypoint 4";
  app.saiLabels.action_type.param4[115] = "soundId4";

  /* ACTION PARAM5 NAMES */
  app.saiLabels.action_type.param5[10] = "Emote id 5";
  app.saiLabels.action_type.param5[29] = "Credit type (0 / 1)";
  app.saiLabels.action_type.param5[30] = "Phasemask 5";
  app.saiLabels.action_type.param5[53] = "Despawn time after path";
  app.saiLabels.action_type.param5[67] = "RepeatMax";
  app.saiLabels.action_type.param5[71] = "Item entry 3";
  app.saiLabels.action_type.param5[86] = "Target parameter 2 of caster";
  app.saiLabels.action_type.param5[87] = "Script entry 5";
  app.saiLabels.action_type.param5[113] = "Waypoint 5";
  app.saiLabels.action_type.param5[115] = "soundId5";

  /* ACTION PARAM6 NAMES */
  app.saiLabels.action_type.param6[10] = "Emote id 6";
  app.saiLabels.action_type.param6[30] = "Phasemask 6";
  app.saiLabels.action_type.param6[53] = "Reactstate";
  app.saiLabels.action_type.param6[67] = "Chance";
  app.saiLabels.action_type.param6[86] = "Target parameter 3 of caster";
  app.saiLabels.action_type.param6[87] = "Script entry 6";
  app.saiLabels.action_type.param6[113] = "Waypoint 6";
  app.saiLabels.action_type.param6[115] = "onlySelf";

  /* EVENT PARAM1 NAMES */
  app.saiLabels.event_type.param1[0] = "InitialMin";
  app.saiLabels.event_type.param1[1] = "InitialMin";
  app.saiLabels.event_type.param1[2] = "Min health pct";
  app.saiLabels.event_type.param1[3] = "Min mana pct";
  app.saiLabels.event_type.param1[5] = "Cooldown min";
  app.saiLabels.event_type.param1[8] = "Spell id (0 any)";
  app.saiLabels.event_type.param1[9] = "Min distance to target";
  app.saiLabels.event_type.param1[10] = "Ignore hostile targets (0/1)";
  app.saiLabels.event_type.param1[11] = "Respawn condition";
  app.saiLabels.event_type.param1[12] = "Health pct min";
  app.saiLabels.event_type.param1[13] = "RepeatMin";
  app.saiLabels.event_type.param1[14] = "Health deficit (flat)";
  app.saiLabels.event_type.param1[15] = "Radius";
  app.saiLabels.event_type.param1[16] = "Spellid";
  app.saiLabels.event_type.param1[17] = "Creature id (0 any)";
  app.saiLabels.event_type.param1[18] = "Mana pct min";
  app.saiLabels.event_type.param1[19] = "Quest id (0 any)";
  app.saiLabels.event_type.param1[20] = "Quest id (0 any)";
  app.saiLabels.event_type.param1[22] = "Emote id";
  app.saiLabels.event_type.param1[23] = "Spell id";
  app.saiLabels.event_type.param1[24] = "Spell id";
  app.saiLabels.event_type.param1[26] = "Ignore hostile targets (0/1)";
  app.saiLabels.event_type.param1[31] = "Spell id";
  app.saiLabels.event_type.param1[32] = "Minimum damage";
  app.saiLabels.event_type.param1[33] = "Minimum damage";
  app.saiLabels.event_type.param1[34] = "Movement type (0 any)";
  app.saiLabels.event_type.param1[35] = "Creature entry (0 any)";
  app.saiLabels.event_type.param1[38] = "Field";
  app.saiLabels.event_type.param1[39] = "Point id (0 any)";
  app.saiLabels.event_type.param1[40] = "Point id (0 any)";
  app.saiLabels.event_type.param1[46] = "Areatrigger id (0 any)";
  app.saiLabels.event_type.param1[52] = "Group id (creature_text)";
  app.saiLabels.event_type.param1[53] = "Minimum heal";
  app.saiLabels.event_type.param1[55] = "Point id (0 any)";
  app.saiLabels.event_type.param1[56] = "Point id (0 any)";
  app.saiLabels.event_type.param1[57] = "Point id (0 any)";
  app.saiLabels.event_type.param1[58] = "Point id (0 any)";
  app.saiLabels.event_type.param1[59] = "Event id";
  app.saiLabels.event_type.param1[60] = "InitialMin";
  app.saiLabels.event_type.param1[62] = "Gossip menu id";
  app.saiLabels.event_type.param1[67] = "CooldownMin";
  app.saiLabels.event_type.param1[68] = "Game event entry";
  app.saiLabels.event_type.param1[69] = "Game event entry";
  app.saiLabels.event_type.param1[70] = "Gameobject state";
  app.saiLabels.event_type.param1[71] = "Event id";
  app.saiLabels.event_type.param1[72] = "Action id";
  app.saiLabels.event_type.param1[74] = "Health pct min";
  app.saiLabels.event_type.param1[75] = "Guid";
  app.saiLabels.event_type.param1[76] = "Guid";

  /* EVENT PARAM2 NAMES */
  app.saiLabels.event_type.param2[0] = "InitialMax";
  app.saiLabels.event_type.param2[1] = "InitialMax";
  app.saiLabels.event_type.param2[2] = "Max health pct";
  app.saiLabels.event_type.param2[3] = "Max mana pct";
  app.saiLabels.event_type.param2[5] = "Cooldown max";
  app.saiLabels.event_type.param2[8] = "Spell school (0 any)";
  app.saiLabels.event_type.param2[9] = "Max distance to target";
  app.saiLabels.event_type.param2[10] = "Max distance to target";
  app.saiLabels.event_type.param2[11] = "Map id condition";
  app.saiLabels.event_type.param2[12] = "Health pct max";
  app.saiLabels.event_type.param2[13] = "RepeatMax";
  app.saiLabels.event_type.param2[14] = "Radius";
  app.saiLabels.event_type.param2[15] = "RepeatMin";
  app.saiLabels.event_type.param2[16] = "Radius";
  app.saiLabels.event_type.param2[17] = "RepeatMin";
  app.saiLabels.event_type.param2[18] = "Mana pct max";
  app.saiLabels.event_type.param2[22] = "RepeatMin";
  app.saiLabels.event_type.param2[23] = "Stacks";
  app.saiLabels.event_type.param2[24] = "Stacks";
  app.saiLabels.event_type.param2[26] = "Max distance to target";
  app.saiLabels.event_type.param2[31] = "Spell school";
  app.saiLabels.event_type.param2[32] = "Maximum damage";
  app.saiLabels.event_type.param2[33] = "Maximum damage";
  app.saiLabels.event_type.param2[34] = "Point id";
  app.saiLabels.event_type.param2[35] = "CooldownMin";
  app.saiLabels.event_type.param2[38] = "Value";
  app.saiLabels.event_type.param2[39] = "Path id (0 any)";
  app.saiLabels.event_type.param2[40] = "Path id (0 any)";
  app.saiLabels.event_type.param2[52] = "Creature entry (0 any)";
  app.saiLabels.event_type.param2[53] = "Maximum heal";
  app.saiLabels.event_type.param2[55] = "Path id (0 any)";
  app.saiLabels.event_type.param2[56] = "Path id (0 any)";
  app.saiLabels.event_type.param2[57] = "Path id (0 any)";
  app.saiLabels.event_type.param2[58] = "Path id (0 any)";
  app.saiLabels.event_type.param2[60] = "InitialMax";
  app.saiLabels.event_type.param2[62] = "Gossip item id";
  app.saiLabels.event_type.param2[67] = "CooldownMax";
  app.saiLabels.event_type.param2[74] = "Health pct max";
  app.saiLabels.event_type.param2[75] = "Entry";
  app.saiLabels.event_type.param2[76] = "Entry";

  /* EVENT PARAM3 NAMES */
  app.saiLabels.event_type.param3[0] = "RepeatMin";
  app.saiLabels.event_type.param3[1] = "RepeatMin";
  app.saiLabels.event_type.param3[2] = "RepeatMin";
  app.saiLabels.event_type.param3[3] = "RepeatMin";
  app.saiLabels.event_type.param3[5] = "Player only (0/1)";
  app.saiLabels.event_type.param3[8] = "CooldownMin";
  app.saiLabels.event_type.param3[9] = "RepeatMin";
  app.saiLabels.event_type.param3[10] = "Cooldown min";
  app.saiLabels.event_type.param3[11] = "Zone id condition";
  app.saiLabels.event_type.param3[12] = "RepeatMin";
  app.saiLabels.event_type.param3[13] = "Spell id";
  app.saiLabels.event_type.param3[14] = "RepeatMin";
  app.saiLabels.event_type.param3[15] = "RepeatMax";
  app.saiLabels.event_type.param3[16] = "RepeatMin";
  app.saiLabels.event_type.param3[17] = "RepeatMax";
  app.saiLabels.event_type.param3[18] = "RepeatMin";
  app.saiLabels.event_type.param3[22] = "RepeatMax";
  app.saiLabels.event_type.param3[23] = "RepeatMin";
  app.saiLabels.event_type.param3[24] = "RepeatMin";
  app.saiLabels.event_type.param3[26] = "Cooldown min";
  app.saiLabels.event_type.param3[31] = "RepeatMin";
  app.saiLabels.event_type.param3[32] = "RepeatMin";
  app.saiLabels.event_type.param3[33] = "RepeatMin";
  app.saiLabels.event_type.param3[35] = "CooldownMax";
  app.saiLabels.event_type.param3[38] = "CooldownMin";
  app.saiLabels.event_type.param3[53] = "CooldownMin";
  app.saiLabels.event_type.param3[60] = "RepeatMin";
  app.saiLabels.event_type.param3[74] = "RepeatMin";
  app.saiLabels.event_type.param3[75] = "Distance";
  app.saiLabels.event_type.param3[76] = "Distance";

  /* EVENT PARAM4 NAMES */
  app.saiLabels.event_type.param4[0] = "RepeatMax";
  app.saiLabels.event_type.param4[1] = "RepeatMax";
  app.saiLabels.event_type.param4[2] = "RepeatMax";
  app.saiLabels.event_type.param4[3] = "RepeatMax";
  app.saiLabels.event_type.param4[5] = "Entry (if parameter 3 is 0)";
  app.saiLabels.event_type.param4[8] = "CooldownMax";
  app.saiLabels.event_type.param4[9] = "RepeatMax";
  app.saiLabels.event_type.param4[10] = "Cooldown max";
  app.saiLabels.event_type.param4[12] = "RepeatMax";
  app.saiLabels.event_type.param4[14] = "RepeatMax";
  app.saiLabels.event_type.param4[16] = "RepeatMax";
  app.saiLabels.event_type.param4[18] = "RepeatMax";
  app.saiLabels.event_type.param4[23] = "RepeatMax";
  app.saiLabels.event_type.param4[24] = "RepeatMax";
  app.saiLabels.event_type.param4[26] = "Cooldown max";
  app.saiLabels.event_type.param4[31] = "RepeatMax";
  app.saiLabels.event_type.param4[32] = "RepeatMax";
  app.saiLabels.event_type.param4[33] = "RepeatMax";
  app.saiLabels.event_type.param4[38] = "CooldownMax";
  app.saiLabels.event_type.param4[53] = "CooldownMax";
  app.saiLabels.event_type.param4[60] = "RepeatMax";
  app.saiLabels.event_type.param4[74] = "RepeatMax";
  app.saiLabels.event_type.param4[75] = "RepeatTimer";
  app.saiLabels.event_type.param4[76] = "RepeatTimer";

  /* TARGET PARAM1 NAMES */
  app.saiLabels.target_type.param1[3] = "MaxDistance";
  app.saiLabels.target_type.param1[4] = "MaxDistance";
  app.saiLabels.target_type.param1[5] = "MaxDistance";
  app.saiLabels.target_type.param1[6] = "MaxDistance";
  app.saiLabels.target_type.param1[9] = "Creature entry (0 any)";
  app.saiLabels.target_type.param1[10] = "Creature guid";
  app.saiLabels.target_type.param1[11] = "Creature entry (0 any)";
  app.saiLabels.target_type.param1[12] = "Store id";
  app.saiLabels.target_type.param1[13] = "Gameobject entry (0 any)";
  app.saiLabels.target_type.param1[14] = "Gameobject guid";
  app.saiLabels.target_type.param1[15] = "Gameobject entry (0 any)";
  app.saiLabels.target_type.param1[17] = "Minimum distance";
  app.saiLabels.target_type.param1[18] = "MaxDistance";
  app.saiLabels.target_type.param1[19] = "Creature entry (0 any)";
  app.saiLabels.target_type.param1[20] = "Gameobject entry (0 any)";
  app.saiLabels.target_type.param1[21] = "Maximum distance";
  app.saiLabels.target_type.param1[25] = "Maximum distance";
  app.saiLabels.target_type.param1[26] = "Maximum distance";
  app.saiLabels.target_type.param1[28] = "MaxDistance";

  /* TARGET PARAM2 NAMES */
  app.saiLabels.target_type.param2[3] = "PlayerOnly";
  app.saiLabels.target_type.param2[4] = "PlayerOnly";
  app.saiLabels.target_type.param2[5] = "PlayerOnly";
  app.saiLabels.target_type.param2[6] = "PlayerOnly";
  app.saiLabels.target_type.param2[9] = "Minimum distance";
  app.saiLabels.target_type.param2[10] = "Creature entry";
  app.saiLabels.target_type.param2[11] = "Maximum distance";
  app.saiLabels.target_type.param2[13] = "Minimum distance";
  app.saiLabels.target_type.param2[14] = "Gameobject entry";
  app.saiLabels.target_type.param2[15] = "Maximum distance";
  app.saiLabels.target_type.param2[17] = "Maximum distance";
  app.saiLabels.target_type.param2[19] = "Maximum distance";
  app.saiLabels.target_type.param2[20] = "Maximum distance";
  app.saiLabels.target_type.param2[25] = "Player only (0/1)";
  app.saiLabels.target_type.param2[26] = "Player only (0/1)";
  app.saiLabels.target_type.param2[28] = "PlayerOnly";

  /* TARGET PARAM3 NAMES */
  app.saiLabels.target_type.param3[3] = "PowerType(1,4)";
  app.saiLabels.target_type.param3[4] = "PowerType (1,4)";
  app.saiLabels.target_type.param3[5] = "PowerType (1,4)";
  app.saiLabels.target_type.param3[6] = "PowerType (1,4)";
  app.saiLabels.target_type.param3[9] = "Maximum distance";
  app.saiLabels.target_type.param3[13] = "Maximum distance";
  app.saiLabels.target_type.param3[19] = "Must be dead (0/1)";
  app.saiLabels.target_type.param3[28] = "isINLos? (0/1)";

  /* ACTION PARAM1 TOOLTIPS */
  app.saiLabels.action_type.paramTooltip1[1] = "creature_text.groupid";
  app.saiLabels.action_type.paramTooltip1[11] =
    "Flags Interrupt any spell casting:1 , SMARTCAST_TRIGGERED: 2, CAST_FORCE_CAST: 4, CAST_FORCE_TARGET_SELF:16, SMARTCAST_COMBAT_MOVE: 64";
  app.saiLabels.action_type.paramTooltip1[20] =
    "If set to 0 it means the creature will stop attacking its current target. Otherwise it starts / continues to attack its target.";
  app.saiLabels.action_type.paramTooltip1[21] =
    "If set to 0 it means the creature is no longer able to move AT ALL during combat. If set to 1 it means it's allowed to normally walk during combat.";
  app.saiLabels.action_type.paramTooltip1[25] =
    'Determines whether or not the creature should say something along the lines of "<name> starts fleeing ..." when it flees. If 0, it won\'t say anything (unless set manually). If above 0 it will say the automatic text.';
  app.saiLabels.action_type.paramTooltip1[28] =
    "Amount of charges of said aura to be removed. If 0, the whole aura is removed.";
  app.saiLabels.action_type.paramTooltip1[36] =
    "The creature entry we want to become (creature_template.entry)";
  app.saiLabels.action_type.paramTooltip1[39] =
    "Radius to call for help within";
  app.saiLabels.action_type.paramTooltip1[53] =
    "If set to 0, the creature will follow the path walking at a normal speed. If set to anything above 0 it will be running at a higher speed.";
  app.saiLabels.action_type.paramTooltip1[55] =
    "Time in milliseconds after which the creature despawns when the path was stopped.";
  app.saiLabels.action_type.paramTooltip1[69] =
    "If set to a value, SMART_EVENT_MOVEMENTINFORM will be called with this number when the unit finished moving to this position.";
  app.saiLabels.action_type.paramTooltip1[71] =
    "Entry of creature_equip_template. If left at 0, either parameter 3, 4 or 5 (or all, or just two) must be filled in with item entries to equip.";
  app.saiLabels.action_type.paramTooltip1[107] =
    "Group id column in the creature_summon_groups table (world database).";

  /* ACTION PARAM2 TOOLTIPS */
  app.saiLabels.action_type.paramTooltip2[1] =
    "Duration to wait before SMART_EVENT_TEXT_OVER event is triggered";
  app.saiLabels.action_type.paramTooltip2[4] =
    "If 0, everybody within the visibility range will hear the sound";
  app.saiLabels.action_type.paramTooltip2[18] =
    "Determines which unit flag to target; if 0, it targets the default unit flags which is creature_template.unit_flags. If set to 1 or higher, it targets creature_template.unit_flags2 (notice the '2') which has different values.";
  app.saiLabels.action_type.paramTooltip2[19] =
    "Determines which unit flag to target; if 0, it targets the default unit flags which is creature_template.unit_flags. If set to 1 or higher, it targets creature_template.unit_flags2 (notice the '2') which has different values.";
  app.saiLabels.action_type.paramTooltip2[36] =
    "Identifier of which faction the creature should become. If set to 0, it will set the creature's faction to creature_template.faction_a. If anything other than 1 it will be set to creature_template.faction_h.";
  app.saiLabels.action_type.paramTooltip2[39] =
    'Indicator whether or not we should automatically make the creature emote "<name> calls for help!" (which is usually blizzlike).';
  app.saiLabels.action_type.paramTooltip2[53] =
    "Entry of the `waypoints` (world database) table to follow.";
  app.saiLabels.action_type.paramTooltip2[55] =
    "Quest entry to count as 'failed' (based on third parameter). Does not have to be set if third parameter is set to 0.";
  app.saiLabels.action_type.paramTooltip2[71] =
    "Slotmask we show. Default is 0 and means all items are shown. If you only want to show one specific item (or two instead of all three), this field should be used as a bitmask starting at 1. Possible bits are 1, 2 and 4.";
  app.saiLabels.action_type.paramTooltip2[80] =
    "The timer update type. If set to 0, the script will only occur out of combat. If set to 1, it will only occur during combat and if set to 2 it will always occur.";
  app.saiLabels.action_type.paramTooltip2[90] =
    "If set to 0, it targets the stand states (stand/sit/sleep/etc.). If set to 1, it targets something talent-related for pets (don't use). If set to 2, it targets the stand flags (creep/untrackable/etc.) and if set to 3 it targets the stand misc. flags (hover/always-stand/etc.).";
  app.saiLabels.action_type.paramTooltip2[91] =
    "If set to 0, it targets the stand states (stand/sit/sleep/etc.). If set to 1, it targets something talent-related for pets (don't use). If set to 2, it targets the stand flags (creep/untrackable/etc.) and if set to 3 it targets the stand misc. flags (hover/always-stand/etc.).";
  app.saiLabels.action_type.paramTooltip2[92] =
    "If left at 0, the core will interrupt the currently being cast spell (based on the with-delay and instant parameters, of course)";
  app.saiLabels.action_type.paramTooltip2[98] =
    "Uses the `id` value from the `npc_text` table in the world database";

  /* ACTION PARAM3 TOOLTIPS */
  app.saiLabels.action_type.paramTooltip3[12] =
    "Duration the creature will be summoned (in milliseconds).";
  app.saiLabels.action_type.paramTooltip3[29] =
    "Default is 0. If it's not 0 it means the follow will finish ONLY once the creature is within interaction distance (5 yards) of the given entry.";
  app.saiLabels.action_type.paramTooltip3[53] =
    "Repeat the path when the it's finished.";
  app.saiLabels.action_type.paramTooltip3[55] =
    "If set to 1, we will mark the quest in parameter 2 to failed for our player targets.";
  app.saiLabels.action_type.paramTooltip3[71] =
    "Item entry one (main hand slot) (only has use if the first parameter is 0)";

  /* ACTION PARAM4 TOOLTIPS */
  app.saiLabels.action_type.paramTooltip4[12] =
    "Identicator whether or not the summoned creature should attack the action invoker (SMART_TARGET_ACTION_INVOKER) when it's summoned. 0 means it won't, 1 means it will attack.";
  app.saiLabels.action_type.paramTooltip4[29] =
    "The creature id that will be given as a quest credit when the follow has finished for whatever reason.";
  app.saiLabels.action_type.paramTooltip4[53] =
    "Quest entry to give credit for once the path has finished. Will use the target type and take all player entities from this list.";
  app.saiLabels.action_type.paramTooltip4[67] =
    "Only set this if the event repeats.";
  app.saiLabels.action_type.paramTooltip4[71] =
    "Item entry two (off hand slot) (only has use if the first parameter is 0)";

  /* ACTION PARAM5 TOOLTIPS */
  app.saiLabels.action_type.paramTooltip5[29] =
    "Requires the 4th parameter to be set and valid; determines whether the entry in parameter 4 is a monster kill or event happening. If you're not sure what they mean, read the quest_template wiki.";
  app.saiLabels.action_type.paramTooltip5[53] =
    "Time in milliseconds to wait after the path ended before we despawn.";
  app.saiLabels.action_type.paramTooltip5[67] =
    "Only set this if the event repeats.";
  app.saiLabels.action_type.paramTooltip5[71] =
    "Item entry three (gun/bow/etc. slot) (only has use if the first parameter is 0)";

  /* ACTION PARAM6 TOOLTIPS */
  app.saiLabels.action_type.paramTooltip6[53] =
    "Reactstate that is set when the waypoint starts.";

  /* EVENT PARAM1 TOOLTIPS */
  app.saiLabels.event_type.paramTooltip1[0] = "Timer min";
  app.saiLabels.event_type.paramTooltip1[1] = "Timer min";
  app.saiLabels.event_type.paramTooltip1[2] = "Timer min";
  app.saiLabels.event_type.paramTooltip1[3] = "Timer min";
  app.saiLabels.event_type.paramTooltip1[8] =
    "Spell id that will limit this event to only be triggered if the spell that hit us has this id. If left at 0, it works for EVERY spell.";
  app.saiLabels.event_type.paramTooltip1[9] =
    "Minimum distance to target for the event to be triggered";
  app.saiLabels.event_type.paramTooltip1[10] =
    "If 0, we allow only non-hostile units to trigger this event for us. If set to 1, we only allow hostile units to triger this event.";
  app.saiLabels.event_type.paramTooltip1[11] =
    "The condition type for this event to trigger. This is used to determine whether we should check if the mapid (parameter 2) or the zoneid (parameter 3) should be checked for correctness.";
  app.saiLabels.event_type.paramTooltip1[14] =
    "Health the friendly unit must be at. Warning: this is NOT health percentage!";
  app.saiLabels.event_type.paramTooltip1[16] =
    "Spell id for the event to trigger. If the spellid is negative it means the event is reversed and triggered only when the aura is actually active on the friendly unit.";
  app.saiLabels.event_type.paramTooltip1[17] =
    "Creature entry that must be summoned in order for this event to trigger. If left at 0 it will be triggered by any creature entry.";
  app.saiLabels.event_type.paramTooltip1[19] =
    "Quest id to trigger this event; if the parameter is 0 it means it will be triggered by ANY quest.";
  app.saiLabels.event_type.paramTooltip1[20] =
    "Quest id to trigger this event; if the parameter is 0 it means it will be triggered by ANY quest.";
  app.saiLabels.event_type.paramTooltip1[23] =
    "Spell id for the event to trigger. If the spellid is negative it means the event is reversed and triggered only when the aura is not present on the creature.";
  app.saiLabels.event_type.paramTooltip1[24] =
    "Spell id for the event to trigger. If the spellid is negative it means the event is reversed and triggered only when the aura is not present on the creature.";
  app.saiLabels.event_type.paramTooltip1[26] =
    "If 0, we allow only non-hostile units to trigger this event for us. If set to 1, we only allow hostile units to triger this event.";
  app.saiLabels.event_type.paramTooltip1[32] =
    "Minimum amount of damage required to trigger this event";
  app.saiLabels.event_type.paramTooltip1[33] =
    "Minimum amount of damage required to trigger this event";
  app.saiLabels.event_type.paramTooltip1[35] =
    "Creature entry to act as a condition. If left at 0, this event is triggered for any summon that despawn. If an entry is given, it is only triggered when that specific entry despawns.";
  app.saiLabels.event_type.paramTooltip1[38] =
    "First parameter of SMART_ACTION_SET_DATA";
  app.saiLabels.event_type.paramTooltip1[46] =
    "Entry of the areatrigger to make this event happen. If left at 0 it will trigger for any areatrigger.";
  app.saiLabels.event_type.paramTooltip1[52] =
    "The creature_text.groupid value to trigger this event for";
  app.saiLabels.event_type.paramTooltip1[53] =
    "Minimum required value the heal effect must be in order to trigger this event";
  app.saiLabels.event_type.paramTooltip1[59] =
    "First parameter of SMART_ACTION_CREATE_TIMED_EVENT";
  app.saiLabels.event_type.paramTooltip1[62] =
    "This is the gossip_menu.entry identifier";
  app.saiLabels.event_type.paramTooltip1[70] =
    "The new state of the gameobject after this event";
  app.saiLabels.event_type.paramTooltip1[75] =
    "Guid of the creature we want to check for. Can be left on 0 if the entry is given.";
  app.saiLabels.event_type.paramTooltip1[76] =
    "Guid of the gameobject we want to check for. Can be left on 0 if the entry is given.";

  /* EVENT PARAM2 TOOLTIPS */
  app.saiLabels.event_type.paramTooltip2[0] = "Timer max";
  app.saiLabels.event_type.paramTooltip2[1] = "Timer max";
  app.saiLabels.event_type.paramTooltip2[2] = "Timer max";
  app.saiLabels.event_type.paramTooltip2[3] = "Timer max";
  app.saiLabels.event_type.paramTooltip2[9] =
    "Maximum distance to target for the event to be triggered";
  app.saiLabels.event_type.paramTooltip2[32] =
    "Maximum allowed damage to make this event be able to trigger";
  app.saiLabels.event_type.paramTooltip2[33] =
    "Maximum allowed damage to make this event be able to trigger";
  app.saiLabels.event_type.paramTooltip2[38] =
    "Second parameter of SMART_ACTION_SET_DATA";
  app.saiLabels.event_type.paramTooltip2[53] =
    "Maximum allowed value of the heal effect to allow this event to trigger";
  app.saiLabels.event_type.paramTooltip2[62] =
    "This is the gossip_menu_option.id identifier";
  app.saiLabels.event_type.paramTooltip2[75] =
    "Entry of the creature we want to check for. Can be left on 0 if the guid is given.";
  app.saiLabels.event_type.paramTooltip2[76] =
    "Entry of the gameobject we want to check for. Can be left on 0 if the guid is given.";

  /* EVENT PARAM3 TOOLTIPS */
  app.saiLabels.event_type.paramTooltip3[0] = "Repeat timer min";
  app.saiLabels.event_type.paramTooltip3[1] = "Repeat timer min";
  app.saiLabels.event_type.paramTooltip3[2] = "Repeat timer min";
  app.saiLabels.event_type.paramTooltip3[3] = "Repeat timer min";
  app.saiLabels.event_type.paramTooltip3[5] =
    "Indicator if killed unit must be player only; if 0, the 4th parameter must be set to the creature id.";
  app.saiLabels.event_type.paramTooltip3[9] = "Timer min";
  app.saiLabels.event_type.paramTooltip3[13] =
    "Spell id the target must be casting. If left at 0, it detects ANY spell.";
  app.saiLabels.event_type.paramTooltip3[75] =
    "Min distance to the creature that'll make the event trigger";
  app.saiLabels.event_type.paramTooltip3[76] =
    "Min distance to the gameobject that'll make the event trigger";

  /* EVENT PARAM4 TOOLTIPS */
  app.saiLabels.event_type.paramTooltip4[0] = "Repeat timer max";
  app.saiLabels.event_type.paramTooltip4[1] = "Repeat timer max";
  app.saiLabels.event_type.paramTooltip4[2] = "Repeat timer max";
  app.saiLabels.event_type.paramTooltip4[3] = "Repeat timer max";
  app.saiLabels.event_type.paramTooltip4[5] =
    "Entry of the creature that has to be killed for this event to trigger. Only has effect if third parameter is set to 0.";
  app.saiLabels.event_type.paramTooltip4[9] = "Timer max";
  app.saiLabels.event_type.paramTooltip4[75] =
    "Timer to check for distance. It's not a good idea to leave this at 0, having a handful of events doing that can slow down your core big time.";
  app.saiLabels.event_type.paramTooltip4[76] =
    "Timer to check for distance. It's not a good idea to leave this at 0, having a handful of events doing that can slow down your core big time.";

  /* TARGET PARAM1 TOOLTIPS */
  app.saiLabels.target_type.paramTooltip1[9] =
    "If left at 0, it will target all creatures within the given distance";
  app.saiLabels.target_type.paramTooltip1[11] =
    "If left at 0, it will target all creatures within the given distance";
  app.saiLabels.target_type.paramTooltip1[13] =
    "If left at 0, it will target all gameobjects within the given distance";
  app.saiLabels.target_type.paramTooltip1[15] =
    "If left at 0, it will target all gameobjects within the given distance";
  app.saiLabels.target_type.paramTooltip1[19] =
    "If left at 0, it will target the closest creature of ANY entry";
  app.saiLabels.target_type.paramTooltip1[20] =
    "If left at 0, it will target the closest creature of ANY entry";

  /* TARGET PARAM2 TOOLTIPS */
  // there are no target param2 tooltips at the moment

  /* TARGET PARAM3 TOOLTIPS */
  app.saiLabels.target_type.paramTooltip3[19] =
    "If set to 0 it will only target alive creatures; if set to 1 it will target only alive creatures";

  /* EVENT COMMENTS */
  app.saiLabels.comment.event[app.saiConstants.event.SPELLHIT] =
    "On Spellhit '_spellNameEventParamOne_'";
  app.saiLabels.comment.event[app.saiConstants.event.HAS_AURA] =
    "On _hasAuraEventParamOne_ '_spellNameEventParamOne_'";
  app.saiLabels.comment.event[app.saiConstants.event.TARGET_BUFFED] =
    "On Target Buffed With '_spellNameEventParamOne_'";
  app.saiLabels.comment.event[app.saiConstants.event.SPELLHIT_TARGET] =
    "On Target Spellhit '_spellNameEventParamOne_'";
  app.saiLabels.comment.event[app.saiConstants.event.FRIENDLY_MISSING_BUFF] =
    "On Friendly Unit Missing Buff '_spellNameEventParamOne_'";
  app.saiLabels.comment.event[app.saiConstants.event.HEALT_PCT] =
    "Between _eventParamOne_-_eventParamTwo_% Health";
  app.saiLabels.comment.event[app.saiConstants.event.MANA_PCT] =
    "Between _eventParamOne_-_eventParamTwo_% Mana";
  app.saiLabels.comment.event[app.saiConstants.event.RANGE] =
    "Within _eventParamOne_-_eventParamTwo_ Range";
  app.saiLabels.comment.event[app.saiConstants.event.OOC_LOS] =
    "Within _eventParamOne_-_eventParamTwo_ Range Out of Combat LoS";
  app.saiLabels.comment.event[app.saiConstants.event.TARGET_HEALTH_PCT] =
    "Target Between _eventParamOne_-_eventParamTwo_% Health";
  app.saiLabels.comment.event[app.saiConstants.event.FRIENDLY_HEALTH] =
    "Friendly At _eventParamOne_ Health";
  app.saiLabels.comment.event[app.saiConstants.event.TARGET_MANA_PCT] =
    "Target Between _eventParamOne_-_eventParamTwo_% Mana";
  app.saiLabels.comment.event[app.saiConstants.event.RECEIVE_EMOTE] =
    "Received Emote _eventParamOne_";
  app.saiLabels.comment.event[app.saiConstants.event.DAMAGED] =
    "On Damaged Between _eventParamOne_-_eventParamTwo_";
  app.saiLabels.comment.event[app.saiConstants.event.DAMAGED_TARGET] =
    "On Target Damaged Between _eventParamOne_-_eventParamTwo_";
  app.saiLabels.comment.event[app.saiConstants.event.MOVEMENTINFORM] =
    "On Reached Point _eventParamTwo_";
  app.saiLabels.comment.event[app.saiConstants.event.SUMMON_DESPAWNED] =
    "On Summon _npcNameFirstParam_ Despawned";
  app.saiLabels.comment.event[app.saiConstants.event.DATA_SET] =
    "On Data Set _eventParamOne_ _eventParamTwo_";
  app.saiLabels.comment.event[app.saiConstants.event.WAYPOINT_REACHED] =
    "On Waypoint _eventParamOne_ Reached";
  app.saiLabels.comment.event[app.saiConstants.event.TEXT_OVER] =
    "On Text _eventParamOne_ Over";
  app.saiLabels.comment.event[app.saiConstants.event.RECEIVE_HEAL] =
    "On Received Heal Between _eventParamOne_-_eventParamTwo_";
  app.saiLabels.comment.event[app.saiConstants.event.TIMED_EVENT_TRIGGERED] =
    "On Timed Event _eventParamOne_ Triggered";
  app.saiLabels.comment.event[app.saiConstants.event.GOSSIP_SELECT] =
    "On Gossip Option _eventParamTwo_ Selected";
  app.saiLabels.comment.event[app.saiConstants.event.GAME_EVENT_START] =
    "On Game Event _eventParamOne_ Started";
  app.saiLabels.comment.event[app.saiConstants.event.GAME_EVENT_END] =
    "On Game Event _eventParamOne_ Ended";
  app.saiLabels.comment.event[app.saiConstants.event.GO_EVENT_INFORM] =
    "On Event _eventParamOne_ Inform";
  app.saiLabels.comment.event[app.saiConstants.event.ACTION_DONE] =
    "On Action _eventParamOne_ Done";
  app.saiLabels.comment.event[app.saiConstants.event.FRIENDLY_HEALTH_PCT] =
    "On Friendly Between _eventParamOne_-_eventParamTwo_% Health";
  app.saiLabels.comment.event[app.saiConstants.event.UPDATE_IC] = "In Combat";
  app.saiLabels.comment.event[app.saiConstants.event.UPDATE_OOC] =
    "Out of Combat";
  app.saiLabels.comment.event[app.saiConstants.event.AGGRO] = "On Aggro";
  app.saiLabels.comment.event[app.saiConstants.event.KILL] = "On Killed Unit";
  app.saiLabels.comment.event[app.saiConstants.event.DEATH] = "On Just Died";
  app.saiLabels.comment.event[app.saiConstants.event.EVADE] = "On Evade";
  app.saiLabels.comment.event[app.saiConstants.event.RESPAWN] = "On Respawn";
  app.saiLabels.comment.event[app.saiConstants.event.VICTIM_CASTING] =
    "On Victim Casting '_targetCastingSpellName_'";
  app.saiLabels.comment.event[app.saiConstants.event.FRIENDLY_IS_CC] =
    "On Friendly Crowd Controlled";
  app.saiLabels.comment.event[app.saiConstants.event.SUMMONED_UNIT] =
    "On Summoned Unit";
  app.saiLabels.comment.event[app.saiConstants.event.ACCEPTED_QUEST] =
    "On Quest '_questNameEventParamOne_' Taken";
  app.saiLabels.comment.event[app.saiConstants.event.REWARD_QUEST] =
    "On Quest '_questNameEventParamOne_' Finished";
  app.saiLabels.comment.event[app.saiConstants.event.REACHED_HOME] =
    "On Reached Home";
  app.saiLabels.comment.event[app.saiConstants.event.RESET] = "On Reset";
  app.saiLabels.comment.event[app.saiConstants.event.IC_LOS] = "In Combat LoS";
  app.saiLabels.comment.event[app.saiConstants.event.PASSENGER_BOARDED] =
    "On Passenger Boarded";
  app.saiLabels.comment.event[app.saiConstants.event.PASSENGER_REMOVED] =
    "On Passenger Removed";
  app.saiLabels.comment.event[app.saiConstants.event.CHARMED] = "On Charmed";
  app.saiLabels.comment.event[app.saiConstants.event.CHARMED_TARGET] =
    "On Target Charmed";
  app.saiLabels.comment.event[app.saiConstants.event.CORPSE_REMOVED] =
    "On Corpse Removed";
  app.saiLabels.comment.event[app.saiConstants.event.AI_INIT] = "On Initialize";
  app.saiLabels.comment.event[app.saiConstants.event.WAYPOINT_START] =
    "On Waypoint Started";
  app.saiLabels.comment.event[app.saiConstants.event.TRANSPORT_ADDPLAYER_NYI] =
    "On Transport Player Added";
  app.saiLabels.comment.event[
    app.saiConstants.event.TRANSPORT_ADDCREATURE_NYI
  ] = "On Transport Creature Added";
  app.saiLabels.comment.event[
    app.saiConstants.event.TRANSPORT_REMOVE_PLAYER_NYI
  ] = "On Transport Player Removed";
  app.saiLabels.comment.event[app.saiConstants.event.TRANSPORT_RELOCATE_NYI] =
    "On Transport Relocate";
  app.saiLabels.comment.event[
    app.saiConstants.event.INSTANCE_PLAYER_ENTER_NYI
  ] = "On Instance Player Enter";
  app.saiLabels.comment.event[app.saiConstants.event.AREATRIGGER_ONTRIGGER] =
    "On Trigger";
  app.saiLabels.comment.event[app.saiConstants.event.QUEST_ACCEPTED_NYI] =
    "On Quest Accepted";
  app.saiLabels.comment.event[
    app.saiConstants.event.QUEST_OBJ_COPLETETION_NYI
  ] = "On Quest Object Completed";
  app.saiLabels.comment.event[app.saiConstants.event.QUEST_COMPLETION_NYI] =
    "On Quest Completed";
  app.saiLabels.comment.event[app.saiConstants.event.QUEST_REWARDED_NYI] =
    "On Quest Rewarded";
  app.saiLabels.comment.event[app.saiConstants.event.QUEST_FAIL_NYI] =
    "On Quest Failed";
  app.saiLabels.comment.event[app.saiConstants.event.JUST_SUMMONED] =
    "On Just Summoned";
  app.saiLabels.comment.event[app.saiConstants.event.WAYPOINT_PAUSED] =
    "On Waypoint Paused";
  app.saiLabels.comment.event[app.saiConstants.event.WAYPOINT_RESUMED] =
    "On Waypoint Resumed";
  app.saiLabels.comment.event[app.saiConstants.event.WAYPOINT_STOPPED] =
    "On Waypoint Stopped";
  app.saiLabels.comment.event[app.saiConstants.event.WAYPOINT_ENDED] =
    "On Waypoint Finished";
  app.saiLabels.comment.event[app.saiConstants.event.UPDATE] = "On Update";
  app.saiLabels.comment.event[app.saiConstants.event.JUST_CREATED] =
    "On Just Created";
  app.saiLabels.comment.event[app.saiConstants.event.GOSSIP_HELLO] =
    "On Gossip Hello";
  app.saiLabels.comment.event[app.saiConstants.event.FOLLOW_COMPLETED] =
    "On Follow Complete";
  app.saiLabels.comment.event[app.saiConstants.event.DUMMY_EFFECT_NYI] =
    "On Dummy Effect";
  app.saiLabels.comment.event[app.saiConstants.event.IS_BEHIND_TARGET] =
    "On Behind Target";
  app.saiLabels.comment.event[app.saiConstants.event.GO_STATE_CHANGED] =
    "On Gameobject State Changed";
  app.saiLabels.comment.event[app.saiConstants.event.ON_SPELLCLICK] =
    "On Spellclick";
  app.saiLabels.comment.event[app.saiConstants.event.DISTANCE_CREATURE] =
    "On Distance To Creature";
  app.saiLabels.comment.event[app.saiConstants.event.DISTANCE_GAMEOBJECT] =
    "On Distance To GameObject";
  app.saiLabels.comment.event[app.saiConstants.event.LINK] =
    "_previousLineComment_";

  /* ACTION COMMENTS */
  app.saiLabels.comment.action[app.saiConstants.action.NONE] = "No Action Type";
  app.saiLabels.comment.action[app.saiConstants.action.TALK] =
    "Say Line _actionParamOne_";
  app.saiLabels.comment.action[app.saiConstants.action.SET_FACTION] =
    "Set Faction _actionParamOne_";
  app.saiLabels.comment.action[
    app.saiConstants.action.MORPH_TO_ENTRY_OR_MODEL
  ] = "_morphToEntryOrModelActionParams_";
  app.saiLabels.comment.action[app.saiConstants.action.SOUND] =
    "Play Sound _actionParamOne_";
  app.saiLabels.comment.action[app.saiConstants.action.EMOTE] =
    "Play Emote _actionParamOne_";
  app.saiLabels.comment.action[app.saiConstants.action.FAIL_QUEST] =
    "Fail Quest '_questNameActionParamOne_'";
  app.saiLabels.comment.action[app.saiConstants.action.ADD_QUEST] =
    "Add Quest '_questNameActionParamOne_'";
  app.saiLabels.comment.action[app.saiConstants.action.SET_REACT_STATE] =
    "Set Reactstate _reactStateParamOne_";
  app.saiLabels.comment.action[app.saiConstants.action.ACTIVATE_GOBJECT] =
    "Activate Gameobject";
  app.saiLabels.comment.action[app.saiConstants.action.RANDOM_EMOTE] =
    "Play Random Emote (_actionRandomParameters_)";
  app.saiLabels.comment.action[app.saiConstants.action.CAST] =
    "Cast '_spellNameActionParamOne_'";
  app.saiLabels.comment.action[app.saiConstants.action.SUMMON_CREATURE] =
    "Summon Creature '_creatureNameActionParamOne_'";
  app.saiLabels.comment.action[app.saiConstants.action.THREAT_SINGLE_PCT] =
    "Set Single Threat _actionParamOne_-_actionParamTwo_";
  app.saiLabels.comment.action[app.saiConstants.action.THREAT_ALL_PCT] =
    "Set All Threat _actionParamOne_-_actionParamTwo_";
  app.saiLabels.comment.action[
    app.saiConstants.action.CALL_AREAEXPLOREDOREVENTHAPPENS
  ] = "Quest Credit '_questNameActionParamOne_'";
  app.saiLabels.comment.action[app.saiConstants.action.UNUSED_16] =
    "Unused Action Type (16)";
  app.saiLabels.comment.action[app.saiConstants.action.SET_EMOTE_STATE] =
    "Set Emote State _actionParamOne_";
  app.saiLabels.comment.action[app.saiConstants.action.SET_UNIT_FLAG] =
    "Set Flag_getUnitFlags_";
  app.saiLabels.comment.action[app.saiConstants.action.REMOVE_UNIT_FLAG] =
    "Remove Flag_getUnitFlags_";
  app.saiLabels.comment.action[app.saiConstants.action.AUTO_ATTACK] =
    "_startOrStopActionParamOne_ Attacking";
  app.saiLabels.comment.action[app.saiConstants.action.COMBAT_MOVEMENT] =
    "_enableDisableActionParamOne_ Combat Movement";
  app.saiLabels.comment.action[app.saiConstants.action.SET_EVENT_PHASE] =
    "Set Event Phase _actionParamOne_";
  app.saiLabels.comment.action[app.saiConstants.action.INC_EVENT_PHASE] =
    "_incrementOrDecrementActionParamOne_ Phase";
  app.saiLabels.comment.action[app.saiConstants.action.EVADE] = "Evade";
  app.saiLabels.comment.action[app.saiConstants.action.FLEE_FOR_ASSIST] =
    "Flee For Assist";
  app.saiLabels.comment.action[app.saiConstants.action.CALL_GROUPEVENTHAPPENS] =
    "Quest Credit '_questNameActionParamOne_'";
  app.saiLabels.comment.action[
    app.saiConstants.action.CALL_CASTEDCREATUREORGO
  ] = "Quest Credit '_questNameCastCreatureOrGo_'";
  app.saiLabels.comment.action[app.saiConstants.action.REMOVEAURASFROMSPELL] =
    "Remove Aura '_spellNameActionParamOne_'";
  app.saiLabels.comment.action[app.saiConstants.action.FOLLOW] =
    "_startOrStopBasedOnTargetType_ Follow _getTargetType_";
  app.saiLabels.comment.action[app.saiConstants.action.RANDOM_PHASE] =
    "Set Random Phase(_actionRandomParameters_)";
  app.saiLabels.comment.action[app.saiConstants.action.RANDOM_PHASE_RANGE] =
    "Set Phase Random Between _actionParamOne_-_actionParamTwo_";
  app.saiLabels.comment.action[app.saiConstants.action.RESET_GOBJECT] =
    "Reset Gameobject";
  app.saiLabels.comment.action[app.saiConstants.action.KILLED_MONSTER] =
    "Quest Credit '_questNameKillCredit_'";
  app.saiLabels.comment.action[app.saiConstants.action.SET_INST_DATA] =
    "Set Instance Data _actionParamOne_ to _actionParamTwo_";
  app.saiLabels.comment.action[app.saiConstants.action.SET_INST_DATA64] =
    "Set Instance Data _actionParamOne_";
  app.saiLabels.comment.action[app.saiConstants.action.UPDATE_TEMPLATE] =
    "Update Template To '_creatureNameActionParamOne_'";
  app.saiLabels.comment.action[app.saiConstants.action.DIE] = "Kill Self";
  app.saiLabels.comment.action[
    app.saiConstants.action.SET_IN_COMBAT_WITH_ZONE
  ] = "Set In Combat With Zone";
  app.saiLabels.comment.action[app.saiConstants.action.CALL_FOR_HELP] =
    "Call For Help";
  app.saiLabels.comment.action[app.saiConstants.action.SET_SHEATH] =
    "Set Sheath _sheathActionParamOne_";
  app.saiLabels.comment.action[app.saiConstants.action.FORCE_DESPAWN] =
    "Despawn _forceDespawnActionParamOne_";
  app.saiLabels.comment.action[
    app.saiConstants.action.SET_INVINCIBILITY_HP_LEVEL
  ] = "_invincibilityHpActionParamsOneTwo_";
  app.saiLabels.comment.action[
    app.saiConstants.action.MOUNT_TO_ENTRY_OR_MODEL
  ] = "_mountToEntryOrModelActionParams_";
  app.saiLabels.comment.action[app.saiConstants.action.SET_PHASE_MASK] =
    "Set Phase _actionParamOne_";
  app.saiLabels.comment.action[app.saiConstants.action.SET_DATA] =
    "Set Data _actionParamOne_ _actionParamTwo_";
  app.saiLabels.comment.action[app.saiConstants.action.MOVE_FORWARD] =
    "Move Forward _actionParamOne_ Yards";
  app.saiLabels.comment.action[app.saiConstants.action.SET_VISIBILITY] =
    "Set Visibility _onOffActionParamOne_";
  app.saiLabels.comment.action[app.saiConstants.action.SET_ACTIVE] =
    "Set Active _onOffActionParamOne_";
  app.saiLabels.comment.action[app.saiConstants.action.ATTACK_START] =
    "Start Attacking";
  app.saiLabels.comment.action[app.saiConstants.action.SUMMON_GO] =
    "Summon Gameobject '_gameobjectNameActionParamOne_'";
  app.saiLabels.comment.action[app.saiConstants.action.KILL_UNIT] =
    "Kill Target";
  app.saiLabels.comment.action[app.saiConstants.action.ACTIVATE_TAXI] =
    "Activate Taxi Path _actionParamOne_";
  app.saiLabels.comment.action[app.saiConstants.action.WP_START] =
    "Start Waypoint";
  app.saiLabels.comment.action[app.saiConstants.action.WP_PAUSE] =
    "Pause Waypoint";
  app.saiLabels.comment.action[app.saiConstants.action.WP_STOP] =
    "Stop Waypoint";
  app.saiLabels.comment.action[app.saiConstants.action.ADD_ITEM] =
    "Add Item _addItemBasedOnActionParams_";
  app.saiLabels.comment.action[app.saiConstants.action.REMOVE_ITEM] =
    "Remove Item _addItemBasedOnActionParams_";
  app.saiLabels.comment.action[app.saiConstants.action.INSTALL_AI_TEMPLATE] =
    "Install _updateAiTemplateActionParamOne_ Template";
  app.saiLabels.comment.action[app.saiConstants.action.SET_RUN] =
    "Set Run _onOffActionParamOne_";
  app.saiLabels.comment.action[app.saiConstants.action.SET_FLY] =
    "Set Fly _onOffActionParamOne_";
  app.saiLabels.comment.action[app.saiConstants.action.SET_SWIM] =
    "Set Swim _onOffActionParamOne_";
  app.saiLabels.comment.action[app.saiConstants.action.TELEPORT] = "Teleport";
  app.saiLabels.comment.action[app.saiConstants.action.STORE_TARGET_LIST] =
    "Store Targetlist";
  app.saiLabels.comment.action[app.saiConstants.action.UNUSED_63] =
    "Unused Action Type (63)";
  app.saiLabels.comment.action[app.saiConstants.action.WP_RESUME] =
    "Resume Waypoint";
  app.saiLabels.comment.action[app.saiConstants.action.SET_ORIENTATION] =
    "Set Orientation _setOrientationTargetType_";
  app.saiLabels.comment.action[app.saiConstants.action.CREATE_TIMED_EVENT] =
    "Create Timed Event";
  app.saiLabels.comment.action[app.saiConstants.action.PLAYMOVIE] =
    "Play Movie _actionParamOne_";
  app.saiLabels.comment.action[app.saiConstants.action.MOVE_TO_POS] =
    "Move To _getTargetType_";
  app.saiLabels.comment.action[app.saiConstants.action.RESPAWN_TARGET] =
    "Respawn _getTargetType_";
  app.saiLabels.comment.action[app.saiConstants.action.EQUIP] =
    "Change Equipment";
  app.saiLabels.comment.action[app.saiConstants.action.CLOSE_GOSSIP] =
    "Close Gossip";
  app.saiLabels.comment.action[app.saiConstants.action.TRIGGER_TIMED_EVENT] =
    "Trigger Timed Event _actionParamOne_";
  app.saiLabels.comment.action[app.saiConstants.action.REMOVE_TIMED_EVENT] =
    "Remove Timed Event _actionParamOne_";
  app.saiLabels.comment.action[app.saiConstants.action.ADD_AURA] =
    "Add Aura '_spellNameActionParamOne_'";
  app.saiLabels.comment.action[
    app.saiConstants.action.OVERRIDE_SCRIPT_BASE_OBJECT
  ] = "Override Base Object Script";
  app.saiLabels.comment.action[
    app.saiConstants.action.RESET_SCRIPT_BASE_OBJECT
  ] = "Reset Base Object Script";
  app.saiLabels.comment.action[app.saiConstants.action.CALL_SCRIPT_RESET] =
    "Reset All Scripts";
  app.saiLabels.comment.action[app.saiConstants.action.SET_RANGED_MOVEMENT] =
    "Set Ranged Movement";
  app.saiLabels.comment.action[app.saiConstants.action.CALL_TIMED_ACTIONLIST] =
    "Run Script";
  app.saiLabels.comment.action[app.saiConstants.action.SET_NPC_FLAG] =
    "Set Npc Flag_getNpcFlags_";
  app.saiLabels.comment.action[app.saiConstants.action.ADD_NPC_FLAG] =
    "Add Npc Flag_getNpcFlags_";
  app.saiLabels.comment.action[app.saiConstants.action.REMOVE_NPC_FLAG] =
    "Remove Npc Flag_getNpcFlags_";
  app.saiLabels.comment.action[app.saiConstants.action.SIMPLE_TALK] =
    "Say Line _actionParamOne_";
  app.saiLabels.comment.action[app.saiConstants.action.INVOKER_CAST] =
    "Invoker Cast '_spellNameActionParamOne_'";
  app.saiLabels.comment.action[app.saiConstants.action.CROSS_CAST] =
    "Cross Cast '_spellNameActionParamOne_'";
  app.saiLabels.comment.action[
    app.saiConstants.action.CALL_RANDOM_TIMED_ACTIONLIST
  ] = "Run Random Script";
  app.saiLabels.comment.action[
    app.saiConstants.action.CALL_RANDOM_RANGE_TIMED_ACTIONLIST
  ] = "Run Random Script";
  app.saiLabels.comment.action[app.saiConstants.action.RANDOM_MOVE] =
    "Start Random Movement";
  app.saiLabels.comment.action[app.saiConstants.action.SET_UNIT_FIELD_BYTES_1] =
    "Set Flag _getBytes1Flags_";
  app.saiLabels.comment.action[
    app.saiConstants.action.REMOVE_UNIT_FIELD_BYTES_1
  ] = "Remove Flag _getBytes1Flags_";
  app.saiLabels.comment.action[app.saiConstants.action.INTERRUPT_SPELL] =
    "Interrupt Spell '_spellNameActionParamTwo_'";
  app.saiLabels.comment.action[app.saiConstants.action.SEND_GO_CUSTOM_ANIM] =
    "Send Custom Animation _actionParamOne_";
  app.saiLabels.comment.action[app.saiConstants.action.SET_DYNAMIC_FLAG] =
    "Set Dynamic Flag_getDynamicFlags_";
  app.saiLabels.comment.action[app.saiConstants.action.ADD_DYNAMIC_FLAG] =
    "Add Dynamic Flag_getDynamicFlags_";
  app.saiLabels.comment.action[app.saiConstants.action.REMOVE_DYNAMIC_FLAG] =
    "Remove Dynamic Flag_getDynamicFlags_";
  app.saiLabels.comment.action[app.saiConstants.action.JUMP_TO_POS] =
    "Jump To Pos";
  app.saiLabels.comment.action[app.saiConstants.action.SEND_GOSSIP_MENU] =
    "Send Gossip";
  app.saiLabels.comment.action[app.saiConstants.action.GO_SET_LOOT_STATE] =
    "Set Lootstate _goStateActionParamOne_";
  app.saiLabels.comment.action[app.saiConstants.action.SEND_TARGET_TO_TARGET] =
    "Send Target _actionParamOne_";
  app.saiLabels.comment.action[app.saiConstants.action.SET_HOME_POS] =
    "Set Home Position";
  app.saiLabels.comment.action[app.saiConstants.action.SET_HEALTH_REGEN] =
    "Set Health Regeneration _onOffActionParamOne_";
  app.saiLabels.comment.action[app.saiConstants.action.SET_ROOT] =
    "Set Rooted _onOffActionParamOne_";
  app.saiLabels.comment.action[app.saiConstants.action.SET_GO_FLAG] =
    "Set Gameobject Flag_getGoFlags_";
  app.saiLabels.comment.action[app.saiConstants.action.ADD_GO_FLAG] =
    "Add Gameobject Flag_getGoFlags_";
  app.saiLabels.comment.action[app.saiConstants.action.REMOVE_GO_FLAG] =
    "Remove Gameobject Flag_getGoFlags_";
  app.saiLabels.comment.action[app.saiConstants.action.SUMMON_CREATURE_GROUP] =
    "Summon Creature Group _actionParamOne_";
  app.saiLabels.comment.action[app.saiConstants.action.SET_POWER] =
    "Set _powerTypeActionParamOne_ To _actionParamTwo_";
  app.saiLabels.comment.action[app.saiConstants.action.ADD_POWER] =
    "Add _actionParamTwo_ _powerTypeActionParamOne_";
  app.saiLabels.comment.action[app.saiConstants.action.REMOVE_POWER] =
    "Remove _actionParamTwo_ _powerTypeActionParamOne_";
  app.saiLabels.comment.action[app.saiConstants.action.GAME_EVENT_STOP] =
    "Stop game event _actionParamTwo_";
  app.saiLabels.comment.action[app.saiConstants.action.GAME_EVENT_START] =
    "Start game event _actionParamTwo_";
  app.saiLabels.comment.action[app.saiConstants.action.START_CLOSEST_WAYPOINT] =
    "Pick Closest Waypoint _actionParamOne_ _actionParamTwo_ _actionParamThree_ _actionParamFour_ _actionParamFive_ _actionParamSix_";
})();
