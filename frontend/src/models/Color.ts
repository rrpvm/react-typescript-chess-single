export default class Color{
    private _hex : string;
    constructor(hex : string){
        this._hex = hex;
    }

    get hex(): string {
        return this._hex;
    }
}