'use strict';

module.exports = ({ TC_API }) => {
    return {
        getSpellbyID(req, res) {
            const spell_id = req.params.spell_id;

            if(!spell_id) {
                return res.status(400).json({ message: 'Search for spell by id requires spell id' });
            }

            TC_API
                .search_spell(spell_id)
                .then(spell => res.json(spell))
                .catch(err => res.status(500).json(err));
        }
    }
}