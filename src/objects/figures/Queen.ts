import { FigurePlayer } from "../../enums/FigurePlayer";
import Figure from "../Figure";

export default class Quuen extends Figure {
    override get_logo_src(): string {
        return this._player === FigurePlayer.BLACK_PLAYER ? 'https://www.symbols.com/images/symbol/1/3399_black-queen.png' : 'https://www.symbols.com/images/symbol/1/3405_white-queen.png';
    }
}