export enum Rank{
    two=2,
    three=3,
    four=4,
    five=5,
    six=6,
    seven=7,
    eight=8,
    nine=9,
    jack=10,
    dama=10,
    king=10,
    ace=1|11
}
export enum Suit{
    heart="Heart",
    diamond="Diamond",
    spade="Spade",
    club="Club"
}
export interface Card{
    suit:Suit;
    rank:Rank;
}
export interface Hand{
    handCards:Card[];
    sum:number;
}
export interface GameState{
    deck:Card[];
    playerHand:Hand;
    dealerHand:Hand;
}