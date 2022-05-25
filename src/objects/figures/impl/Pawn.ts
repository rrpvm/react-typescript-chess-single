import { Players } from "../../../enums/Players";
import Pair from "../../../models/structure/Pair";
import BoardCell from "../../BoardCell";
import Figure from "../Figure";

export default class Pawn extends Figure {
    public override simulate(src: BoardCell): Pair<number, number>[] {
        const simulation: Pawn = new Pawn(src.figure.player, this._get_cell_function);
        return simulation.canRelocate(src);
    }
    public override get_logo_src(): string {
        return this._player === Players.PLAYER_BLACK ? 'https://www.symbols.com/images/symbol/1/3403_black-pawn.png' : 'https://www.symbols.com/images/symbol/3409_white-pawn.png';
    }
    public override canRelocate(src: BoardCell): Pair<number, number>[] {
        let result: Pair<number, number>[] = [];
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                result.push(new Pair(i, j));
            }
        }
        return result;
    }

}