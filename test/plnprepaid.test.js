//@ts-check
const { expect } = require("chai");
const dotEnv = require("dotenv");
const moment = require("moment");
const {
  Config,
  PlnPrepaid,
  PlnPrepaidEnum,
  PlnPrepaidSandboxEnum,
  StatusEnum,
  ResponseCodeEnum
} = require("../dist/index");

dotEnv.config();
const USER = process.env.ALTERRA_USER;
const PASS = process.env.ALTERRA_PASS;
const URL = process.env.ALTERRA_URL;

describe("PlnPrepaid Class test", function() {
  before("Config setup", function() {
    this.cfg = new Config(URL, USER, PASS);
  });

  describe("Basic", function() {
    it("should have proper create and query methods ", function() {
      const instance = new PlnPrepaid(this.cfg);
      expect(instance).to.exist;
      expect(instance).to.be.an.instanceOf(PlnPrepaid);
      expect(instance.createTransaction).to.exist;
      expect(instance.createTransaction).to.be.a("function");
      expect(instance.queryTransactionDetail).to.exist;
      expect(instance.queryTransactionDetail).to.be.a("function");
    });
  });

  describe("Positive case", function() {
    this.timeout(7000);
    before(function() {
      this.succesOrderId = `prepaid-ok-${moment()
        .valueOf()
        .toString(36)}`;
    });

    it("should result in success inquiry", async function() {
      const instance = new PlnPrepaid(this.cfg);
      const result = await instance.inquiry({
        customer_number: PlnPrepaidSandboxEnum["sbox-01428800700"],
        product_id: PlnPrepaidEnum.sandbox
      });
      // console.log(result);
      expect(result).to.not.have.property("error");
      expect(result.status).to.be.eq(true);
      expect(result.response_code).to.be.eq(ResponseCodeEnum.Success);
    });

    it("should create success (pending) transaction", async function() {
      const instance = new PlnPrepaid(this.cfg);
      const result = await instance.createTransaction({
        customer_number: "08123456789",
        meter_number: PlnPrepaidSandboxEnum["sbox-01428800700"],
        product_id: PlnPrepaidEnum.sandbox,
        order_id: this.succesOrderId
      });
      // console.log(result);
      expect(result).to.not.have.property("error");
      expect(result.status).to.be.eq(StatusEnum.pending);
      expect(result.response_code).to.be.oneOf([ResponseCodeEnum.Success, ResponseCodeEnum.Pending]);
      this.trxId = result.transaction_id;
    });

    it("should return success transaction detail", async function() {
      const instance = new PlnPrepaid(this.cfg);
      const result = await instance.queryTransactionDetail(this.trxId);
      // console.log(result);
      expect(result).to.not.have.property("error");
      expect(result.status).to.be.eq(StatusEnum.success);
      expect(result.response_code).to.be.eq(ResponseCodeEnum.Success);
    });
  });

  describe("Negative case", function() {
    before(function() {
      this.failedOrderId = `prepaid-fail-${moment()
        .valueOf()
        .toString(36)}`;
    });
    it("should result in failed inquiry", async function() {
      this.timeout(4000);
      const instance = new PlnPrepaid(this.cfg);
      const result = await instance.inquiry({
        customer_number: PlnPrepaidSandboxEnum["sbox-01428800100"],
        product_id: PlnPrepaidEnum.sandbox
      });
      //   console.log(result);
      expect(result).to.not.have.property("error");
      expect(result.status).to.be.eq(false);
      expect(result.response_code).to.be.oneOf([
        ResponseCodeEnum["Wrong number/ number blocked/ number expired"],
        ResponseCodeEnum["Connection Timeout"],
        ResponseCodeEnum["Provider Cut Off"]
      ]);
    });

    it("should create failed transaction", async function() {
      this.timeout(10000);
      const instance = new PlnPrepaid(this.cfg);
      const result = await instance.createTransaction({
        customer_number: "08123456789",
        meter_number: PlnPrepaidSandboxEnum["sbox-01428800701"],
        product_id: PlnPrepaidEnum.sandbox,
        order_id: this.failedOrderId
      });
      //   console.log(result);
      expect(result).to.not.have.property("error");
      expect(result.status).to.be.eq(StatusEnum.pending);
      expect(result.response_code).to.not.eq(ResponseCodeEnum.Success);
      ////
      const result2 = await instance.queryTransactionDetail(result.transaction_id);
      // console.log(result2);
      expect(result2).to.not.have.property("error");
      expect(result2.status).to.be.eq(StatusEnum.failed);
      expect(result2.response_code).to.not.eq(ResponseCodeEnum.Success);
      ////
    });
  });
});
