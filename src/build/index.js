var fs = require('fs');
var uglify = require("uglify-js");

var Storage = Storage || {};

var code = {
    "js-api-extend.js": fs.readFileSync("./src/main/webapp/js/js-api-extend.js", "utf8")
};

var options = {
    output: {
        comments: /^!/
    }
};

fs.writeFileSync("./src/main/webapp/js/js-api-extend.min.js", uglify.minify(code, options).code, "utf8");

fs.createReadStream("./src/main/webapp/js/js-api-extend.js").pipe(fs.createWriteStream("./dist/js-api-extend.js"));
fs.createReadStream("./src/main/webapp/js/js-api-extend.min.js").pipe(fs.createWriteStream("./dist/js-api-extend.min.js"));
