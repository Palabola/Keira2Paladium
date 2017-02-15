'use strict';

module.exports = ({ /* getting all the dependencies here but only use those that we need for this particular controller */ }) => {
    return {
        getHomePage(req, res) {
           return res.render('./../index.html');
        }
    }
}