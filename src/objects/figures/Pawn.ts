import { FigurePlayer } from "../../enums/FigurePlayer";
import Figure from "../Figure";

export default class Pawn extends Figure{
    get_logo_src(): string {
       return this._player === FigurePlayer.BLACK_PLAYER ? 'https://www.symbols.com/images/symbol/1/3403_black-pawn.png' : 'https://www.symbols.com/images/symbol/3409_white-pawn.png';
    }
}