import parser from "aws-cron-parser";

const interval = parser.parse("0 13 * * ? *");
const nxt = parser.next(interval, new Date());
const nxt2 = parser.next(interval, nxt);

console.log(nxt.toString());
console.log(nxt2.toString());

console.log("In UTC:");
console.log(nxt.toUTCString());
console.log(nxt2.toUTCString());