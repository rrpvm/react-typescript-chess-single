import Pair from "../../models/structure/Pair";
import BoardCell from "../BoardCell";
import Figure from "./Figure";
import { Players } from "../../enums/Players";
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
                const cell = this.proxy.get_cell_function(x, y);
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
    public override  canRelocate(src: BoardCell): Pair<number, number>[] {//стандарт для всех линейных перемещений без ограничений
        let result: Pair<number, number>[] = [];
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const target = this.proxy.get_cell_function(i, j);
                if (target === src) continue;
                if (!this.isSuitableMove(src, target)) continue;
                if (!this.isCollisionDetected(src, target)) result.push(new Pair(i, j));
            }
        }
        return result;
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