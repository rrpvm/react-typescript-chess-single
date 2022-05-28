import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Players } from "../enums/Players";
import { CellComponent } from "./CellComponent";
import BoardCell from "../objects/BoardCell";
import EmptyFigure from "../objects/figures/impl/EmptyFigure";
import GameBoard from "../objects/GameBoard";

const GameComponent: React.FC = () => {
    const [boardState, setBoard] = useState<GameBoard>(new GameBoard(false));
    const [lastClickedCell, setLastClickedCell] = useState<BoardCell | null>(null);
    const [playerQueue, setPlayerQueue] = useState<number>(Players.PLAYER_WHITE);
    const initGameBoard = (): void => {
        const gameBoard: GameBoard = new GameBoard(false);
        gameBoard.initialize();
        setBoard(gameBoard);
    }
    const handle_cell_click = (cell: BoardCell): void => {
        if (lastClickedCell === null) {//выбираем любую фигуру
            if (!(cell.figure instanceof EmptyFigure) && cell.figure.player === playerQueue) {
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
                const moved: boolean = boardState.moveFigure(lastClickedCell, cell);
                if (moved) {
                    setPlayerQueue(playerQueue === Players.PLAYER_WHITE ? Players.PLAYER_BLACK : Players.PLAYER_WHITE);

                }
                setLastClickedCell(null);//can be in if(moved)
                boardState.updateMoveHints(null);//can be in if(moved)
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
            <div className={"Board" + (boardState.isReversed ? " reversed" : " ")}>
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