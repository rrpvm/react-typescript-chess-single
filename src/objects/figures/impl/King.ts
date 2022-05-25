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
        return [];
    }

}