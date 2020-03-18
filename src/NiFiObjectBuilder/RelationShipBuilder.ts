import {RelationShipType} from "../NiFiObjects/Types/RelationShipType";
import {RelationShip} from "../NiFiObjects/RelationShip";


export class RelationShipBuilder implements RelationShipType {
    name: string;
    description: string;
    autoTemplate: boolean;

    setName(name : string ) {
        this.name = name;
        return this;
    }

    setDescription(description: string) {
        this.description = description;
        return this;
    }

    setAutoTemplate(autoTemplate: boolean) {
        this.autoTemplate= autoTemplate;
        return this;
    }


    build() {
        return new RelationShip(this);
    }
}