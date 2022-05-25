import { Players } from "../../enums/Players";
import { IFigureDirectable } from "../../interfaces/IFigureDirectable";
import BoardCell from "../BoardCell";
import Figure from "./Figure";

export default abstract class FigureDirectMovable extends Figure implements IFigureDirectable { //имплементация по прямой(вертикаль/горизонталь)
    protected isDirectMove(src: BoardCell, target: BoardCell): boolean {
        if (src.xy.left === target.xy.left || src.xy.right === target.xy.right) return true;
        return false;
    }
    protected isFriendly(src: BoardCell, target: BoardCell): boolean {
        return target.figure.player === src.figure.player;
    }
    NonEmptyCollision(src: BoardCell, target: BoardCell): boolean {
        const minX = Math.min(src.xy.left, target.xy.left);
        const maxX = Math.max(src.xy.left, target.xy.left);
        const minY = Math.min(src.xy.right, target.xy.right);
        const maxY = Math.max(src.xy.right, target.xy.right);
        let result = false;
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
        for (let x = minX; x <= maxX; x++) {//вертикаль
            if (x === src.xy.left || src.xy.right !== target.xy.right) continue;//только вертикаль + не берем себя в учет
            const cell = this._get_cell_function(x, src.xy.right);
            if (figure_validation(cell)) {
                result = true;
                break;
            }
        }
        for (let y = minY; y <= maxY; y++) {//горизонталь
            if (y === src.xy.right || src.xy.left !== target.xy.left) continue;//только горизонталь + не берем себя в учет
            const cell = this._get_cell_function(src.xy.left, y);
            if (figure_validation(cell)) {
                result = true;
                break;
            }
        }
        return result;
    }
}