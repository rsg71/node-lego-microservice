var request = require('request');
import { NextFunction, Request, Response } from 'express';

const apiKey = process.env.ZIPCODE_API_KEY || "";
const zipCodeURL = 'https://www.zipcodeapi.com/rest/';

const distance = {
    find: function (req: Request, res: Response, next: NextFunction) {
        request(`${zipCodeURL}${apiKey}/distance.json/${req.params.zipcode1}/${req.params.zipcode2}/mile`,
            function (error: Error, response: any, body: any) {
                if (!error && response.statusCode == 200) {
                    response = JSON.parse(body);
                    res.send(response);
                } else {
                    console.log(response.statusCode + response.body);
                    res.send({ distance: -1 });
                }
            });

    }
};

export default distance;