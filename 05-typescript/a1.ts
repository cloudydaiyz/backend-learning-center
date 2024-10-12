import { A1Notation } from "@shogo82148/a1notation";

const range1 = A1Notation.parse("A1:B2");
console.log(JSON.stringify(range1, null, 4));

const range2 = new A1Notation("Sheet1", 1, 1, 12312321, 30);
console.log(range2.toString());