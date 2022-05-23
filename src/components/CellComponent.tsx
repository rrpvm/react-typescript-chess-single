import Cell from "../Cell";
import React from "react";

interface ICellProp {
    cell : Cell;
}
export const CellComponent: React.FC<ICellProp> = ({cell}) => {
    return (
        <div className="Cell" key={cell.xy} style={{background : cell.color.hex}}>
            <img src={cell.figure.logo}></img>
        </div>
    )
}