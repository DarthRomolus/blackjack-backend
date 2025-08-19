import { error } from "console";
import {
  Card,
  GameState,
  Rank,
  Suit,
  GameStatus,
  Hand,
} from "../types/gameTypes";

const aceIsEleven = 11;
const aceIsOne = 1;

function shuffleDeck(deck: Card[]): void {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j]!, deck[i]!];
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
  let cardRank1 = 0;
  let cardRank2 = 0;
  let numOfAce = 0;
  let sumOfCards = 0;

  let hand: Card[] = [];
  const card1 = deck.pop();
  const card2 = deck.pop();

  if (!card1 || !card2) {
    return {
      handCards: [],
      sum: 0,
      numOfAce: 0,
    };
  }

  if (card1.rank === "queen" || card1.rank == "king" || card1.rank === "jack") {
    cardRank1 = 10;
  } else if (card1.rank === "ace") {
    cardRank1 = aceIsEleven;
    numOfAce++;
  } else {
    cardRank1 = card1.rank;
  }
  if (card2.rank === "queen" || card2.rank == "king" || card2.rank === "jack") {
    cardRank2 = 10;
  } else if (card2.rank === "ace") {
    cardRank2 = aceIsEleven;
    numOfAce++;
  } else {
    cardRank2 = card2.rank;
  }

  hand.push(card1);
  hand.push(card2);

  [sumOfCards, numOfAce] = checkIfAce(cardRank1 + cardRank2, numOfAce);
  return {
    handCards: hand,
    sum: sumOfCards,
    numOfAce: numOfAce,
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
export function checkIfAce(sum: number, numOfAce: number): [number, number] {
  while (sum > 21 && numOfAce !== 0) {
    sum = sum - 10;
    numOfAce--;
  }
  return [sum, numOfAce];
}
