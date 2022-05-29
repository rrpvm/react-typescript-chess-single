import Colors from "../enums/Colors";
import { Players } from "../enums/Players";
import IFigureProxy from "../interfaces/IFigureProxy";
import Pair from "../models/structure/Pair";
import BoardCell from "./BoardCell";
import ChessPlayer from "./ChessPlayer";
import Bishop from "./figures/impl/Bishop";
import EmptyFigure from "./figures/impl/EmptyFigure";
import King from "./figures/impl/King";
import Knight from "./figures/impl/Knight";
import Pawn from "./figures/impl/Pawn";
import Queen from "./figures/impl/Queen";
import Rook from "./figures/impl/Rook";
import GameCoordinator from "./GameCoordinator";

export default class GameBoard {
    public readonly proxy: IFigureProxy = {
        get_cell_function: (x: number, y: number) => { return this._game_map[x][y] },
        get_player_list: () => { return this._players }
    };
    private static readonly DEFAULT_CHESS_SIZE: number = 8;
    private _game_map: BoardCell[][];
    private _players: ChessPlayer[];
    private _reverseBoard: boolean;
    private _coordinator: GameCoordinator;
    constructor(bReverse: boolean) {
        this._reverseBoard = bReverse;
        this._coordinator = new GameCoordinator();
        this._game_map = [];
        this._players = [new ChessPlayer(Players.PLAYER_NONE, []), new ChessPlayer(Players.PLAYER_WHITE, []), new ChessPlayer(Players.PLAYER_BLACK, [])];//if delete -> ts calls warnings(errors)
        this.initializeGameMap();
        this.initializePlayers();
    }
    public initializeGameMap(): void {
        this._game_map = [];
        this.initializeCells();
        this.addPawns();
        this.addRooks();
        this.addKnights();
        this.addBishops();
        this.addQueens();
        this.addKings();
    }
    public initializeCells(): void {
        for (let col: number = 0; col < GameBoard.DEFAULT_CHESS_SIZE; ++col) {
            let row_array: BoardCell[] = [];
            for (let row: number = 0; row < GameBoard.DEFAULT_CHESS_SIZE; ++row) {
                row_array.push(new BoardCell((col + row) % 2 !== 0 ? Colors.BLACK : Colors.WHITE, new EmptyFigure(this.proxy), new Pair(col, row), false, this._reverseBoard));
            }
            this._game_map.push(row_array);
        }
    }
    public initializePlayers(): void {
        this._players = [new ChessPlayer(Players.PLAYER_NONE, []), new ChessPlayer(Players.PLAYER_WHITE, []), new ChessPlayer(Players.PLAYER_BLACK, [])];
        for (let col: number = 0; col < GameBoard.DEFAULT_CHESS_SIZE; ++col) {
            for (let row: number = 0; row < GameBoard.DEFAULT_CHESS_SIZE; ++row) {
                this._players[this._game_map[col][row].figure.player].figuresList.push(this._game_map[col][row]);//добавялем по феншую
            }
        }
    }
    private addPawns(): void {
        for (let i = 0; i < GameBoard.DEFAULT_CHESS_SIZE; i++) {
            this._game_map[1][i].figure = new Pawn(Players.PLAYER_BLACK, this.proxy);
            this._game_map[6][i].figure = new Pawn(Players.PLAYER_WHITE, this.proxy);
        }
    }
    private addRooks(): void {
        this._game_map[0][0].figure = new Rook(Players.PLAYER_BLACK, this.proxy);
        this._game_map[0][7].figure = new Rook(Players.PLAYER_BLACK, this.proxy);
        this._game_map[7][0].figure = new Rook(Players.PLAYER_WHITE, this.proxy);
        this._game_map[7][7].figure = new Rook(Players.PLAYER_WHITE, this.proxy);
    }
    private addKnights(): void {
        this._game_map[0][1].figure = new Knight(Players.PLAYER_BLACK, this.proxy);
        this._game_map[0][6].figure = new Knight(Players.PLAYER_BLACK, this.proxy);
        this._game_map[7][1].figure = new Knight(Players.PLAYER_WHITE, this.proxy);
        this._game_map[7][6].figure = new Knight(Players.PLAYER_WHITE, this.proxy);
    }
    private addBishops(): void {

        this._game_map[0][2].figure = new Bishop(Players.PLAYER_BLACK, this.proxy);
        this._game_map[0][5].figure = new Bishop(Players.PLAYER_BLACK, this.proxy);
        this._game_map[7][2].figure = new Bishop(Players.PLAYER_WHITE, this.proxy);
        this._game_map[7][5].figure = new Bishop(Players.PLAYER_WHITE, this.proxy);
    }
    private addQueens(): void {
        this._game_map[0][3].figure = new Queen(Players.PLAYER_BLACK, this.proxy);
        this._game_map[7][3].figure = new Queen(Players.PLAYER_WHITE, this.proxy);
    }
    private addKings(): void {
        this._game_map[0][4].figure = new King(Players.PLAYER_BLACK, this.proxy);
        this._game_map[7][4].figure = new King(Players.PLAYER_WHITE, this.proxy);
    }
    public get_cell_function(x: number, y: number): BoardCell {
        return this._game_map[x][y];
    }
    public clone(): GameBoard {
        let clone: GameBoard = new GameBoard(this._reverseBoard);
        clone._game_map = this._game_map;
        this._game_map = [];//test, can broke app(if ref)
        return clone;
    }
    public get game_map(): BoardCell[][] {
        return this._game_map;
    }
    public get isReversed(): boolean {
        return this._reverseBoard;
    }
    public get playersList(): ChessPlayer[] {
        return this._players;
    }
    public showFigureMoves(player: BoardCell | null): void {
        for (let i = 0; i < GameBoard.DEFAULT_CHESS_SIZE; ++i)
            for (let j = 0; j < GameBoard.DEFAULT_CHESS_SIZE; ++j)
                this._game_map[i][j].available = false;
        this._coordinator.updateMoveHints(this, player);
    }
    public moveFigure(from: BoardCell, to: BoardCell): boolean {
        return this._coordinator.moveFigure(this, from, to);
    }
}