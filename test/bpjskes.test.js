//@ts-check
const { expect } = require("chai");
const dotEnv = require("dotenv");
const moment = require("moment");
const { Config, BpjsKesehatan, BpjsKesSandboxEnum, StatusEnum, ResponseCodeEnum } = require("../dist/index");

dotEnv.config();
const USER = process.env.ALTERRA_USER;
const PASS = process.env.ALTERRA_PASS;
const URL = process.env.ALTERRA_URL;

describe("PlnPostpaid Class test", function() {
  before("Config setup", function() {
    this.cfg = new Config(URL, USER, PASS);
  });

  describe("Basic", function() {
    it("should have proper create and query methods ", function() {
      const instance = new BpjsKesehatan(this.cfg);
      expect(instance).to.exist;
      expect(instance).to.be.an.instanceOf(BpjsKesehatan);
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
      const instance = new BpjsKesehatan(this.cfg);
      const result = await instance.inquiry({
        customer_number: BpjsKesSandboxEnum["sbox-71801"],
        payment_period: "01",
        product_id: 34
      });
      // console.log(result);
      expect(result).to.not.have.property("error");
      expect(result.status).to.be.eq(true);
      expect(result.response_code).to.be.eq(ResponseCodeEnum.Success);
    });

    it("should create success (pending) transaction", async function() {
      const instance = new BpjsKesehatan(this.cfg);
      const result = await instance.createTransaction({
        customer_number: BpjsKesSandboxEnum["sbox-71801"],
        payment_period: "01",
        product_id: 34,
        order_id: this.succesOrderId
      });
      // console.log(result);
      expect(result).to.not.have.property("error");
      expect(result.status).to.be.eq(StatusEnum.pending);
      expect(result.response_code).to.be.oneOf([ResponseCodeEnum.Success, ResponseCodeEnum.Pending]);
      this.trxId = result.transaction_id;
    });

    it("should return success transaction detail", async function() {
      const instance = new BpjsKesehatan(this.cfg);
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
      const instance = new BpjsKesehatan(this.cfg);
      const result = await instance.inquiry({
        customer_number: BpjsKesSandboxEnum["sbox-71800"],
        product_id: 34,
        payment_period: "01"
      });
      //   console.log(result);
      expect(result).to.not.have.property("error");
      expect(result.status).to.be.eq(false);
      expect(result.response_code).to.be.oneOf([
        ResponseCodeEnum["Wrong number/ number blocked/ number expired"],
        ResponseCodeEnum["Connection Timeout"],
        ResponseCodeEnum["Provider Cut Off"],
        ResponseCodeEnum["Bill Already Paid/ Not Available"]
      ]);
    });
  });
});
