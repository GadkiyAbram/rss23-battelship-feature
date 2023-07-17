const INCREMENT = 1;
export const nextPlayerTurn = (index: number, players: number[]) => {
    return (index + INCREMENT) % players.length
}