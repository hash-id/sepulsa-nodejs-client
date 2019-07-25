import { Config } from "./Config";
import { IGameCreate, IGameResponse } from "../interfaces/IGame";
export declare class Game {
    private cfg;
    constructor(config: Config);
    createTransaction(data: IGameCreate): Promise<IGameResponse>;
    queryTransactionDetail(id: string): Promise<IGameResponse>;
}
