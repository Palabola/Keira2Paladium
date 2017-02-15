'use strict';

module.exports = ({ /* TC_API no need to use it here but you still have access to it */ }) => {
    return {
        getHomePage(req, res) {
           return res.render('./../index.html');
        }
    }
}