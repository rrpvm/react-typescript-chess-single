import Cell from "./Cell";
import Figure from "./enums/Figure";
import figures from "./figures";
import Colors from "./enums/Colors"
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
            this._cells[1][i].figure.color = "black";
            this._cells[6][i].figure.logo = "white";
            this._cells[1][i].figure.logo = figures.BLACK_PAWN.src;
            this._cells[6][i].figure.logo = figures.WHITE_PAWN.src;
        }
    }

    addKing() {
        this._cells[0][5].figure.color = "black";
        this._cells[7][5].figure.color = "white";
        this._cells[0][4].figure.logo = figures.BLACK_KING.src;
        this._cells[7][4].figure.logo = figures.WHITE_KING.src;
    }

    initBoard() {
        this.addPawns();
        this.addKing();
    }
}
