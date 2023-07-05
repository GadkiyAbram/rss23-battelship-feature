export class Game {
    // @ts-ignore
    winner: string;
    playerCount: number;

    constructor(playerCount: number) {
        this.playerCount = playerCount;
    }

    get getWinner(): string {
        return this.winner;
    }

    set setWinner(winnerName: string) {
        this.winner = winnerName;
    }

    get getPlayerCount(): number {
        return this.playerCount;
    }
}