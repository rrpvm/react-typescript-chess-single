import Pair from "../models/structure/Pair";
import BoardCell from "./BoardCell";
import EmptyFigure from "./figures/impl/EmptyFigure";
import Pawn from "./figures/impl/Pawn";
import GameBoard from "./GameBoard";

export default class GameCoordinator {
    public updateMoveHints(board: GameBoard, player: BoardCell | null) {
        if (player === null) return;
        let all_possible_moves: Pair<number, number>[] = player.figure.canRelocate(player);
        all_possible_moves.forEach((item: Pair<number, number>) => {
            board.game_map[item.left][item.right].available = true;
        });
    }
    public moveFigure(board: GameBoard, from: BoardCell, to: BoardCell): boolean {
        if (!to.available) return false;
        if (from.figure instanceof Pawn) {
            from.figure.doFirstMove();
        }
        to.figure = from.figure;
        from.figure = new EmptyFigure(board.proxy);
        this.updateMoveHints(board, null);//очищаем подсказки
        return true;
    }
}