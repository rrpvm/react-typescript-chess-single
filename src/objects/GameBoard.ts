import Colors from "../enums/Colors";
import { Players } from "../enums/Players";
import Pair from "../models/structure/Pair";
import BoardCell from "./BoardCell";
import Bishop from "./figures/impl/Bishop";
import EmptyFigure from "./figures/impl/EmptyFigure";
import King from "./figures/impl/King";
import Knight from "./figures/impl/Knight";
import Pawn from "./figures/impl/Pawn";
import Queen from "./figures/impl/Queen";
import Rook from "./figures/impl/Rook";

export default class GameBoard {
    private _game_map: BoardCell[][];
    private static readonly DEFAULT_CHESS_SIZE: number = 8;
    constructor() {
        this._game_map = [];
        this.initialize();
    }
    public initialize(): void {
        this._game_map = [];
        for (let col: number = 0; col < GameBoard.DEFAULT_CHESS_SIZE; ++col) {
            let row_array: BoardCell[] = [];
            for (let row: number = 0; row < GameBoard.DEFAULT_CHESS_SIZE; ++row) {
                row_array.push(new BoardCell((col + row) % 2 !== 0 ? Colors.BLACK : Colors.WHITE, new EmptyFigure(), new Pair(col, row), false));
            }
            this._game_map.push(row_array);
        }
        this.addPawns();
        this.addRooks();
        this.addKnights();
        this.addBishops();
        this.addQueens();
        this.addKings();
    }
    public get game_map(): BoardCell[][] {
        return this._game_map;
    }
    private addPawns(): void {
        for (let i = 0; i < GameBoard.DEFAULT_CHESS_SIZE; i++) {
            this._game_map[1][i].figure = new Pawn(Players.PLAYER_BLACK);
            this._game_map[6][i].figure = new Pawn(Players.PLAYER_WHITE);
        }
    }
    private addRooks(): void {
        this._game_map[0][0].figure = new Rook(Players.PLAYER_BLACK);
        this._game_map[0][7].figure = new Rook(Players.PLAYER_BLACK);
        this._game_map[7][0].figure = new Rook(Players.PLAYER_WHITE);
        this._game_map[7][7].figure = new Rook(Players.PLAYER_WHITE);
    }
    private addKnights(): void {
        this._game_map[0][1].figure = new Knight(Players.PLAYER_BLACK);
        this._game_map[0][6].figure = new Knight(Players.PLAYER_BLACK);
        this._game_map[7][1].figure = new Knight(Players.PLAYER_WHITE);
        this._game_map[7][6].figure = new Knight(Players.PLAYER_WHITE);
    }
    private addBishops(): void {
        this._game_map[0][2].figure = new Bishop(Players.PLAYER_BLACK);
        this._game_map[0][5].figure = new Bishop(Players.PLAYER_BLACK);
        this._game_map[7][2].figure = new Bishop(Players.PLAYER_WHITE);
        this._game_map[7][5].figure = new Bishop(Players.PLAYER_WHITE);
    }
    private addQueens(): void {
        this._game_map[0][3].figure = new Queen(Players.PLAYER_BLACK);
        this._game_map[7][3].figure = new Queen(Players.PLAYER_WHITE);
    }
    private addKings(): void {
        this._game_map[0][4].figure = new King(Players.PLAYER_BLACK);
        this._game_map[7][4].figure = new King(Players.PLAYER_WHITE);
    }
    public clone(): GameBoard {
        let clone: GameBoard = new GameBoard();
        clone._game_map = this._game_map;
        this._game_map = [];//test, can broke app(if ref)
        return clone;
    }
    public updateMoveHints(player: BoardCell | null) {
        for (let i = 0; i < GameBoard.DEFAULT_CHESS_SIZE; ++i)
            for (let j = 0; j < GameBoard.DEFAULT_CHESS_SIZE; ++j) {
                this._game_map[i][j].available = false;
                this._game_map[i][j]._bDebug = false;
            }
        if (player === null) return;
        let all_possible_moves: Pair<number, number>[] = player.figure.canRelocate(player, (pair: Pair<number, number>): BoardCell => { return this._game_map[pair.left][pair.right] });
        all_possible_moves.forEach((item: Pair<number, number>) => {
            this._game_map[item.left][item.right].available = true;
        });
    }
    public moveFigure(from: BoardCell, to: BoardCell): void {
        if (!to.available) return;
        to.figure = from.figure;
        from.figure = new EmptyFigure();
        this.updateMoveHints(null);//очищаем подсказки
    }
    public eatFigure() {
        
    }
}