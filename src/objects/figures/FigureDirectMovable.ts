import BoardCell from "../BoardCell";
import FigureLinearDirection from "./FigureLinearDirection";

export default abstract class FigureDirectMovable extends FigureLinearDirection { 
    protected override isSuitableMove(src: BoardCell, target: BoardCell): boolean {
        return src.xy.left === target.xy.left || src.xy.right === target.xy.right;
    }
}