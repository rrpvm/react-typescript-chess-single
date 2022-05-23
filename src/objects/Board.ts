import Colors from "../enums/Colors";
import { FigurePlayer } from "../enums/FigurePlayer";
import Cell from "./Cell";
import Figure from "./Figure";
import Bishop from "./figures/Bishop";
import King from "./figures/King";
import Knight from "./figures/Knight";
import Pawn from "./figures/Pawn";
import Quuen from "./figures/Queen";
import Rook from "./figures/Rook";

export default class Board {
    private _mapCells: Cell[][] = [];
    private static readonly map_size: number = 8;//формальность
    initialize() {
        this._mapCells = [];
        for (let i = 0; i < Board.map_size; i++) {
            let _row: Cell[] = [];
            for (let j = 0; j < Board.map_size; j++) {
                _row.push(new Cell(i,j, false, new Figure(FigurePlayer.NONE), (i + j) % 2 === 0 ? Colors.WHITE : Colors.BLACK));
            }
            this._mapCells.push(_row);
        }
        this.addFigures();
    }
    addFigures() {
        this.addPawns();
        this.addRooks();
        this.addKnights();
        this.addBishops();
        this.addQueens();
        this.addKings();
    }
    addPawns() {
        for (let i = 0; i < 8; i++) {
            this._mapCells[1][i].figure = new Pawn(FigurePlayer.BLACK_PLAYER);
            this._mapCells[6][i].figure = new Pawn(FigurePlayer.WHITE_PLAYER);
        }
    }
    addRooks() {
        this._mapCells[0][0].figure = new Rook(FigurePlayer.BLACK_PLAYER);
        this._mapCells[0][7].figure = new Rook(FigurePlayer.BLACK_PLAYER);
        this._mapCells[7][0].figure = new Rook(FigurePlayer.WHITE_PLAYER);
        this._mapCells[7][7].figure = new Rook(FigurePlayer.WHITE_PLAYER);
    }
    addKnights() {
        this._mapCells[0][1].figure = new Knight(FigurePlayer.BLACK_PLAYER);
        this._mapCells[0][6].figure = new Knight(FigurePlayer.BLACK_PLAYER);
        this._mapCells[7][1].figure = new Knight(FigurePlayer.WHITE_PLAYER);
        this._mapCells[7][6].figure = new Knight(FigurePlayer.WHITE_PLAYER);
    }
    addBishops() {
        this._mapCells[0][2].figure = new Bishop(FigurePlayer.BLACK_PLAYER);
        this._mapCells[0][5].figure = new Bishop(FigurePlayer.BLACK_PLAYER);
        this._mapCells[7][2].figure = new Bishop(FigurePlayer.WHITE_PLAYER);
        this._mapCells[7][5].figure = new Bishop(FigurePlayer.WHITE_PLAYER);
    }
    addQueens() {
        this._mapCells[0][3].figure = new Quuen(FigurePlayer.BLACK_PLAYER);
        this._mapCells[7][3].figure = new Quuen(FigurePlayer.WHITE_PLAYER);
    }
    addKings() {
        this._mapCells[0][4].figure = new King(FigurePlayer.BLACK_PLAYER);
        this._mapCells[7][4].figure = new King(FigurePlayer.WHITE_PLAYER);
    }
    get mapCells(): Cell[][] {
        return this._mapCells;
    }

    set mapCells(value: Cell[][]) {
        this._mapCells = value;
    }
    public copyBoard() : Board{
        const _newBoard = new Board();
        _newBoard._mapCells = this._mapCells;
        return _newBoard;
    }
}