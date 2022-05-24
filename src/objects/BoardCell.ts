import Color from "../models/Color";
import Figure from "./figures/Figure";
import Pair from "../models/structure/Pair";
export default class BoardCell {
    private readonly _color: Color;
    private _figure: Figure;
    private _xy: Pair<number, number>;
    private _available: boolean;


    public _bDebug: boolean = false;

    constructor(color: Color, figure: Figure, xy: Pair<number, number>, available: boolean) {
        this._color = color;
        this._figure = figure;
        this._xy = xy;
        this._available = available;
    }
    get color(): Color {
        return this._color;
    }
    get figure(): Figure {
        return this._figure;
    }
    set figure(figure: Figure) {
        this._figure = figure;
    }
    get xy(): Pair<number, number> {
        return this._xy;
    }
    get available(): boolean {
        return this._available;
    }
    set available(value: boolean) {
        this._available = value;
    }
}