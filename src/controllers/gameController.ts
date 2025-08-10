import { Request,Response } from "express";
import { startGame,getState,hit as hitCard} from "../services/gameService";

export function start(req: Request, res: Response){
    const gameState=startGame();
    res.status(201).json(gameState);
}
export function state(req: Request, res: Response){
    const state=getState();
    res.status(200).json(state);
}
export function hit(req: Request, res: Response){
    const newGameState=hitCard()
    res.status(201).json(newGameState);

}
