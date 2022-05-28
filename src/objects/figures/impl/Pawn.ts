import { Players } from "../../../enums/Players";
import Pair from "../../../models/structure/Pair";
import BoardCell from "../../BoardCell";
import Figure from "../Figure";

export default class Pawn extends Figure {
    private first_move = true;
    public override simulate(src: BoardCell): Pair<number, number>[] {
        const simulation: Pawn = new Pawn(src.figure.player, this._get_cell_function);
        return simulation.canRelocate(src);
    }
    public override get_logo_src(): string {
        return this._player === Players.PLAYER_BLACK ? 'https://www.symbols.com/images/symbol/1/3403_black-pawn.png' : 'https://www.symbols.com/images/symbol/3409_white-pawn.png';
    }
    public override canRelocate(src: BoardCell): Pair<number, number>[] {
        let result: Pair<number, number>[] = [];
        const direction = this.player === Players.PLAYER_BLACK ? 1 : -1;
        for (let i = 1; i <= 2; i++) {
            if (i === 2 && !this.first_move) continue;
            const vertical = src.xy.left + i * direction;
            if (i === 1) {
                const quickAdd = (sideEnemy: BoardCell) => {
                    if (sideEnemy.figure.player !== src.figure.player && sideEnemy.figure.player !== Players.PLAYER_NONE) {
                        result.push(sideEnemy.xy);
                    }
                }
                const sideEnemyLeft: BoardCell = this._get_cell_function(vertical, Math.min(src.xy.right + 1, 7));
                const sideEnemyRight: BoardCell = this._get_cell_function(vertical, Math.max(src.xy.right - 1, 0));
                quickAdd(sideEnemyLeft);
                quickAdd(sideEnemyRight);
            }
            const cell: BoardCell = this._get_cell_function(vertical, src.xy.right);
            if (cell.figure.player !== Players.PLAYER_NONE) continue;
            else result.push(cell.xy);
        }
        return result;
    }

}