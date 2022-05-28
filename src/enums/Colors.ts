import Color from "../models/Color";

export default class Colors{
    private static COLORS_POOL : Color[] = []; 
    public static getColor(hex : string) : Color{
        const lazyColor : Color[] = Colors.COLORS_POOL.filter((item : Color) => item.hex === hex);
        if(lazyColor.length === 0){
            const _new : Color = new Color(hex);
            Colors.COLORS_POOL.push(_new);
            return _new;
        }
        return lazyColor[0];
    }
    public static readonly NONE : Color = new Color("#00000000");
    public static readonly BLACK : Color = new Color("#575757");
    public static readonly WHITE : Color = new Color("#ffffff");
    public static readonly SELECTED : Color = new Color("#0ee65d");
}