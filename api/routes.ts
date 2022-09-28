'use strict';
import controller from './controller';
import { Express } from 'express';

export default function Routes(app: Express) {
    app.route('/about')
        .get(controller.about);
    app.route('/distance/:zipcode1/:zipcode2')
        .get(controller.getDistance);
};

