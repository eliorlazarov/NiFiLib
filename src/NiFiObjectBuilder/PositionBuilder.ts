import {Position} from "../NiFiObjects/Position";
import {PositionType} from "../NiFiObjects/Types/PositionType";


export class PositionBuilder implements PositionType {
    x: number;
    y: number;

    setX(x: number) {
        this.x = x;
        return this;
    }

    setY(y: number) {
        this.y = y;
        return this;
    }

    build() {
        return new Position(this);
    }
}