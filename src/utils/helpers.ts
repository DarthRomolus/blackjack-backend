import { error } from "console";
import {
  Card,
  GameState,
  Rank,
  Suit,
  GameStatus,
  Hand,
} from "../types/gameTypes";

function shuffleDeck(deck: Card[]) {
  for (let i = 0; i < deck.length; i++) {
    let shuffle = Math.floor(Math.random() * deck.length);
    let temp = deck[i];
    if (deck[shuffle]) {
      deck[i] = deck[shuffle];
    }
    if (temp) {
      deck[shuffle] = temp;
    }
  }
}
export function createDeck(): Card[] {
  const deck: Card[] = [];
  const suits = [Suit.heart, Suit.diamond, Suit.spade, Suit.club];
  const ranks = [
    Rank.two,
    Rank.three,
    Rank.four,
    Rank.five,
    Rank.six,
    Rank.seven,
    Rank.eight,
    Rank.nine,
    Rank.ten,
    Rank.jack,
    Rank.dama,
    Rank.king,
    Rank.ace,
  ];

  for (const suit of suits) {
    for (const rank of ranks) {
      deck.push({ suit, rank });
    }
  }
  shuffleDeck(deck);
  return deck;
}
function dealTwoCard(deck: Card[]): Hand {
  let cardRank1;
  let cardRank2;

  let hand: Card[] = [];
  const card1 = deck.pop();
  const card2 = deck.pop();
  if (!card1 || !card2) {
    return {
      handCards: [],
      sum: 0,
    };
  }
  if (card1.rank === "queen" || card1.rank == "king" || card1.rank === "jack") {
    cardRank1 = 10;
  } else {
    cardRank1 = card1.rank;
  }
  if (card2.rank === "queen" || card2.rank == "king" || card2.rank === "jack") {
    cardRank2 = 10;
  } else {
    cardRank2 = card2.rank;
  }
  hand.push(card1);
  hand.push(card2);
  return {
    handCards: hand,
    sum: cardRank1 + cardRank2,
  };
}
export function createGameState(): GameState {
  const deck = createDeck();

  return {
    deck: deck,
    playerHand: dealTwoCard(deck),
    dealerHand: dealTwoCard(deck),
    status: GameStatus.Playing,
    double: true,
  };
}
