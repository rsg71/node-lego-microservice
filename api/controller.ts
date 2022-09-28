import properties from '../package.json';
const distance = require('../service/distance');

import { Request, Response } from "express";

const controllers = {
    about: function (req: Request, res: Response) {
        const aboutInfo = {
            name: properties.name,
            version: properties.version
        }
        res.json(aboutInfo);
    },
    getDistance: function (req: Request, res: Response) {
        distance.find(req, res, function (err: Error, dist: Distance) {
            if (err)
                res.send(err);
            res.json(dist);
        });
    },
};


interface Distance {
    distance: Number;
}

export default controllers;