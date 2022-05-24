import BoardCell from "../objects/BoardCell";

export default interface ICellProp {
    cell: BoardCell;
    is_active: boolean;
    on_click: (cell: BoardCell) => void;
}