import { Players } from "../../../enums/Players";
import Pair from "../../../models/structure/Pair";
import BoardCell from "../../BoardCell";
import Figure from "../Figure";
import Bishop from "./Bishop";
import Rook from "./Rook";

export default class Queen extends Figure {
    public static simulate(src: BoardCell): Pair<number, number>[] {
        const simulation: Queen = new Queen(src.figure.player, src.figure.proxy);
        return simulation.canRelocate(src);
    }
    public override get_logo_src(): string {
        return this._player === Players.PLAYER_BLACK ? 'https://www.symbols.com/images/symbol/1/3399_black-queen.png' : 'https://www.symbols.com/images/symbol/1/3405_white-queen.png';
    }
    public override canRelocate(src: BoardCell): Pair<number, number>[] {
        let result: Pair<number, number>[] = [];
        Bishop.simulate(src).forEach(item => result.push(item));
        Rook.simulate(src).forEach(item => result.push(item));;
        return result;
    }

}