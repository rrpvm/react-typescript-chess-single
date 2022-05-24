import { Players } from "../../../enums/Players";
import Pair from "../../../models/structure/Pair";
import BoardCell from "../../BoardCell";
import Figure from "../Figure";

export default class Bishop extends Figure {
    public override  get_logo_src(): string {
        return this._player === Players.PLAYER_BLACK ? 'https://www.symbols.com/images/symbol/1/3401_black-bishop.png' : 'https://www.symbols.com/images/symbol/1/3407_white-bishop.png';
    }
    public override  canRelocate(src: BoardCell, target: BoardCell, get_cell_function: (pair: Pair<number, number>) => BoardCell): boolean {

        const quickCheck: boolean = !(target.xy.left === src.xy.left || target.xy.right === src.xy.right);//разные высоты + разные разные колонки
        if (!quickCheck || Math.abs(src.xy.left - target.xy.left) !== (Math.abs(src.xy.right - target.xy.right))) return false;

        return true;
    }

}