
export default class Pair<T1, T2>{
    private _left: T1;
    private _right: T2;
    constructor(a: T1, b: T2) {
        this._left = a;
        this._right = b;
    }
    set left(a: T1) {
        this._left = a;
    }
    set right(b: T2) {
        this.right = b;
    }
    get left(): T1 {
        return this._left;
    }
    get right(): T2 {
        return this._right;
    }
}