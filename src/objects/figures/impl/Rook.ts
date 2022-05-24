import { Players } from "../../../enums/Players";
import Pair from "../../../models/structure/Pair";
import BoardCell from "../../BoardCell";
import Figure from "../Figure";

export default class Rook extends Figure {
    public override get_logo_src(): string {
        return this._player === Players.PLAYER_BLACK ? 'https://www.symbols.com/images/symbol/1/3400_black-rook.png' : 'https://www.symbols.com/images/symbol/1/3406_white-rook.png';
    }
    public override canRelocate(src: BoardCell, get_cell_function: (pair: Pair<number, number>) => BoardCell): Pair<number, number>[] {
        let result: Pair<number, number>[] = [];
        const base_lambda_y = (i: number): boolean => {
            const y = src.xy.right;
            const cell: BoardCell = get_cell_function(new Pair(i, y));
            if (cell === src) return false;
            if (cell.figure.player === src.figure.player) {
                return true;//true if should break
            }
            else if (cell.figure.player === Players.PLAYER_NONE) {
                result.push(cell.xy);
                return false;
            }
            else {
                result.push(cell.xy);
                return true;//true if should break
            }
        }
        const base_lambda_x = (i: number): boolean => {
            const x = src.xy.left;
            const cell: BoardCell = get_cell_function(new Pair(x, i));
            if (cell === src) return false;
            if (cell.figure.player === src.figure.player) {
                return true;//true if should break
            }
            else if (cell.figure.player === Players.PLAYER_NONE) {
                result.push(cell.xy);
                return false;
            }
            else {
                result.push(cell.xy);
                return true;//true if should break
            }
        }
        for (let i = src.xy.left; i < 8; i++) {//сверху вниз
            if (base_lambda_y(i)) break;
        }
        for (let i = src.xy.left; i >= 0; i--) {//снизу вверх
            if (base_lambda_y(i)) break;
        }
        for (let i = src.xy.right; i < 8; i++) {//сверху вниз
            if (base_lambda_x(i)) break;
        }
        for (let i = src.xy.right; i >= 0; i--) {//снизу вверх
            if (base_lambda_x(i)) break;
        }
        return result;
    }

}