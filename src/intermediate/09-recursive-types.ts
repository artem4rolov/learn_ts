type NestedNumbers = number | NestedNumbers[];

const nums: NestedNumbers = [1, 2, [1, 2, 3, [1, 3, 2, [2, 1, 2]]]];
nums.push(1);
nums.push([1]);
// nums.push(false); -> false

// JSON
type JSONPrimitive = string | number | boolean | null;
type JSONObject = { [k: string]: JSONValue };
type JSONArray = JSONValue[];
type JSONValue = JSONPrimitive | JSONObject | JSONArray;

function isJSON(arg: JSONValue) {}

isJSON(1);
isJSON("dsd");
isJSON(true);
isJSON([true, "1", 2]);
isJSON({ a: [true], b: "1", c: { x: 2 } });
