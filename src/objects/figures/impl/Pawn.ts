import { Players } from "../../../enums/Players";
import Pair from "../../../models/structure/Pair";
import BoardCell from "../../BoardCell";
import Figure from "../Figure";

export default class Pawn extends Figure {
    public override get_logo_src(): string {
        return this._player === Players.PLAYER_BLACK ? 'https://www.symbols.com/images/symbol/1/3403_black-pawn.png' : 'https://www.symbols.com/images/symbol/3409_white-pawn.png';
    }
    public override canRelocate(src: BoardCell, target: BoardCell,get_cell_function: (pair: Pair<number, number>) => BoardCell): boolean {
        if (src === undefined || target === undefined || src === null || target === null || src === target) {
            return false;
        }
        
        return true;
    }

}