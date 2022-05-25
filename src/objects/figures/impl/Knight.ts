import { Players } from "../../../enums/Players";
import Pair from "../../../models/structure/Pair";
import BoardCell from "../../BoardCell";
import Figure from "../Figure";

export default class Knight extends Figure {
    public override get_logo_src(): string {
        return this._player === Players.PLAYER_BLACK ? 'https://www.symbols.com/images/symbol/1/3402_black-knight.png' : 'https://www.symbols.com/images/symbol/1/3408_white-knight.png';
    }
    public override  canRelocate(src: BoardCell): Pair<number, number>[] {
        let result: Pair<number, number>[] = [];
        for (let i = -3; i < 3; i++) {
            for (let j = -3; j < 3; j++) {
                const _lx = Math.max(Math.min(src.xy.left - i, 7), 0);
                const _ly = Math.max(Math.min(src.xy.right - j, 7), 0);
                if (Math.sqrt(Math.pow(src.xy.left - _lx, 2) + Math.pow(src.xy.right - _ly, 2)) === Math.sqrt(5)) {
                    if (!this.isFriendly(this._get_cell_function(_lx, _ly), src))
                        result.push(new Pair(_lx, _ly));
                }
            }
        }
        return result;
    }

}