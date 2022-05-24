import { Players } from "../../../enums/Players";
import Pair from "../../../models/structure/Pair";
import BoardCell from "../../BoardCell";
import Figure from "../Figure";

export default class Bishop extends Figure {
    public override  get_logo_src(): string {
        return this._player === Players.PLAYER_BLACK ? 'https://www.symbols.com/images/symbol/1/3401_black-bishop.png' : 'https://www.symbols.com/images/symbol/1/3407_white-bishop.png';
    }
    public override  canRelocate(src: BoardCell, get_cell_function: (pair: Pair<number, number>) => BoardCell): Pair<number, number>[] {
        let result: Pair<number, number>[] = [];
       /* for (let i = src.xy.left + 1; i < 8; i++) {
            const x =Math.min(Math.max(src.xy.right + src.xy.left - i, 0), 7);
            const cell: BoardCell = get_cell_function(new Pair(i, x));
            result.push(cell.xy);
        }
        for (let i = src.xy.left - 1; i >= 0; i--) {
            const x = Math.min(Math.max(src.xy.right + src.xy.left - i, 0), 7);
            const cell: BoardCell = get_cell_function(new Pair(i, x));
            console.log(cell);
            result.push(cell.xy);
        }*/
        return result;
    }

}