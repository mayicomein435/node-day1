const fs = require("fs")

fs.writeFileSync(`${Date.now().toString()}.txt`,`${Date.now()}`);
console.log("file written")
