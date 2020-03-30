import { Config } from "./Config";
import { IDonationCreate, IDonationResponse } from "../interfaces/IDonation";

export class Donation {
	private cfg: Config;

	constructor(config: Config) {
		this.cfg = config;
	}

	async createTransaction(data: IDonationCreate) {
		try {
			const response = await this.cfg.postRequest("/transaction/donation.json", data);
			const respData = response.data as IDonationResponse;
			return respData;
		} catch (e) {
			return <IDonationResponse>{
				error: e.message || e
			};
		}
	}

	async queryTransactionDetail(id: string) {
		try {
			const response = await this.cfg.getRequest(`/transaction/donation/${id}.json`);
			const respData = response.data as IDonationResponse;
			return respData;
		} catch (e) {
			return <IDonationResponse>{
				error: e.message || e
			};
		}
	}
}
