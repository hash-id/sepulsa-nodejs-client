//@ts-check
const { expect } = require("chai");
const dotEnv = require("dotenv");

const { Config, Donation, DonationSandboxEnum, StatusEnum } = require("../dist/index");

dotEnv.config();
const USER = process.env.ALTERRA_USER;
const PASS = process.env.ALTERRA_PASS;
const URL = process.env.ALTERRA_URL;

describe("Donation Class test", function() {
	before("Config setup", function() {
		this.cfg = new Config(URL, USER, PASS);
		// this.cfg.debug = true;   // use true for debugging
	});

	describe("Basic", function() {
		it("should have proper create and query methods ", function() {
			const instance = new Donation(this.cfg);
			expect(instance).to.exist;
			expect(instance).to.be.an.instanceOf(Donation);
			expect(instance.createTransaction).to.exist;
			expect(instance.createTransaction).to.be.a("function");
			expect(instance.queryTransactionDetail).to.exist;
			expect(instance.queryTransactionDetail).to.be.a("function");
		});
	});

	/**
   * Positive case
   */
	describe("Positive case - zakat", function() {
		this.timeout(7000);
		it("should create transaction successfully, given 081234000001 and 194", async function() {
			const instance = new Donation(this.cfg);
			const requestData = {
				customer_name: "ALTERRA",
				customer_number: DonationSandboxEnum["sbox-081234000001"],
				// email: "email@alterra.id",
				amount: 100000,
				product_id: "196"
			};
			const result = await instance.createTransaction(requestData);
			// console.log(result);
			expect(result).to.not.have.property("error");
			expect(result.status).to.be.eq(StatusEnum.pending);
			expect(result.type).to.be.eq("zakat");
			// console.log("transaction_id: " + result.transaction_id);
			this.trxId = result.transaction_id; /// grab the transaction_id to query transaction details
		});

		it("should return success (pending) on transaction detail, given 081234000001 and 196", async function() {
			const instance = new Donation(this.cfg);
			const result = await instance.queryTransactionDetail(this.trxId); // query with transaction_id
			// console.log(result);
			expect(result).to.not.have.property("error");
			expect(result.status).to.be.oneOf([ StatusEnum.success, StatusEnum.pending ]);
			expect(result.type).to.be.eq("zakat");
		});
	});

	describe("Positive case - infaq", function() {
		this.timeout(7000);
		it("should create transaction successfully, given 081234000001 and 194", async function() {
			const instance = new Donation(this.cfg);
			const requestData = {
				customer_name: "ALTERRA",
				customer_number: DonationSandboxEnum["sbox-081234000001"],
				// email: "email@alterra.id",
				amount: 100000,
				product_id: "198"
			};
			// console.log(requestData);
			const result = await instance.createTransaction(requestData);
			// console.log(result);
			expect(result).to.not.have.property("error");
			expect(result.status).to.be.eq(StatusEnum.pending);
			expect(result.type).to.be.eq("infaq");
			// console.log("transaction_id: " + result.transaction_id);
			this.trxId = result.transaction_id; /// grab the transaction_id to query transaction details
		});

		it("should return success (pending) on transaction detail, given 081234000001 and 196", async function() {
			const instance = new Donation(this.cfg);
			const result = await instance.queryTransactionDetail(this.trxId); // query with transaction_id
			// console.log(result);
			expect(result).to.not.have.property("error");
			expect(result.status).to.be.oneOf([ StatusEnum.success, StatusEnum.pending ]);
			expect(result.type).to.be.eq("infaq");
		});
	});

	describe("Positive case - wakaf", function() {
		this.timeout(7000);
		it("should create transaction successfully, given 081234000001 and 194", async function() {
			const instance = new Donation(this.cfg);
			const requestData = {
				customer_name: "ALTERRA",
				customer_number: DonationSandboxEnum["sbox-081234000001"],
				// email: "email@alterra.id",
				amount: 100000,
				product_id: "200"
			};
			// console.log(requestData);
			const result = await instance.createTransaction(requestData);
			// console.log(result);
			expect(result).to.not.have.property("error");
			expect(result.status).to.be.eq(StatusEnum.pending);
			expect(result.type).to.be.eq("wakaf");
			// console.log("transaction_id: " + result.transaction_id);
			this.trxId = result.transaction_id; /// grab the transaction_id to query transaction details
		});

		it("should return success (pending) on transaction detail, given 081234000001 and 196", async function() {
			const instance = new Donation(this.cfg);
			const result = await instance.queryTransactionDetail(this.trxId); // query with transaction_id
			// console.log(result);
			expect(result).to.not.have.property("error");
			expect(result.status).to.be.oneOf([ StatusEnum.success, StatusEnum.pending ]);
			expect(result.type).to.be.eq("wakaf");
		});
	});

	describe("Positive case - qurban", function() {
		this.timeout(7000);
		it("should create transaction successfully, given 081234000001 and 194", async function() {
			const instance = new Donation(this.cfg);
			const requestData = {
				customer_name: "ALTERRA",
				customer_number: DonationSandboxEnum["sbox-081234000001"],
				// email: "email@alterra.id",
				amount: 100000,
				product_id: "202"
			};
			// console.log(requestData);
			const result = await instance.createTransaction(requestData);
			// console.log(result);
			expect(result).to.not.have.property("error");
			expect(result.status).to.be.eq(StatusEnum.pending);
			expect(result.type).to.be.eq("qurban");
			// console.log("transaction_id: " + result.transaction_id);
			this.trxId = result.transaction_id; /// grab the transaction_id to query transaction details
		});

		it("should return success (pending) on transaction detail, given 081234000001 and 196", async function() {
			const instance = new Donation(this.cfg);
			const result = await instance.queryTransactionDetail(this.trxId); // query with transaction_id
			// console.log(result);
			expect(result).to.not.have.property("error");
			expect(result.status).to.be.oneOf([ StatusEnum.success, StatusEnum.pending ]);
			expect(result.type).to.be.eq("qurban");
		});
	});

	/**
   * Negative case
   */
	describe("Negative case", function() {
		this.timeout(7000);
		it("should create failed transaction, given 081234000002 and 196", async function() {
			const instance = new Donation(this.cfg);
			const result = await instance.createTransaction({
				customer_name: "ALTERRA",
				customer_number: DonationSandboxEnum["sbox-081234000004"],
				// email: "email@alterra.id",
				amount: 100000,
				product_id: "196"
			});
			// console.log(result);
			expect(result).to.not.have.property("error");
			expect(result.status).to.be.eq(StatusEnum.pending);
			expect(result.type).to.be.eq("zakat");
			// console.log(result.transaction_id);
			this.trxId = result.transaction_id; /// grab the transaction_id to query transaction details
		});

		it("should return failed on transaction detail, given 081234000004 and 196", async function() {
			const instance = new Donation(this.cfg);
			const result = await instance.queryTransactionDetail(this.trxId);
			// console.log(result);
			expect(result).to.not.have.property("error");
			expect(result.status).to.be.oneOf([ StatusEnum.failed ]);
			expect(result.type).to.be.eq("zakat");
		});
	});
});
