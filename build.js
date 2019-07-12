var fs = require('fs');
var uglify = require("uglify-js");

var sourceFileName = "js-api-extend.js";
var minifiedFileName = "js-api-extend.min.js";
var sourcePath = "./src/main/webapp/js/" + sourceFileName;
var minifiedPath = "./src/main/webapp/js/" + minifiedFileName;

var code = {
    sourceFileName: fs.readFileSync(sourcePath, "utf8")
};

var options = {
    output: {
        comments: /^!/
    }
};

fs.writeFileSync(minifiedPath, uglify.minify(code, options).code, "utf8");

fs.createReadStream(sourcePath).pipe(fs.createWriteStream("./dist/" + sourceFileName));
fs.createReadStream(minifiedPath).pipe(fs.createWriteStream("./dist/" + minifiedFileName));
