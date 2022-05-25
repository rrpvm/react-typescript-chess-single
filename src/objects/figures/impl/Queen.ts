import { Players } from "../../../enums/Players";
import Pair from "../../../models/structure/Pair";
import BoardCell from "../../BoardCell";
import Figure from "../Figure";

export default class Queen extends Figure {
    public override get_logo_src(): string {
        return this._player === Players.PLAYER_BLACK ? 'https://www.symbols.com/images/symbol/1/3399_black-queen.png' : 'https://www.symbols.com/images/symbol/1/3405_white-queen.png';
    }
    public override canRelocate(src: BoardCell): Pair<number, number>[] {
        return [];
    }

}