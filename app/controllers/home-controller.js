'use strict';

module.exports = ({}) => {
    return {
        getHomePage(req, res) {
           return res.render('./../index.html');
        }
    }
}