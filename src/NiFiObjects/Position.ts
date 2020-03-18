import {PositionType} from "./Types/PositionType";
import {PositionBuilder} from "../NiFiObjectBuilder/PositionBuilder";



export class Position implements PositionType {
    x: number;
    y: number;

    constructor(positionBuilder: PositionBuilder) {
        this.x = positionBuilder.x;
        this.y = positionBuilder.y;
    }

    public getX(): number {
        return this.x;
    }

    public getY(): number {
        return this.y;
    }


}