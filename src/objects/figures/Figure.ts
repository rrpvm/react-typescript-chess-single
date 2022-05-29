import { Players } from "../../enums/Players";
import IFigureProxy from "../../interfaces/IFigureProxy";
import Pair from "../../models/structure/Pair";
import BoardCell from "../BoardCell";

export default abstract class Figure {
    protected _player: Players = Players.PLAYER_NONE;
    protected _proxy: IFigureProxy;
    public abstract get_logo_src(): string;
    public abstract canRelocate(src: BoardCell): Pair<number, number>[];
    //public abstract simulate(src: BoardCell): Pair<number, number>[];
    constructor(vPlayer: Players, proxy: IFigureProxy) {
        this._player = vPlayer;
        this._proxy = proxy;
    }
    public get player(): number {
        return this._player;
    }
    protected isFriendly(src: BoardCell, target: BoardCell): boolean {
        return target.figure.player === src.figure.player;
    }
    public get proxy(): IFigureProxy {
        return this._proxy;
    }
}