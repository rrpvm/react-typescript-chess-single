import { Players } from "../../../enums/Players";
import IFigureProxy from "../../../interfaces/IFigureProxy";
import Pair from "../../../models/structure/Pair";
import BoardCell from "../../BoardCell";
import Figure from "../Figure";

export default class EmptyFigure extends Figure {
    public static simulate(src: BoardCell): Pair<number, number>[] {
        const simulation: EmptyFigure = new EmptyFigure(src.figure.proxy);
        return simulation.canRelocate(src);
    }
    public override  get_logo_src(): string {
        return "";
    }
    public override  canRelocate(src: BoardCell): Pair<number, number>[] {
        return [];
    }
    constructor(proxy: IFigureProxy) {
        super(Players.PLAYER_NONE, proxy);
    }
}