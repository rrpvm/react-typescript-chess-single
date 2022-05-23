import Color from "../Color";
import Colors from "./Colors";
import {FiguresTypes, figures_logo} from "./FiguresType";

export default class Figure {
    private _type: FiguresTypes = FiguresTypes.NONE;
    public logo: string = figures_logo[FiguresTypes.NONE];
    public color: Color = Colors.NONE;

    set type(value:FiguresTypes) {
        this._type = value;
        this.initFigure();
    }

    initFigure() {
        this.logo = figures_logo[this._type];
        this.color = this._type > 0 && this._type <= FiguresTypes.WHITE_KING ? Colors.WHITE : Colors.BLACK;
    }
}