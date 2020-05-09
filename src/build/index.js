let fs = require('fs');
let uglify = require("uglify-js");

let code = {
    "js-api-extend.js": fs.readFileSync("./src/main/webapp/js/js-api-extend.js", "utf8")
};

let options = {
    output: {
        comments: /^!/
    }
};

fs.writeFileSync("./src/main/webapp/js/js-api-extend.min.js", uglify.minify(code, options).code, "utf8");

fs.createReadStream("./src/main/webapp/js/js-api-extend.js").pipe(fs.createWriteStream("./dist/js-api-extend.js"));
