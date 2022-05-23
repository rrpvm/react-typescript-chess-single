import React, { useEffect } from "react";
import { useState } from "react";
import { FigurePlayer } from "../enums/FigurePlayer";
import Board from "../objects/Board";
import Cell from "../objects/Cell";
import Figure from "../objects/Figure";
import { FigureCopyFactory } from "../objects/FigureCopyFactory";
import Pawn from "../objects/figures/Pawn";
import CellComponent from "./CellComponent";


const BoardComponent: React.FC = () => {
    const [selectedFigureCell, setSelectedFigureCell] = useState<Cell | null>();//selectedFigure
    const [board, setBoard] = useState<Board>(new Board());
    const [playerMoveIdx, setPlayerMoveIdx] = useState<number>(FigurePlayer.WHITE_PLAYER);
    const on_cell_click = (cell: Cell) => {
        if (cell.figure.player !== FigurePlayer.NONE) {
            if (cell.figure.player === playerMoveIdx) {
                setSelectedFigureCell(cell);
                calculate_avaliable_actions(cell);
            }
            else {
                /*подсветка будущего выбора */
            }
        }
        else {
            if (cell.avaliable && selectedFigureCell) {
                swap_cells_figures(selectedFigureCell, cell);
            }
        }
    }
    const calculate_avaliable_actions = (player: Cell | null) => {
        for (let i = 0; i < 8; i++)
            for (let j = 0; j < 8; j++) {
                if (player === null) {
                    board.mapCells[i][j].avaliable = false;
                }
                else {
                    if (player.figure.player === playerMoveIdx) {
                        const target: Cell = board.mapCells[i][j];
                        target.avaliable = player.figure.canLocate(player, target);
                    }
                    else board.mapCells[i][j].avaliable = false;
                }
            }
    }
    const swap_cells_figures = (c1: Cell,/*src*/  c2: Cell/*target */) => { /*move cells */
        if (c1.figure instanceof Pawn) {
            c1.figure.doFirstMove();//отключаем 2й ход
        }
        const b: Figure = FigureCopyFactory(c1.figure);
        c1.figure = c2.figure;
        c2.figure = b;
        nextGameMoveTick();

    }
    const nextGameMoveTick = () => {
        if (playerMoveIdx === FigurePlayer.WHITE_PLAYER) {
            setPlayerMoveIdx(FigurePlayer.BLACK_PLAYER);
        }
        else setPlayerMoveIdx(FigurePlayer.WHITE_PLAYER);
    }
    const restart = (): void => {
        const _board = new Board();
        _board.initialize();
        setBoard(_board);
    }
    const updateBoard = () => {
        setBoard(board.copyBoard());
    }
    useEffect(() => {
        restart();
    }, []);
    useEffect(() => {
        if (selectedFigureCell !== undefined) {
            setSelectedFigureCell(null);
            calculate_avaliable_actions(selectedFigureCell);
            updateBoard();
        }
    }, [playerMoveIdx]);
    return (
        <div className="App">
            <div className="Board">
                {
                    board.mapCells.map((row: Cell[], index) => {
                        return (
                            <React.Fragment key={index}>
                                {
                                    row.map((item: Cell) => {
                                        return (
                                            <CellComponent
                                                selected={selectedFigureCell?.xy === item.xy}
                                                on_click={on_cell_click}
                                                cell={item}
                                                key={item.xy}></CellComponent>
                                        )
                                    })
                                }
                            </React.Fragment>
                        )
                    })
                }
            </div>
        </div>
    );
}
export default BoardComponent;