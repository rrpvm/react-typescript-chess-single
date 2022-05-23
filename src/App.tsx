import  {useEffect, useState} from 'react';
import './App.css';
import BoardComponent from './components/BoardComponent';
import Board from './objects/Board';
function App() {
   const [board, setBoard] = useState<Board | undefined>();
   const restart = () : void => {
        const _board = new Board();
        _board.initialize();
        setBoard(_board);
   }
   useEffect(()=>{
    restart();
   }, []);
    return (
      <BoardComponent board={board}/>
    );
}

export default App;
