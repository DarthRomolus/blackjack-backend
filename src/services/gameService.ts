import type {Card, Hand, GameState,Rank,Suit} from "../types/gameTypes";
import {createGameState} from "../utils/helpers"

let gameState:GameState;
export function startGame(){
    gameState=createGameState(gameState);

}
export function hit(card:Card ){
    if (!gameState.playerHand.handCards[0])
    {
        return;
    }
    gameState.playerHand.handCards[0].rank=card.rank;
    gameState.playerHand.handCards[0].suit=card.suit;

}