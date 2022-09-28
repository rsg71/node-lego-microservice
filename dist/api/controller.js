"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const properties = require('../package.json');
const distance = require('../service/distance');
const controllers = {
    about: function (req, res) {
        const aboutInfo = {
            name: properties.name,
            version: properties.version
        };
        res.json(aboutInfo);
    },
    getDistance: function (req, res) {
        distance.find(req, res, function (err, dist) {
            if (err)
                res.send(err);
            res.json(dist);
        });
    },
};
exports.default = controllers;
