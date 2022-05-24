import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import BoardCell from "../objects/BoardCell";
import EmptyFigure from "../objects/figures/impl/EmptyFigure";
import GameBoard from "../objects/GameBoard";
import { CellComponent } from "./CellComponent";

const GameComponent: React.FC = () => {
    const [boardState, setBoard] = useState<GameBoard>(new GameBoard());
    const [lastClickedCell, setLastClickedCell] = useState<BoardCell | null>(null);
    const initGameBoard = (): void => {
        const gameBoard: GameBoard = new GameBoard();
        gameBoard.initialize();
        setBoard(gameBoard);
    }
    const handle_cell_click = (cell: BoardCell): void => {
        if (lastClickedCell === null) {//выбираем любую фигуру
            if (!(cell.figure instanceof EmptyFigure)) {
                setLastClickedCell(cell);
                boardState.updateMoveHints(cell);
            }
        }
        else {//если уже выбрана фигура
            if (cell === lastClickedCell) {
                setLastClickedCell(null);//убираем выделение
                boardState.updateMoveHints(null);
            }
            else if (cell.figure.player === lastClickedCell.figure.player) {//выбрали свою же клетку
                setLastClickedCell(cell);
                boardState.updateMoveHints(cell);
            }
            else {
                boardState.moveFigure(lastClickedCell, cell);
                setLastClickedCell(null);
            }

        }

    }
    const refreshBoard = () => {
        const clone = boardState.clone();
        setBoard(clone);
    }
    useEffect(() => {
        initGameBoard();
    }, []);//mount

    return (
        <div className="App">
            <div className="Board">
                {
                    boardState.game_map.map((cellCol: BoardCell[], index) => {
                        return <React.Fragment key={index}>
                            {cellCol.map((cellItem: BoardCell, _idx_) => {
                                return <CellComponent is_active={lastClickedCell === cellItem} cell={cellItem} key={_idx_} on_click={(cell: BoardCell) => { handle_cell_click(cell) }}></CellComponent>
                            })}
                        </React.Fragment>
                    })
                }
            </div>
        </div >
    );
}
export default GameComponent;