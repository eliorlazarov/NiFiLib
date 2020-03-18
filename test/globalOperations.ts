import {AbstractObjectGenerator} from "./NiFiObjectGenerator/AbstractObjectGenerator";

const shortid = require("shortid");
const uuid = require('uuid/v4');

export class GlobalOperations {

    public static getRandNum(): number {
        return Math.floor(Math.random() * 10) + 1;
    }

    public static getRandString(): string {
        return shortid.generate();
    }

    public static getRandBoolean(): boolean {
        return Boolean(Math.round(Math.random()));
    }

    public static getRandId(): string {
        return uuid();
    }

    public static generateAttributes(generator: AbstractObjectGenerator) {
        let attributes = [];
        let count: number = GlobalOperations.getRandNum();
        for (let index = 0; index < count; index++) {
            attributes.push(generator.generate());
        }
        return attributes;

    }

}