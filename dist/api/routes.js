'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = __importDefault(require("./controller"));
function Routes(app) {
    app.route('/about')
        .get(controller_1.default.about);
    app.route('/distance/:zipcode1/:zipcode2')
        .get(controller_1.default.getDistance);
}
exports.default = Routes;
;
