import React from "react";
import IBoardProp from "../interfaces/IBoardProp";
import Cell from "../objects/Cell";
import CellComponent from "./CellComponent";


const BoardComponent : React.FC<IBoardProp> = ({board}) => {
    return (
    <div className="App">
        <div className="Board">
            {
                board?.mapCells.map((row : Cell[], index) =>{
                   return (
                   <React.Fragment key={index}>
                    {
                        row.map((item : Cell) => {
                            return (
                                <CellComponent
                                 cell={item}
                                 key={item.xy}></CellComponent>
                            )
                        })
                    }
                   </React.Fragment>
                   )
                })
            }
        </div>
    </div>
    );
}
export default BoardComponent;