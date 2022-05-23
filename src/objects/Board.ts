import Colors from "../enums/Colors";
import { FigurePlayer } from "../enums/FigurePlayer";
import Cell from "./Cell";
import Figure from "./Figure";
import Pawn from "./figures/Pawn";

export default class Board {
    private _mapCells : Cell[][] = [];
    private static readonly map_size : number = 8;//формальность
    initialize(){
        this._mapCells = [];
        for(let i = 0; i < Board.map_size; i++){
            let _row : Cell[] = [];
            for(let j = 0; j < Board.map_size; j++){
                _row.push(new Cell(i * 8 + j, false, new Figure(FigurePlayer.NONE), (i+j)%2 ===0 ? Colors.WHITE : Colors.BLACK));
            }
            this._mapCells.push(_row);
        }
        this.addFigures();
    }
    addFigures(){
        this.addPawns();
    }
    addPawns(){
        for (let i = 0; i < 8; i++) {
            this._mapCells[1][i].figure = new Pawn(FigurePlayer.BLACK_PLAYER);
            this._mapCells[6][i].figure = new Pawn(FigurePlayer.WHITE_PLAYER);
        }
    }    

    get mapCells(): Cell[][] {
        return this._mapCells;
    }

    set mapCells(value: Cell[][]) {
        this._mapCells = value;
    }
}