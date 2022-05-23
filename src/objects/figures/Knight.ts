import { FigurePlayer } from "../../enums/FigurePlayer";
import Figure from "../Figure";

export default class Knight extends Figure {
    override get_logo_src(): string {
        return this._player === FigurePlayer.BLACK_PLAYER ? 'https://www.symbols.com/images/symbol/1/3402_black-knight.png' : 'https://www.symbols.com/images/symbol/1/3408_white-knight.png';
    }
}