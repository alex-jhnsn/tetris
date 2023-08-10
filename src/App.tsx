import "./App.css";
import Score from "./Score";
import Board from "./components/Game/Board";
import { rows, columns } from "./consts/boardSize";
import useGameTimer from "./hooks/useGameTimer";
import { CellState } from "./types/CellState";

const getInitialGameState: CellState[][] = new Array(rows)
  .fill(0)
  .map(() => new Array(columns).fill(""));

function App() {
  const { start, stop, secondsPassed } = useGameTimer();

  return (
    <div className="App">
      <h1>Tetris</h1>
      <Score score={0} />
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <p>{secondsPassed}</p>
      <Board gameState={getInitialGameState} />
    </div>
  );
}

export default App;
