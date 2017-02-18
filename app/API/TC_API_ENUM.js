/* Store Database Primary/Indexed keys for databases for proper Search and validating */

/* Possible support, version handling, Type validation, Database Join, Field Limitation */

database_enum ={  
"creature":{"entry":"id"},
"creature_addon":{"entry":""},
"creature_equip_template":{"entry":"CreatureID"},
"creature_formations":{"entry":""},
"creature_loot_template":{"entry":"Entry"},
"creature_model_info":{"entry":""},
"creature_onkill_reputation":{"entry":"creature_id"},
"creature_questender":{"entry":"id"},
"creature_questitem":{"entry":"id"},
"creature_queststarter":{"entry":"CreatureEntry"},
"creature_summon_groups":{"entry":"summonerId"},
"creature_template":{"entry":"entry"},
"creature_template_addon":{"entry":"entry"},
"creature_template_locale":{"entry":"entry"},
"creature_text":{"entry":"Entry"},
"npc_trainer":{"entry":"ID"},
"npc_vendor":{"entry":"entry"},  
"npc_text":{"entry":"ID"},  
"skinning_loot_template":{"entry":"Entry"},  
"pickpocketing_loot_template":{"entry":"Entry"},  
};

module.exports.database_enum = database_enum;