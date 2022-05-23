import Cell from "../objects/Cell";

export default interface IFigure {
    get_logo_src(): string;
    canLocate(from: Cell, to:Cell): boolean;
}