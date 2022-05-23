import { FigurePlayer } from "../../enums/FigurePlayer";
import Cell from "../Cell";
import Figure from "../Figure";

export default class Pawn extends Figure {
    private _bFirstAction: boolean = true;

    override get_logo_src(): string {
        return this._player === FigurePlayer.BLACK_PLAYER ? 'https://www.symbols.com/images/symbol/1/3403_black-pawn.png' : 'https://www.symbols.com/images/symbol/3409_white-pawn.png';
    }
    override canLocate(from: Cell, to: Cell): boolean {
        if (from === to || from.y !== to.y) return false;
        const direction = this._player === FigurePlayer.WHITE_PLAYER ? -1 : 1;
        let bReturn = false;
        for(let i = 1; i <= (this._bFirstAction ? 2 : 1); i++){
            const bExpression = to.x - from.x === direction * i;
            if(bExpression)bReturn = true;
        }
        return bReturn;
    }
    doFirstMove() {
        this._bFirstAction = false;
    }
    get bFirstAction(): boolean {
        return this._bFirstAction;
    }
}