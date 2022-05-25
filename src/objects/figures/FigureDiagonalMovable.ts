import BoardCell from "../BoardCell";
import FigureLinearDirection from "./FigureLinearDirection";

export default abstract class FigureDiagonalMovable extends FigureLinearDirection {
    protected override isSuitableMove(src: BoardCell, target: BoardCell): boolean {
        return Math.abs(src.xy.left - target.xy.left)===Math.abs(src.xy.right-target.xy.right);
    }
}