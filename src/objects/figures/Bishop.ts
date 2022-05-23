import { FigurePlayer } from "../../enums/FigurePlayer";
import Figure from "../Figure";

export default class Bishop extends Figure {
    override get_logo_src(): string {
        return this._player === FigurePlayer.BLACK_PLAYER ? 'https://www.symbols.com/images/symbol/1/3401_black-bishop.png' : 'https://www.symbols.com/images/symbol/1/3407_white-bishop.png';
    }
}