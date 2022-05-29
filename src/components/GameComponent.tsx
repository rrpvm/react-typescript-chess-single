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
        setBoard(gameBoard);
    }
    const handle_cell_click = (cell: BoardCell): void => {
        if (lastClickedCell === null) {//выбираем любую фигуру
            if (!(cell.figure instanceof EmptyFigure) && cell.figure.player === playerQueue) {
                setLastClickedCell(cell);
                boardState.showFigureMoves(cell);
            }
        }
        else {//если уже выбрана фигура
            if (cell === lastClickedCell) {
                setLastClickedCell(null);//убираем выделение
                boardState.showFigureMoves(null);
            }
            else if (cell.figure.player === lastClickedCell.figure.player) {//выбрали свою же клетку
                setLastClickedCell(cell);
                boardState.showFigureMoves(cell);
            }
            else {
                const moved: boolean = boardState.moveFigure(lastClickedCell, cell);
                if (moved) {
                    setPlayerQueue(playerQueue === Players.PLAYER_WHITE ? Players.PLAYER_BLACK : Players.PLAYER_WHITE);

                }
                setLastClickedCell(null);//can be in if(moved)
                boardState.showFigureMoves(null);//can be in if(moved)
            }

        }

    }
    useEffect(() => {
        initGameBoard();
    }, []);//mount
    const insertSideCells = () => {
        let array = Array.from(Array(8).keys());
        return (<>
            <div className="Cell white"></div>
            {

                array.map((number) => {
                    return <div key={number} className={"Cell white" + (boardState.isReversed ? " reversed" : "")}>{String.fromCharCode('A'.charCodeAt(0) + number)}</div>
                })
            }
            <div className="Cell white"></div>
        </>)
    }
    return (
        <div className="App">
            <div className={"Board" + (boardState.isReversed ? " reversed" : " ")}>
                {insertSideCells()}
                {
                    boardState.game_map.map((cellCol: BoardCell[], index) => {
                        return <React.Fragment key={index}>
                            <div className="Cell white">{index + 1}</div>
                            {cellCol.map((cellItem: BoardCell, _idx_) => {
                                return <CellComponent is_active={lastClickedCell === cellItem} cell={cellItem} key={_idx_} on_click={(cell: BoardCell) => { handle_cell_click(cell) }}></CellComponent>
                            })}
                            <div className="Cell white">{index + 1}</div>
                        </React.Fragment>
                    })
                }
                {insertSideCells()}
            </div>
        </div >
    );
}
export default GameComponent;