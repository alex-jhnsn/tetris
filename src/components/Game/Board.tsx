import { CellState } from "../../types/CellState";
import styles from "./Board.module.css";

export default function Board({ gameState }: { gameState: CellState[][] }) {
  return (
    <div className={styles.board}>
      {gameState.map((row, x) => (
        <div key={`row ${x}`} className={styles.row}>
          {row.map((cellValue, y) => (
            <div key={`cell ${x},${y}`} className={styles.cell} />
          ))}
        </div>
      ))}
    </div>
  );
}
