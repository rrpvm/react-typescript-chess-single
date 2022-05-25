import { Players } from "../../../enums/Players";
import Pair from "../../../models/structure/Pair";
import BoardCell from "../../BoardCell";
import Figure from "../Figure";

export default class Bishop extends Figure {
    public override  get_logo_src(): string {
        return this._player === Players.PLAYER_BLACK ? 'https://www.symbols.com/images/symbol/1/3401_black-bishop.png' : 'https://www.symbols.com/images/symbol/1/3407_white-bishop.png';
    }
    public override  canRelocate(src: BoardCell): Pair<number, number>[] {
        let result: Pair<number, number>[] = [];
        return result;
    }

}