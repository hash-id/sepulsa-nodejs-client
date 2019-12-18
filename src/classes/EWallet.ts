import { Config } from "./Config";
import { IEWalletCreate, IEWalletResponse } from "../interfaces/IEWallet";

export class EWallet {
	private cfg: Config;

	constructor(config: Config) {
		this.cfg = config;
	}

	async createTransaction(data: IEWalletCreate) {
		try {
			const response = await this.cfg.postRequest("/transaction/ewallet.json", data);
			const respData = response.data as IEWalletResponse;
			return respData;
		} catch (e) {
			return <IEWalletResponse>{
				error: e.message || e
			};
		}
	}

	async queryTransactionDetail(id: string) {
		try {
			const response = await this.cfg.getRequest(`/transaction/ewallet/${id}.json`);
			const respData = response.data as IEWalletResponse;
			return respData;
		} catch (e) {
			return <IEWalletResponse>{
				error: e.message || e
			};
		}
	}
}
