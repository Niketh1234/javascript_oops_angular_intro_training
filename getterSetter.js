var ATM = /** @class */ (function () {
    function ATM() {
        this.variable = "name";
        this.variable = 'random';
    }
    Object.defineProperty(ATM.prototype, "code", {
        get: function () { return this.pincode; },
        set: function (pincode) { this.pincode = pincode; },
        enumerable: false,
        configurable: true
    });
    return ATM;
}());
var pankaj = new ATM();
pankaj.code = 1234;
var peru = pankaj.code;
console.log(peru);
