//@ts-check
const { expect } = require("chai");
const dotEnv = require("dotenv");
const moment = require("moment");
const delay = require("delay");

const {
	Config,
	Game,
	GameSandboxEnum,
	GameSandboxCustomerEnum,
	StatusEnum,
	ResponseCodeEnum
} = require("../dist/index");

dotEnv.config();
const USER = process.env.ALTERRA_USER;
const PASS = process.env.ALTERRA_PASS;
const URL = process.env.ALTERRA_URL;

describe("Game Class test", function() {
	before("Config setup", function() {
		this.cfg = new Config(URL, USER, PASS);
		// this.cfg.debug = true;   // use true for debugging
	});

	describe("Basic", function() {
		it("should have proper create and query methods ", function() {
			const instance = new Game(this.cfg);
			expect(instance).to.exist;
			expect(instance).to.be.an.instanceOf(Game);
			expect(instance.createTransaction).to.exist;
			expect(instance.createTransaction).to.be.a("function");
			expect(instance.queryTransactionDetail).to.exist;
			expect(instance.queryTransactionDetail).to.be.a("function");
		});
	});

	/**
   * Positive case
   */
	describe("Positive case", function() {
		this.timeout(7000);
		before(function() {
			this.succesOrderId = `gameok-${moment().valueOf().toString(36)}`;
		});
		it("should create transaction successfully", async function() {
			const instance = new Game(this.cfg);
			const requestData = {
				customer_number: GameSandboxCustomerEnum["sbox-081234561001"],
				product_id: GameSandboxEnum.sandbox,
				order_id: this.succesOrderId
			};
			// console.log(requestData);
			const result = await instance.createTransaction(requestData);
			// console.log(result);
			expect(result).to.not.have.property("error");
			expect(result.status).to.be.eq(StatusEnum.pending);
			expect(result.type).to.be.eq("game");
			// console.log("transaction_id: " + result.transaction_id);
			this.trxId = result.transaction_id; /// grab the transaction_id to query transaction details
		});

		it("should return success (pending) on transaction detail", async function() {
			const instance = new Game(this.cfg);
			const result = await instance.queryTransactionDetail(this.trxId); // query with transaction_id
			// console.log(result);
			expect(result).to.not.have.property("error");
			expect(result.status).to.be.oneOf([ StatusEnum.success, StatusEnum.pending ]);
			expect(result.type).to.be.eq("game");
		});
	});

	/**
   * Negative case
   */
	describe.only("Negative case", function() {
		this.timeout(7000);
		before(function() {
			this.failedOrderId = `gamefail-${moment().valueOf().toString(36)}`;
		});
		it("should create failed transaction", async function() {
			const instance = new Game(this.cfg);
			const result = await instance.createTransaction({
				customer_number: GameSandboxCustomerEnum["sbox-081234562001"],
				product_id: GameSandboxEnum.sandbox,
				order_id: this.failedOrderId + "-inv"
			});
			console.log(result);
			expect(result).to.not.have.property("error");
			expect(result.status).to.be.eq(StatusEnum.pending);
			expect(result.type).to.be.eq("game");
			console.log(result.transaction_id);
			this.trxId = result.transaction_id; /// grab the transaction_id to query transaction details
		});

		it("should return failed on transaction detail", async function() {
			this.timeout(10000);
			await delay(5000);
			const instance = new Game(this.cfg);
			const result = await instance.queryTransactionDetail(this.trxId);
			console.log(result, "transDetail");
			expect(result).to.not.have.property("error");
			expect(result.status).to.be.oneOf([ StatusEnum.failed ]);
			expect(result.response_code).to.be.eq(ResponseCodeEnum["Order Canceled by Ops"]);
			expect(result.type).to.be.eq("game");
		});
	});
});
