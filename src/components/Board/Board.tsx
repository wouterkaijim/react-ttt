import { useState } from "react";
import { Field } from "../Field/Field";
import styles from "./Board.module.scss";

function calculateWinner(fields: any[]) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (fields[a] && fields[a] === fields[b] && fields[a] === fields[c]) {
            return fields[a];
        }
    }
    return null;
}

export const Board = ({ xTurn, fields, onPlay }: any) => {
    function handleClick(i: number) {
        if (calculateWinner(fields) || fields[i]) {
            return;
        }
        const nextFields = fields.slice();
        if (xTurn) {
            nextFields[i] = "X";
        } else {
            nextFields[i] = "O";
        }
        onPlay(nextFields);
    }

    const winner = calculateWinner(fields);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (xTurn ? 'X' : 'O');
    }

    return (
        <div className={`${styles.container}`}>
            <div className="status">{status}</div>
            <div className={`${styles.fields}`}>
                <Field value={fields[0]} onFieldClick={() => handleClick(0)} />
                <Field value={fields[1]} onFieldClick={() => handleClick(1)} />
                <Field value={fields[2]} onFieldClick={() => handleClick(2)} />
                <Field value={fields[3]} onFieldClick={() => handleClick(3)} />
                <Field value={fields[4]} onFieldClick={() => handleClick(4)} />
                <Field value={fields[5]} onFieldClick={() => handleClick(5)} />
                <Field value={fields[6]} onFieldClick={() => handleClick(6)} />
                <Field value={fields[7]} onFieldClick={() => handleClick(7)} />
                <Field value={fields[8]} onFieldClick={() => handleClick(8)} />
            </div>
        </div>
    );
};