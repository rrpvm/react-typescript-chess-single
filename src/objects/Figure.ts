import { FigurePlayer } from "../enums/FigurePlayer";
import IFigure from "../interfaces/IFigure";
import Cell from "./Cell";

export default class Figure implements IFigure {
    protected readonly _player: FigurePlayer;
    constructor(player: FigurePlayer) {
        this._player = player;
    }
    canLocate(from: Cell, to: Cell): boolean {
        return false;
    }
    public get_logo_src(): string {//empty 
        return '';
    }
    get player(): FigurePlayer {
        return this._player;
    }
}