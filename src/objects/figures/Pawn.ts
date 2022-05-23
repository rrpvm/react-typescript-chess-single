import { FigurePlayer } from "../../enums/FigurePlayer";
import Cell from "../Cell";
import Figure from "../Figure";

export default class Pawn extends Figure {
    private _bFirstAction: boolean = true;

    override get_logo_src(): string {
        return this._player === FigurePlayer.BLACK_PLAYER ? 'https://www.symbols.com/images/symbol/1/3403_black-pawn.png' : 'https://www.symbols.com/images/symbol/3409_white-pawn.png';
    }
    override canLocate(from: Cell, to: Cell): boolean {
        if (from === to) return false;
        const direction = this._player === FigurePlayer.BLACK_PLAYER ? 1 : -1;
        const diff = from.xy - to.xy;
        const byMagnitude = Math.abs(diff);
        return diff % 8 === 0 && byMagnitude >= 8 && byMagnitude <= 8 * (this._bFirstAction ? 2 : 1) && diff !== direction * 8;;
    }
    doFirstMove() {
        this._bFirstAction = false;
    }
    get bFirstAction():boolean{
        return this._bFirstAction;
    }
}