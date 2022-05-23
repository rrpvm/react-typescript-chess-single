import ICellProp from "../interfaces/ICellProp";

const CellComponent : React.FC<ICellProp> = ({cell}) => {
    return (
        <div className="Cell" style={{background : cell.color.hex }}>
          <img src={cell.figure.get_logo_src()} alt=""></img>
          {cell.avaliable && <div className="available"></div>}
        </div>
    );
}
export default CellComponent;