import Color from "../models/Color";
import Figure from "./Figure";

export default class Cell{
    private _xy;
    private _avaliable;
    private _figure;
    private _color;
    constructor(xy: number, avaliable: boolean, figure: Figure, color:Color) {
        this._xy = xy;
        this._avaliable = avaliable;
        this._figure = figure;
        this._color = color;
    }

    get xy(): number {
        return this._xy;
    }

    set xy(value: number) {
        this._xy = value;
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

    get color():Color {
        return this._color;
    }
    set color(value:Color) {
        this._color = value;
    }
}