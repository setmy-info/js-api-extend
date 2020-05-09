#!/usr/bin/env node

global.Storage = global.Storage || {prototype: {}};

require('../js/js-api-extend');

const text = "true";
console.log("Value should bee boolean: ", typeof (text.toType()), text.toType());
