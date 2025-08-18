import { Card, GameState, Rank, GameStatus } from "../types/gameTypes";
import { createGameState } from "../utils/helpers";

let gameState: GameState;
const dealerHitLimit = 17;
const win = 21;

export function startGame(): GameState {
  gameState = createGameState();
  return gameState;
}
export function hit(): GameState | boolean {
  let cardRank;
  if (gameState.playerHand.sum == win) {
    gameState.status = GameStatus.Blackjack;
    return stand();
  }
  const card = gameState.deck.pop();
  if (!card) {
    return false;
  }
  gameState.playerHand.handCards.push(card);
  if (card.rank === "queen" || card.rank == "king" || card.rank === "jack") {
    cardRank = 10;
  } else {
    cardRank = card.rank;
  }
  gameState.playerHand.sum += cardRank;
  gameState.double = false;

  return checkPlayer();
}
export function double() {
  hit();
  return stand();
}
export function stand(): GameState | boolean {
  let cardRank;
  while (gameState.dealerHand.sum < dealerHitLimit) {
    const card = gameState.deck.pop();
    if (!card) {
      return false;
    }
    if (card.rank === "queen" || card.rank == "king" || card.rank === "jack") {
      cardRank = 10;
    } else {
      cardRank = card.rank;
    }
    gameState.dealerHand.handCards.push(card);
    gameState.dealerHand.sum += cardRank;
  }
  return checkWhoWon();
}
export function getState(): GameState {
  return gameState;
}
function checkPlayer(): GameState {
  if (gameState.playerHand.sum > win) {
    gameState.status = GameStatus.Busted;
  } else if (gameState.status == GameStatus.Blackjack) {
    return gameState;
  } else if (gameState.playerHand.sum == win) {
    gameState.status = GameStatus.PlayerWins;
  } else {
    gameState.status = GameStatus.Playing;
  }
  return gameState;
}
function checkWhoWon() {
  const dealerHandValue = gameState.dealerHand.sum;
  const playerHandValue = gameState.playerHand.sum;
  //player busted
  if (gameState.status == GameStatus.Busted) {
    return gameState;
  }
  if (gameState.status == GameStatus.Blackjack) {
    return gameState;
  }
  // dealer and player has the same hand value
  if (dealerHandValue == playerHandValue) {
    gameState.status = GameStatus.Push;
    return gameState;
  }
  const dealerWin21NotPlayer =
    dealerHandValue == win && gameState.status != GameStatus.PlayerWins;
  const dealerCloserTo21 =
    dealerHandValue > playerHandValue && dealerHandValue < win;
  if (dealerWin21NotPlayer || dealerCloserTo21) {
    gameState.status = GameStatus.DealerWins;
    return gameState;
  } else {
    gameState.status = GameStatus.PlayerWins;
    return gameState;
  }
}
