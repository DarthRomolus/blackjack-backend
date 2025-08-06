import {Card, Hand, GameState,Rank,Suit} from "../types/gameTypes";


export function createDeck():Card[]{
    let deck:Card[]=[];
    return deck;
};
export function createGameState(gameState:GameState):GameState{
    gameState.deck=createDeck();
    gameState.dealerHand.handCards=[];
    gameState.dealerHand.sum=0;
    gameState.playerHand.handCards=[];
    gameState.playerHand.sum=0;

    return gameState;
};