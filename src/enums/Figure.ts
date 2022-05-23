export default class Figure {
    private _logo: string = "";
    private _type: string = "";
    private _color:string = "";

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

    get logo(): string {
        return this._logo;
    }

    get type(): string {
        return this._type;
    }


    set logo(value: string) {
        this._logo = value;
    }

    set type(value: string) {
        this._type = value;
    }
}