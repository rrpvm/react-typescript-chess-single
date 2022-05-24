import { Players } from "../../../enums/Players";
import Pair from "../../../models/structure/Pair";
import BoardCell from "../../BoardCell";
import Figure from "../Figure";

export default class Knight extends Figure {
    public override get_logo_src(): string {
        return this._player === Players.PLAYER_BLACK ? 'https://www.symbols.com/images/symbol/1/3402_black-knight.png' : 'https://www.symbols.com/images/symbol/1/3408_white-knight.png';
    }
    public override  canRelocate(src: BoardCell, target: BoardCell,get_cell_function: (pair: Pair<number, number>) => BoardCell): boolean {
        if (src === undefined || target === undefined || src === null || target === null || src === target) {
            return false;
        }
        return Math.sqrt(Math.pow(src.xy.left - target.xy.left, 2) + Math.pow(src.xy.right - target.xy.right, 2)) === 2.23606797749979; //sqrt(5)
    }
    
}