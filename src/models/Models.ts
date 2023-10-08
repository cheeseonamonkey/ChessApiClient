// REST API object models returned by Chess.com

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

