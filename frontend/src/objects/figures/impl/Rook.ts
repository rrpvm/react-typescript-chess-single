import { Players } from "../../../enums/Players";
import Pair from "../../../models/structure/Pair";
import BoardCell from "../../BoardCell";
import FigureDirectMovable from "../FigureDirectMovable";

export default class Rook extends FigureDirectMovable {
    public static simulate(src: BoardCell): Pair<number, number>[] {
        const simulation: Rook = new Rook(src.figure.player, src.figure.proxy);
        return simulation.canRelocate(src);
    }
    public override get_logo_src(): string {
        return this._player === Players.PLAYER_BLACK ? 'https://www.symbols.com/images/symbol/1/3400_black-rook.png' : 'https://www.symbols.com/images/symbol/1/3406_white-rook.png';
    }
    public override canRelocate(src: BoardCell): Pair<number, number>[] {
        let result: Pair<number, number>[] = [];
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const target = this.proxy.get_cell_function(i, j);
                if (target === src) continue;
                if (this.isSuitableMove(src, target)) {
                    if (!this.isCollisionDetected(src, target)) result.push(new Pair(i, j));
                }
            }
        }
        return result;
    }
}