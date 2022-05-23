import React, {useEffect, useState} from 'react';
import './App.css';
import Board from "./Board";
import {CellComponent} from "./components/CellComponent"

function App() {
    const [gameBoard, setGameBoard] = useState<Board>(new Board());
    const res = () => {
        const gameBoard = new Board();
        gameBoard.initBoard();
        setGameBoard(gameBoard);
    }
    useEffect(() => {
        res();
    }, []);
    return (
        <div className="App">
            <div className="Board">
            {
                gameBoard.cells.map(
                    (row, index) =>
                        <React.Fragment key={index}>
                            {
                                row.map((_cell) => {
                                    return (
                                       <CellComponent cell={_cell} key={_cell.xy}></CellComponent>
                                    )
                                })
                            }
                        </React.Fragment>
                )
            }
            </div>
        </div>
    );
}

export default App;
