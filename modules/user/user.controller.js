'use strict';

var User = require('./user.model');

module.exports = function(method) {
    var methods = {
        index: index
    };

    return methods[method]();

    function index() {
        return function(req, res, next) {
            User.getUsers(req.query).then(function(users) {
                return res.json(users);
            });
        }
    }
};
