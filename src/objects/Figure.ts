import { FigurePlayer } from "../enums/FigurePlayer";
import IFigure from "../interfaces/IFigure";

export default class Figure implements IFigure{
    protected readonly _player : FigurePlayer;
    constructor(player : FigurePlayer){
        this._player = player;
    }
    public get_logo_src(): string {//empty 
        return '';
    }
}