import { Players } from "../../../enums/Players";
import Pair from "../../../models/structure/Pair";
import BoardCell from "../../BoardCell";
import Figure from "../Figure";

export default class Knight extends Figure {
    public override get_logo_src(): string {
        return this._player === Players.PLAYER_BLACK ? 'https://www.symbols.com/images/symbol/1/3402_black-knight.png' : 'https://www.symbols.com/images/symbol/1/3408_white-knight.png';
    }
    public override  canRelocate(src: BoardCell): Pair<number, number>[] {
        return [];
    }

}