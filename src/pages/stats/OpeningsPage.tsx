import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OpeningsTable from './OpeningsTable';

interface Props {
    user: string;
}

interface OpeningMove {
    sanMove: string;
    fen: string;
    ply: number;
    openingName: string;
    gameNumbers: GameNumbers;
}

interface GameNumbers {
    total: number;
    whiteWon: number;
    blackWon: number;
    draw: number;
}

interface OpeningMoves {
    moves: OpeningMove[];
}

interface OpeningData {
    white: OpeningMoves;
    black: OpeningMoves;
}

export default function OpeningsPage({ user }: Props) {
    const [data, setData] = useState<OpeningData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<OpeningData>(
                    `https://sicilianclient.ffatty.repl.co/${user}/stats/openings`
                );
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [user]);

    return (
        <div className="App p-4">
            <h2 className="text-xl font-bold">User: {user}</h2>
            {data && (
                <div>
                    <OpeningsTable moves={data.white.moves} color="White" />
                    <OpeningsTable moves={data.black.moves} color="Black" />
                </div>
            )}
        </div>
    );
}
