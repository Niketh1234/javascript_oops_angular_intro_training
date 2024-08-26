"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stockMarket = /** @class */ (function () {
    function stockMarket() {
        this.name = "valeu";
    }
    stockMarket.prototype.display = function () {
        console.log(this.name);
    };
    return stockMarket;
}());
var sm = new stockMarket();
sm.display();
// console.log(sm.displayStock());
var MutualFund = /** @class */ (function () {
    function MutualFund(fundname, fundcode, broker) {
        this.fundname = fundname;
        this.fundcode = fundcode;
        this.broker = broker;
    }
    MutualFund.prototype.showData = function () {
        console.log(this.fundname + ' ' + this.fundcode + ' ' + this.broker);
    };
    return MutualFund;
}());
new MutualFund('helo', 'ram', 'whow').showData();
