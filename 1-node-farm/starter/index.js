const hello = "Hello There";
console.log(hello);

const fs = require("fs");

const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);
const textOut = `Test : ${textIn}`;
fs.writeFileSync("./txt/output.txt", textOut);
console.log("Written");
