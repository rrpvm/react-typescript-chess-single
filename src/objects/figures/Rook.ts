import { FigurePlayer } from "../../enums/FigurePlayer";
import Figure from "../Figure";

export default class Rook extends Figure {
    override get_logo_src(): string {
        return this._player === FigurePlayer.BLACK_PLAYER ? 'https://www.symbols.com/images/symbol/1/3400_black-rook.png' : 'https://www.symbols.com/images/symbol/1/3406_white-rook.png';
    }
}