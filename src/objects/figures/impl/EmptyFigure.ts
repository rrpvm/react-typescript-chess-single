import { Players } from "../../../enums/Players";
import Pair from "../../../models/structure/Pair";
import BoardCell from "../../BoardCell";
import Figure from "../Figure";

export default class EmptyFigure extends Figure {
    public override  get_logo_src(): string {
        return "";
    }
    public override  canRelocate(src: BoardCell): Pair<number, number>[] {
        return [];
    }
    constructor(get_cell_function: (x: number, y: number) => BoardCell) {
        super(Players.PLAYER_NONE, get_cell_function);
    }
}