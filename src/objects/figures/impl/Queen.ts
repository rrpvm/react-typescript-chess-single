import { Players } from "../../../enums/Players";
import Pair from "../../../models/structure/Pair";
import BoardCell from "../../BoardCell";
import FigureDirectMovable from "../FigureDirectMovable";
import Bishop from "./Bishop";
import Rook from "./Rook";

export default class Queen extends FigureDirectMovable {
    public override get_logo_src(): string {
        return this._player === Players.PLAYER_BLACK ? 'https://www.symbols.com/images/symbol/1/3399_black-queen.png' : 'https://www.symbols.com/images/symbol/1/3405_white-queen.png';
    }
    public override canRelocate(src: BoardCell): Pair<number, number>[] {
        let result: Pair<number, number>[] = [];
        const simulateBishop : Bishop = new Bishop(this._player, this._get_cell_function);
        const simulateRook : Rook = new Rook(this._player, this._get_cell_function);
        let first_arr = simulateBishop.canRelocate(src);
        let second_arr = simulateRook.canRelocate(src);
        first_arr.forEach((item)=>result.push(item));
        second_arr.forEach((item)=>result.push(item));
        return result;
    }

}