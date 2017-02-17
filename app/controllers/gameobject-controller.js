'use strict';

module.exports = ({ TC_API }) => {
    return {
        getGameobjectByID(req, res) {

            const gameobject_id = req.params.gameobject_id;

            if (!gameobject_id) {
                return res.status(400).json({ message: 'Searching for a game object by id requires game object id' });
            }

            TC_API
                .search_gameobject(gameobject_id)
                .then(result => console.log(result) || res.json(result))
                .catch(err => res.status(500).json(err));
        }
    };
};