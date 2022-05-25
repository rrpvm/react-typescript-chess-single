import BoardCell from "../objects/BoardCell";

export interface IFigureDirectable {
    NonEmptyCollision(src: BoardCell, target: BoardCell): boolean;
}