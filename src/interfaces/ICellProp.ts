import Cell from "../objects/Cell";

export default interface ICellProp {
    cell: Cell;
    selected: boolean;
    on_click: (cell: Cell) => void;
}