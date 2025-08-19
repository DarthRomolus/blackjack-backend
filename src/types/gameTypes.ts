export enum Rank {
  two = 2,
  three = 3,
  four = 4,
  five = 5,
  six = 6,
  seven = 7,
  eight = 8,
  nine = 9,
  ten = 10,
  jack = "jack",
  dama = "queen",
  king = "king",
  ace = "ace",
}
export enum Suit {
  heart = "hearts",
  diamond = "diamonds",
  spade = "spades",
  club = "clubs",
}
export enum GameStatus {
  Playing = "Playing",
  PlayerWins = "Player_Wins",
  DealerWins = "Dealer_Wins",
  Push = "Push",
  Blackjack = "Blackjack",
  Busted = "Busted",
}
export interface Card {
  suit: Suit;
  rank: Rank;
}
export interface Hand {
  handCards: Card[];
  sum: number;
  numOfAce: number;
}
export interface GameState {
  deck: Card[];
  playerHand: Hand;
  dealerHand: Hand;
  status: GameStatus;
  double: boolean;
}
