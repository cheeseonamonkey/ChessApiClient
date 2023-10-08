import React from 'react';

interface HorizontalBarProps {
    wins: number;
    losses: number;
    draws: number;
}

const HorizontalBar: React.FC<HorizontalBarProps> = ({ wins, losses, draws }) => {
    const totalGames = wins + losses + draws;

    const winPercentage = (wins / totalGames) * 100;
    const lossPercentage = (losses / totalGames) * 100;
    const drawPercentage = (draws / totalGames) * 100;

    return (
        <div className="flex items-center mt-2">
            <div className="bg-green-500 h-4" style={{ width: `${winPercentage / 2}%` }}></div>
            <div className="bg-yellow-500 h-4" style={{ width: `${drawPercentage}%` }}></div>
            <div className="bg-red-500 h-4" style={{ width: `${lossPercentage / 2}%` }}></div>
        </div>
    );
};

export default HorizontalBar;
