import { Request,Response } from "express";
import { startGame,getState} from "../services/gameService";

export function start(req: Request, res: Response){
    const gameState=startGame();
    res.status(201).json(gameState);
}
export function state(req: Request, res: Response){
    res.status(200).json(getState());
}