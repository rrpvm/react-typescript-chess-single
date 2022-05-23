import Figure from "./enums/Figure"
import Color from "./Color"
export default class Cell{
    private _xy : number;
    private _figure : Figure;
    private _color : Color;

    constructor(xy: number, figure: Figure, color: Color) {
        this._xy = xy;
        this._figure = figure;
        this._color = color;
    }

    get xy(): number {
        return this._xy;
    }

    get figure(): Figure {
        return this._figure;
    }

    get color(): Color {
        return this._color;
    }
}