import Colors from "../enums/Colors"
import ICellProp from "../interfaces/ICellProp"

export const CellComponent: React.FC<ICellProp> = ({ cell, is_active, on_click }) => {
    return (
        <div className="Cell" onClick={() => on_click(cell)} style={{ background: is_active ? Colors.SELECTED.hex : cell.color.hex }}>
            <img src={cell.figure.get_logo_src()} alt=""></img>
            {cell.available && <div className="available"></div>}
            {cell._bDebug && <div className="debug"></div>}
        </div>
    )
}