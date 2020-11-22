"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Friends = void 0;
const uuidv4_1 = require("uuidv4");
class Friends {
    constructor(props, id) {
        Object.assign(this, props);
        if (!id) {
            this.id = uuidv4_1.uuid();
        }
    }
}
exports.Friends = Friends;
