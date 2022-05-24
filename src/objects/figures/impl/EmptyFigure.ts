import { Players } from "../../../enums/Players";
import Pair from "../../../models/structure/Pair";
import BoardCell from "../../BoardCell";
import Figure from "../Figure";

export default class EmptyFigure extends Figure {
    public override  get_logo_src(): string {
        return "";
    }
    public override  canRelocate(src: BoardCell, target: BoardCell,get_cell_function: (pair: Pair<number, number>) => BoardCell): boolean {
        return false;
    }
    constructor() {
        super(Players.PLAYER_NONE);
    }
}