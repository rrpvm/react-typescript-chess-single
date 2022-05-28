import Color from "../models/Color";
import Figure from "./figures/Figure";
import Pair from "../models/structure/Pair";
export default class BoardCell {
    private readonly _color: Color;
    private _figure: Figure;
    private _xy: Pair<number, number>;
    private _available: boolean;
    private _reversed: boolean;

    constructor(color: Color, figure: Figure, xy: Pair<number, number>, available: boolean,reversed : boolean) {
        this._color = color;
        this._figure = figure;
        this._xy = xy;
        this._available = available;
        this._reversed = reversed;
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
    get reversed(): boolean {
        return this._reversed;
    }
    set reversed(value: boolean) {
        this._reversed = value;
    }
}