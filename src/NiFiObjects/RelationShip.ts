import {RelationShipType} from "./Types/RelationShipType";
import {RelationShipBuilder} from "../NiFiObjectBuilder/RelationShipBuilder";


export class RelationShip implements RelationShipType {
    name: string;
    description: string;
    autoTemplate: boolean;

    constructor(relationShipBuilder: RelationShipBuilder) {
        this.name = relationShipBuilder.name;
        this.description = relationShipBuilder.description;
        this.autoTemplate = relationShipBuilder.autoTemplate;
    }


    public getName(): string {
        return this.name;
    }

    public getDescription(): string {
        return this.description;
    }

    public getAutoTemplate(): boolean {
        return this.autoTemplate;
    }
}