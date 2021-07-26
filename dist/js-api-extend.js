/*!
 * MIT License
 *
 * Copyright (c) 2019-2021 Imre Tabur <imre.tabur@eesti.ee>
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

    String.prototype.contain = String.prototype.contains || function (str) {
        return this.indexOf(str) !== -1;
    };

    String.getRandom = function (length) {
        // TODO : use length for random string lengt to be generated in next releases. Should stay simple
        return Math.random().toString(36).slice(2);
    };

    Array.prototype.clear = function () {
        this.length = 0;
    };

    Array.prototype.insertAt = function (at, anotherArray) {
        var i = at, j;
        if (anotherArray instanceof Array) {
            for (j = 0; j < anotherArray.length; j++, i++) {
                this.splice(i, 0, anotherArray[j]);
            }
        } else {
            this.splice(i, 0, anotherArray);
        }
    };

    Storage.prototype.setObject = function (key, object) {
        this.setItem(key, JSON.stringify(object));
    };

    Storage.prototype.getObject = function (key) {
        var value = this.getItem(key);
        return JSON.parse(value);
    };
})();
