import { Players } from "../../../enums/Players";
import Pair from "../../../models/structure/Pair";
import BoardCell from "../../BoardCell";
import Figure from "../Figure";

export default class King extends Figure {
    public override simulate(src: BoardCell): Pair<number, number>[] {
        const simulation: King = new King(src.figure.player, this._get_cell_function);
        return simulation.canRelocate(src);
    }
    public override  get_logo_src(): string {
        return this._player === Players.PLAYER_BLACK ? 'https://www.symbols.com/images/symbol/1/3398_black-king.png' : 'https://www.symbols.com/images/symbol/1/3404_white-king.png';
    }
    public override  canRelocate(src: BoardCell): Pair<number, number>[] {
        let result: Pair<number, number>[] = [];
        for (let i = -2; i < 2; i++) {
            for (let j = -2; j < 2; j++) {
                const _lx = Math.max(Math.min(src.xy.left - i, 7), 0);
                const _ly = Math.max(Math.min(src.xy.right - j, 7), 0);
                if (Math.sqrt(Math.pow(src.xy.left - _lx, 2) + Math.pow(src.xy.right - _ly, 2)) <= Math.sqrt(2)) {
                    if (!this.isFriendly(this._get_cell_function(_lx, _ly), src))
                        result.push(new Pair(_lx, _ly));
                }
            }
        }
        return result;
    }

}