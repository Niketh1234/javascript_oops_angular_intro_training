"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stock = /** @class */ (function () {
    function stock(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    stock.prototype.displayStock = function () {
        return this.id + ' ' + this.name + ' ' + this.price;
    };
    return stock;
}());
exports.default = stock;
