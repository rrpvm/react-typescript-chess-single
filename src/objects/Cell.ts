import Color from "../models/Color";
import Figure from "./Figure";

export default class Cell {
    private _x;
    private _y;
    private _avaliable;
    private _figure;
    private _color;
    constructor(x: number, y: number, avaliable: boolean, figure: Figure, color: Color) {
        this._x = x;
        this._y = y;
        this._avaliable = avaliable;
        this._figure = figure;
        this._color = color;
    }

    get x(): number {
        return this._x;
    }

    set x(value: number) {
        this._x = value;
    }
    get y(): number {
        return this._y;
    }

    set y(value: number) {
        this._y = value;
    }

    get avaliable(): boolean {
        return this._avaliable;
    }

    set avaliable(value: boolean) {
        this._avaliable = value;
    }

    get figure(): Figure {
        return this._figure;
    }

    set figure(value: Figure) {
        this._figure = value;
    }

    get color(): Color {
        return this._color;
    }
    set color(value: Color) {
        this._color = value;
    }
}