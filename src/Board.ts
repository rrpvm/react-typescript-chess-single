import Cell from "./Cell";
import Figure from "./enums/Figure";
import Colors from "./enums/Colors"
import { FiguresTypes } from "./enums/FiguresType";

export default class Board {
    private _cells: Cell[][] = [];

    constructor() {
        for (let i = 0; i < 8; i++) {
            const row: Cell[] = [];
            for (let j = 0; j < 8; j++) {
                row.push(new Cell(i * 8 + j, new Figure(), (i + j) % 2 !== 0 ? Colors.BLACK : Colors.WHITE));
            }
            this._cells.push(row);
        }
    }

    get cells(): Cell[][] {
        return this._cells;
    }

    addPawns() {
        for (let i = 0; i < 8; i++) {
            this.cells[1][i].figure.type = FiguresTypes.BLACK_PAWN;
            this.cells[6][i].figure.type = FiguresTypes.WHITE_PAWN;
        }
    }

    addKings() {
        this.cells[0][4].figure.type = FiguresTypes.BLACK_KING;
        this.cells[7][4].figure.type = FiguresTypes.WHITE_KING;
    }

    addKnights() {
        this.cells[0][1].figure.type = FiguresTypes.BLACK_KNIGHT;
        this.cells[0][6].figure.type = FiguresTypes.BLACK_KNIGHT;
        this.cells[7][1].figure.type = FiguresTypes.WHITE_KNIGHT;
        this.cells[7][6].figure.type = FiguresTypes.WHITE_KNIGHT;
    }

    addRooks(){
        this.cells[0][0].figure.type = FiguresTypes.BLACK_ROOK;
        this.cells[0][7].figure.type = FiguresTypes.BLACK_ROOK;
        this.cells[7][0].figure.type = FiguresTypes.WHITE_ROOK;
        this.cells[7][7].figure.type = FiguresTypes.WHITE_ROOK;


    }
    initBoard() {
        this.addPawns();
        this.addRooks();
        this.addKnights();
        this.addKings();

    }
}
