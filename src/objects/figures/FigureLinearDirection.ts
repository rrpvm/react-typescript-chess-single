import { Players } from "../../enums/Players";
import BoardCell from "../BoardCell";
import Figure from "./Figure";

export default abstract class FigureLinearDirection extends Figure {
    protected abstract isSuitableMove(src: BoardCell, target: BoardCell): boolean;
    protected isCollisionDetected(src: BoardCell, target: BoardCell): boolean {
        const minX = Math.min(src.xy.left, target.xy.left);
        const maxX = Math.max(src.xy.left, target.xy.left);
        const minY = Math.min(src.xy.right, target.xy.right);
        const maxY = Math.max(src.xy.right, target.xy.right);
        let isCollsion = false;
        for (let x = minX; x <= maxX; x++) {//вертикаль
            for (let y = minY; y <= maxY; y++) {
                const cell = this._get_cell_function(x, y);
                if (cell === src) continue;
                if (!this.isSuitableMove(src, cell)) continue;
                if (this.isNotAffordableFigure(src, target, cell)) {
                    isCollsion = true;
                    break;
                }
            }
        }
        return isCollsion;
    }
    private isNotAffordableFigure = (src: BoardCell, target: BoardCell, cell: BoardCell): boolean => {
        if (cell.figure.player !== Players.PLAYER_NONE) {
            if (cell.figure.player === src.figure.player) {
                return true;
            }
            else if (cell !== target) {
                return true;
            }//враг,который раньше
        }
        return false;
    }
}