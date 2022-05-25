import { Players } from "../../enums/Players";
import BoardCell from "../BoardCell";
import Figure from "./Figure";

export default abstract class FigureDiagonalMovable extends Figure {
    protected isDiagonalMove(src: BoardCell, target: BoardCell): boolean {
        return Math.abs(src.xy.left - target.xy.left)===Math.abs(src.xy.right-target.xy.right);
    }
    protected isFriendly(src: BoardCell, target: BoardCell): boolean {
        return target.figure.player === src.figure.player;
    }
    NonEmptyDiagonalCollision(src: BoardCell, target: BoardCell): boolean {
        const figure_validation = (cell: BoardCell): boolean => {
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
        const minX = Math.min(src.xy.left, target.xy.left);
        const maxX = Math.max(src.xy.left, target.xy.left);
        const minY = Math.min(src.xy.right, target.xy.right);
        const maxY = Math.max(src.xy.right, target.xy.right);
        let result = false;
        for (let x = minX; x <= maxX; x++) {//вертикаль
            for (let y = minY; y <= maxY; y++) {
                const cell = this._get_cell_function(x, y);
                if(!this.isDiagonalMove(src,cell))continue;
                if (cell === src) continue;
                if (figure_validation(cell)) {
                    result = true;
                    break;
                }
            }
        }
        return result;
    }
}