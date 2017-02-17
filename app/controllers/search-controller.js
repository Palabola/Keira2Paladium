'use strict';

module.exports = ({ TC_API }) => {
    return {
        getCreatureByID(req, res) {
            const creature_id = req.params.creature_id;

            if (!creature_id) {
                return res.status(400).json({ message: 'Searching for a creature by id requires creature id' });
            }

            TC_API
                .search_creature(creature_id)
                .then(result => res.json(result))
                .catch(error => res.status(500).json(error));
        },
        getCreatureByName(req, res) {
            const creature_name = req.params.creature_name;

            if (!creature_name) {
                return res.status(400).json({ message: 'Searching for a creature by name requires creature name' });
            }

            TC_API
                .search_creature_name(creature_name)
                .then(result => res.json(result));
        }
    }
}