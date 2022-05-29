import Colors from "../enums/Colors"
import { Players } from "../enums/Players"
import ICellProp from "../interfaces/ICellProp"

export const CellComponent: React.FC<ICellProp> = ({ cell, is_active, on_click }) => {
    return (
        <div className={"Cell" + (cell.reversed ? " reversed" : "")} onClick={() => on_click(cell)} style={{ background: is_active ? Colors.SELECTED.hex : cell.color.hex }}>
            <img src={cell.figure.get_logo_src()} alt=""></img>
            {cell.available && <div className={cell.figure.player === Players.PLAYER_NONE ? 'available' : 'avaliable-figure'}></div>}
        </div>
    )
}