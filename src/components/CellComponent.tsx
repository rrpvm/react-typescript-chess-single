import Colors from "../enums/Colors";
import ICellProp from "../interfaces/ICellProp";

const CellComponent: React.FC<ICellProp> = ({ cell, selected, on_click }) => {
  return (
    <div className="Cell" style={{ background: !selected ? cell.color.hex : Colors.SELECTED.hex }} onClick = {()=>on_click(cell)}>
      <img src={cell.figure.get_logo_src()} alt=""></img>
      {cell.avaliable && <div className="available"></div>}
    </div>
  );
}
export default CellComponent;