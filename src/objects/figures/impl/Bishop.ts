import { Players } from "../../../enums/Players";
import Pair from "../../../models/structure/Pair";
import BoardCell from "../../BoardCell";
import FigureDiagonalMovable from "../FigureDiagonalMovable";

export default class Bishop extends FigureDiagonalMovable {
    public override  get_logo_src(): string {
        return this._player === Players.PLAYER_BLACK ? 'https://www.symbols.com/images/symbol/1/3401_black-bishop.png' : 'https://www.symbols.com/images/symbol/1/3407_white-bishop.png';
    }
    public override  canRelocate(src: BoardCell): Pair<number, number>[] {
        let result: Pair<number, number>[] = [];
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const target = this._get_cell_function(i, j);
                if (target === src) continue;
                if (!this.isSuitableMove(src, target))continue; 
                    if (!this.isCollisionDetected(src, target)) result.push(new Pair(i, j));
                
            }
        }
        return result;
    }

}