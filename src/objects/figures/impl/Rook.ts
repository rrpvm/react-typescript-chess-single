import { Players } from "../../../enums/Players";
import Pair from "../../../models/structure/Pair";
import BoardCell from "../../BoardCell";
import Figure from "../Figure";

export default class Rook extends Figure {
    public override get_logo_src(): string {
        return this._player === Players.PLAYER_BLACK ? 'https://www.symbols.com/images/symbol/1/3400_black-rook.png' : 'https://www.symbols.com/images/symbol/1/3406_white-rook.png';
    }
    public override canRelocate(src: BoardCell, target: BoardCell, get_cell_function: (pair: Pair<number, number>) => BoardCell): boolean {
        const bQuickCheck = ((src.xy.left === target.xy.left) || (src.xy.right === target.xy.right));
        if (!bQuickCheck) return false;
        let bReturn: boolean = true;
        if (target.xy.right === src.xy.right) {//если равна горизонталь - мы смотрим вертикаль
            const diff = src.xy.left - target.xy.left;
            for (let i = src.xy.left; diff > 0 ? i >= target.xy.left : i <= target.xy.left; diff > 0 ? i-- : i++) {
                if (i === src.xy.left) continue;
                const possible_friendly_figure:BoardCell = get_cell_function(new Pair(i, target.xy.right));
                if (possible_friendly_figure.figure.player === src.figure.player) {
                    bReturn = false;//найдено препядствие
                    break;
                }
            }
        }
        else {//смотрим горизонталь
            const diff = src.xy.right - target.xy.right;
            for (let i = src.xy.right; diff > 0 ? i >= target.xy.right : i <= target.xy.right; diff > 0 ? i-- : i++) {
                if (i === src.xy.right) continue;
                const possible_friendly_figure:BoardCell = get_cell_function(new Pair(target.xy.left, i));
                if (possible_friendly_figure.figure.player === src.figure.player) {
                    bReturn = false;//найдено препядствие
                    break;
                }
            }
        }
        return bReturn;
    }

}