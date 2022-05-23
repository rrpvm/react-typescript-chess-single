import { FigurePlayer } from "../../enums/FigurePlayer";
import Figure from "../Figure";

export default class King extends Figure{
    override get_logo_src(): string {
        return this._player === FigurePlayer.BLACK_PLAYER ? 'https://www.symbols.com/images/symbol/1/3398_black-king.png' : 'https://www.symbols.com/images/symbol/1/3404_white-king.png';
    }
}