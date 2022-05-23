export default class figure_item {
    private _src: string;

    constructor(src: string) {
        this._src = src;
    }

    get src(): string {
        return this._src;
    }

    public static BLACK_PAWN: figure_item = new figure_item('https://www.symbols.com/images/symbol/1/3403_black-pawn.png');
    public static BLACK_BISHOP: figure_item = new figure_item('https://www.symbols.com/images/symbol/1/3401_black-bishop.png');
    public static BLACK_KNIGHT: figure_item = new figure_item('https://www.symbols.com/images/symbol/1/3402_black-knight.png');
    public static BLACK_KING: figure_item = new figure_item('https://www.symbols.com/images/symbol/1/3398_black-king.png');
    public static WHITE_PAWN: figure_item = new figure_item('https://www.symbols.com/images/symbol/3409_white-pawn.png');
    public static WHITE_BISHOP: figure_item = new figure_item('https://www.symbols.com/images/symbol/1/3407_white-bishop.png');
    public static WHITE_KNIGHT: figure_item = new figure_item('https://www.symbols.com/images/symbol/1/3408_white-knight.png');
    public static WHITE_KING: figure_item = new figure_item('https://www.symbols.com/images/symbol/1/3404_white-king.png');

}
