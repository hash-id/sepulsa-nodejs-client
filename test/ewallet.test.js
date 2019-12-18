//@ts-check
const { expect } = require("chai");
const dotEnv = require("dotenv");
const moment = require("moment");

const { Config, EWallet, EWalletSandboxEnum, StatusEnum, ResponseCodeEnum } = require("../dist/index");

dotEnv.config();
const USER = process.env.ALTERRA_USER;
const PASS = process.env.ALTERRA_PASS;
const URL = process.env.ALTERRA_URL;

describe("EWallet Class test", function() {
	before("Config setup", function() {
		this.cfg = new Config(URL, USER, PASS);
		// this.cfg.debug = true;   // use true for debugging
	});

	describe("Basic", function() {
		it("should have proper create and query methods ", function() {
			const instance = new EWallet(this.cfg);
			expect(instance).to.exist;
			expect(instance).to.be.an.instanceOf(EWallet);
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
			this.succesOrderId = `mbok-${moment().valueOf().toString(36)}`;
		});
		it("should create transaction successfully, given 081298700001 and 194", async function() {
			const instance = new EWallet(this.cfg);
			const requestData = {
				customer_number: EWalletSandboxEnum["sbox-081298700001"],
				product_id: "194",
				order_id: this.succesOrderId
			};
			// console.log(requestData);
			const result = await instance.createTransaction(requestData);
			// console.log(result);
			expect(result).to.not.have.property("error");
			expect(result.status).to.be.eq(StatusEnum.pending);
			expect(result.type).to.be.eq("ewallet");
			// console.log("transaction_id: " + result.transaction_id);
			this.trxId = result.transaction_id; /// grab the transaction_id to query transaction details
		});

		it("should return success (pending) on transaction detail, given 081298700001 and 194", async function() {
			const instance = new EWallet(this.cfg);
			const result = await instance.queryTransactionDetail(this.trxId); // query with transaction_id
			// console.log(result);
			expect(result).to.not.have.property("error");
			expect(result.status).to.be.oneOf([ StatusEnum.success, StatusEnum.pending ]);
			expect(result.type).to.be.eq("ewallet");
		});
	});

	/**
   * Negative case
   */
	describe("Negative case", function() {
		this.timeout(7000);
		before(function() {
			this.failedOrderId = `mbfail-${moment().valueOf().toString(36)}`;
		});
		it("should create failed transaction, given 081234000002 and 194", async function() {
			const instance = new EWallet(this.cfg);
			const result = await instance.createTransaction({
				customer_number: EWalletSandboxEnum["sbox-081234000002"],
				product_id: "194",
				order_id: this.failedOrderId
			});
			// console.log(result);
			expect(result).to.not.have.property("error");
			expect(result.status).to.be.eq(StatusEnum.pending);
			expect(result.type).to.be.eq("ewallet");
			// console.log(result.transaction_id);
			this.trxId = result.transaction_id; /// grab the transaction_id to query transaction details
		});

		it("should return failed on transaction detail, given 081234000002 and 194", async function() {
			const instance = new EWallet(this.cfg);
			const result = await instance.queryTransactionDetail(this.trxId);
			// console.log(result);
			expect(result).to.not.have.property("error");
			expect(result.status).to.be.oneOf([ StatusEnum.failed ]);
			expect(result.type).to.be.eq("ewallet");
		});

		it("should create failed transaction with invalid number, given 081234000003 and 194", async function() {
			const instance = new EWallet(this.cfg);
			const result = await instance.createTransaction({
				customer_number: EWalletSandboxEnum["sbox-081234000003"],
				product_id: "194",
				order_id: this.failedOrderId + "-inv"
			});
			expect(result).to.not.have.property("error");
			expect(result.status).to.be.eq(StatusEnum.pending);
			expect(result.type).to.be.eq("ewallet");
			console.log(result.transaction_id);
			this.trxId = result.transaction_id; /// grab the transaction_id to query transaction details
		});

		it("should return failed with invalid number on transaction detail due to invalid number", async function() {
			const instance = new EWallet(this.cfg);
			const result = await instance.queryTransactionDetail(this.trxId);
			expect(result).to.not.have.property("error");
			expect(result.status).to.be.oneOf([ StatusEnum.failed ]);
			expect(result.response_code).to.be.eq(ResponseCodeEnum["failed"]);
			expect(result.type).to.be.eq("ewallet");
		});
	});
});
