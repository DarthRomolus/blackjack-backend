import type {Card, GameState,Rank,} from "../types/gameTypes";
import {createGameState} from "../utils/helpers"

let gameState:GameState;
export function startGame():GameState{
    gameState=createGameState();
    return gameState;
}
export function hit(){
    const card= gameState.deck.pop();
    if(!card){
        return;
    }
    gameState.playerHand.handCards.push(card);
    gameState.playerHand.sum+=card.rank;
    return gameState;
 

}
export function getState(){
    return gameState;
}