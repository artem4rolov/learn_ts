"use strict";
const nums = [1, 2, [1, 2, 3, [1, 3, 2, [2, 1, 2]]]];
nums.push(1);
nums.push([1]);
function isJSON(arg) { }
isJSON(1);
isJSON("dsd");
isJSON(true);
isJSON([true, "1", 2]);
isJSON({ a: [true], b: "1", c: { x: 2 } });
