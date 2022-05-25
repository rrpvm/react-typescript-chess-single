import { Players } from "../../../enums/Players";
import Pair from "../../../models/structure/Pair";
import BoardCell from "../../BoardCell";
import FigureDiagonalMovable from "../FigureDiagonalMovable";

export default class Bishop extends FigureDiagonalMovable {
    public override simulate(src: BoardCell): Pair<number, number>[] {
        const simulation: Bishop = new Bishop(src.figure.player, this._get_cell_function);
        return simulation.canRelocate(src);
    }
    public override  get_logo_src(): string {
        return this._player === Players.PLAYER_BLACK ? 'https://www.symbols.com/images/symbol/1/3401_black-bishop.png' : 'https://www.symbols.com/images/symbol/1/3407_white-bishop.png';
    }
}