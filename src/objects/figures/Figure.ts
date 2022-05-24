import { Players } from "../../enums/Players";
import Pair from "../../models/structure/Pair";
import BoardCell from "../BoardCell";

export default abstract class Figure {
    protected _player: Players = Players.PLAYER_NONE;
    public abstract get_logo_src(): string;
    public abstract canRelocate(src: BoardCell, get_cell_function: (pair: Pair<number, number>) => BoardCell): Pair<number,number>[];
    public get player(): number {
        return this._player;
    }
    constructor(vPlayer: Players) {
        this._player = vPlayer;
    }
}