/*!
 * MIT License
 *
 * Copyright (c) 2019 Imre Tabur <imre.tabur@eesti.ee>
 */
"use strict";

(function () {

    String.INTEGER_TYPE = 0;
    String.FLOAT_TYPE = 1;

    String.prototype.getNumberType = function () {
        if (this.isNumber()) {
            if (this.indexOf(".") >= 0) {
                return String.FLOAT_TYPE;
            } else {
                return String.INTEGER_TYPE;
            }
        }
        return -1;
    };

    String.prototype.toNumber = function () {
        switch (this.getNumberType()) {
            case String.INTEGER_TYPE:
                return parseInt(this);
            case String.FLOAT_TYPE:
                return parseFloat(this);
        }
    };

    String.prototype.toBoolean = function () {
        var lowerCase = this.toLowerCase();
        if (lowerCase === 'true' || lowerCase === 'yes') {
            return true;
        } else if (lowerCase === 'false' || lowerCase === 'no') {
            return false;
        }
    };

    String.prototype.isNumber = function () {
        return !this.isNaN();
    };

    String.prototype.isNaN = function () {
        return isNaN(this);
    };

    String.prototype.toType = function () {
        var result = this.toNumber();
        if (typeof (result) !== 'undefined') {
            return result;
        }
        result = this.toBoolean();
        if (typeof (result) !== 'undefined') {
            return result;
        }
        return this;
    };

    Array.prototype.clear = function () {
        this.length = 0;
    };

    Array.prototype.insertAt = function (at, anotherArray) {
        this.splice(at, 0, ...anotherArray);
    };

})();
