import {Card, GameState,Rank,Suit} from "../types/gameTypes";


export function createDeck(): Card[] {
    const deck: Card[] = [];
    const suits = [Suit.heart, Suit.diamond, Suit.spade, Suit.club];
    const ranks = [
        Rank.two, Rank.three, Rank.four, Rank.five, Rank.six, Rank.seven,
        Rank.eight, Rank.nine, Rank.jack, Rank.dama, Rank.king, Rank.ace
    ];

    for (const suit of suits) {
        for (const rank of ranks) {
            deck.push({ suit, rank });
        }
    }

    return deck;
}
export function createGameState(): GameState {
    return {
        deck: createDeck(),
        playerHand: {
                 handCards: [],
                sum: 0 },
        dealerHand: { 
                handCards: [],
                sum: 0 
            }
    };
}