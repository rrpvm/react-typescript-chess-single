import BoardCell from "../objects/BoardCell";
import ChessPlayer from "../objects/ChessPlayer";

export default interface IFigureProxy {
    get_cell_function: (x: number, y: number) => BoardCell;
    get_player_list: () => ChessPlayer[];
}