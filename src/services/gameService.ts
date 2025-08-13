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
  if (gameState.playerHand.sum == win) {
    gameState.status = GameStatus.Blackjack;
    stand();
  }
  const card = gameState.deck.pop();
  if (!card) {
    return false;
  }
  gameState.playerHand.handCards.push(card);
  gameState.playerHand.sum += card.rank;

  return checkPlayer();
}
export function stand(): GameState | boolean {
  while (gameState.dealerHand.sum < dealerHitLimit) {
    const card = gameState.deck.pop();
    if (!card) {
      return false;
    }
    gameState.dealerHand.handCards.push(card);
    gameState.dealerHand.sum += card.rank;
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
  // dealer has 21 and the player doesnt or dealer has more than the player and less than 21
  if (
    (dealerHandValue == win && gameState.status != GameStatus.PlayerWins) ||
    (dealerHandValue > playerHandValue && dealerHandValue < win)
  ) {
    gameState.status = GameStatus.DealerWins;
    return gameState;
  }
  //the player has a blackjack or more than the dealer and less than 21 or the dealer busted and the player didnt
  else {
    gameState.status = GameStatus.PlayerWins;
    return gameState;
  }
}
