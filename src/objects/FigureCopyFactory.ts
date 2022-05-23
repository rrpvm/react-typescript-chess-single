import Figure from "./Figure";
import Bishop from "./figures/Bishop";
import King from "./figures/King";
import Knight from "./figures/Knight";
import Pawn from "./figures/Pawn";
import Quuen from "./figures/Queen";
import Rook from "./figures/Rook";

export const FigureCopyFactory = (src: Figure): Figure => {
    let figure: Figure;
    if (src instanceof Pawn) {
        figure = new Pawn(src.player);
        if (!src.bFirstAction) {
            (figure as Pawn).doFirstMove();
        }
    }
    else if (src instanceof Bishop) {
        figure = new Bishop(src.player);
    }
    else if (src instanceof Knight) {
        figure = new Knight(src.player);
    }
    else if (src instanceof Rook) {
        figure = new Rook(src.player);
    }
    else if (src instanceof Quuen) {
        figure = new Quuen(src.player);
    }
    else if (src instanceof King) {
        figure = new King(src.player);
    }
    else {
        figure = new Figure(src.player);
    }
    return figure;
}