import React from 'react';

interface MoveInfoProps {
    move: OpeningMove;
}

export default function MoveInfo({ move }: MoveInfoProps) {
    return (
        <div className="mt-2">
            <p className="font-semibold">{move.sanMove}</p>
            <p>{move.openingName}</p>
            <p>Total Games: {move.gameNumbers.total}</p>
            <p>White Won: {move.gameNumbers.whiteWon}</p>
            <p>Black Won: {move.gameNumbers.blackWon}</p>
            <p>Draw: {move.gameNumbers.draw}</p>
        </div>
    );
}
