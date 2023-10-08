import React from 'react';
import MoveInfo from './MoveInfo';
import HorizontalBar from './HorizontalBar';

interface OpeningsTableProps {
    moves: OpeningMove[];
    color: string;
}

const OpeningsTable: React.FC<OpeningsTableProps> = ({ moves, color }) => (
    <div>
        <h2 className="text-xl font-bold mt-4">{color}</h2>
        {moves.map((move, index) => (
            <div key={index}>
                <MoveInfo move={move} />
                <HorizontalBar wins={move.gameNumbers.whiteWon} losses={move.gameNumbers.blackWon} draws={move.gameNumbers.draw} />
            </div>
        ))}
    </div>
);

export default OpeningsTable;
