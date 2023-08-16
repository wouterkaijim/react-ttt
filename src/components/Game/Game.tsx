import { useState } from "react";
import { Board } from "../Board/Board";

export const Game = () => {
    const [xTurn, setXTurn] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const currentFields = history[history.length - 1];

    function handlePlay(nextFields: any[]) {
        setHistory([...history, nextFields]);
        setXTurn(!xTurn);
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board xTurn={xTurn} fields={currentFields} onPlay={handlePlay} />
            </div>
            <div className="game-info">
                <ol>{/*TODO*/}</ol>
            </div>
        </div>
    );
}