import { Players } from "../../enums/Players";
import Pair from "../../models/structure/Pair";
import BoardCell from "../BoardCell";

export default abstract class Figure {
    protected _player: Players = Players.PLAYER_NONE;
    protected _get_cell_function: (x: number, y: number) => BoardCell;
    public abstract get_logo_src(): string;
    public abstract canRelocate(src: BoardCell): Pair<number, number>[];
    public abstract simulate(src: BoardCell): Pair<number, number>[];
    constructor(vPlayer: Players, get_cell_function: (x: number, y: number) => BoardCell) {
        this._player = vPlayer;
        this._get_cell_function = get_cell_function;;
    }
    public get player(): number {
        return this._player;
    }
    protected isFriendly(src: BoardCell, target: BoardCell): boolean {
        return target.figure.player === src.figure.player;
    }

}