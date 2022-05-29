import { Players } from "../enums/Players";
import BoardCell from "./BoardCell";

export default class ChessPlayer {
    private _figureType: number = Players.PLAYER_NONE;
    private _figuresList: BoardCell[] = [];
    constructor(figureType: number, figureList: BoardCell[]) {
        this._figureType = figureType;
        this._figuresList = figureList;
    }
    get figureType(): number {
        return this._figureType;
    }
    get figuresList(): BoardCell[] {
        return this._figuresList;
    }
}