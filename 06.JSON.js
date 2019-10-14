var example = {
    "stringify" : "please",
    "andParseMe" : "thankYou"
};

var string = JSON.stringify(example);
var parsed = JSON.parse(string);

console.log(string);
console.log(parsed.stringify);

var obj = { test : 'yes' }
var obj2 = JSON.parse(JSON.stringify(obj));
obj2.test = 'no';
console.log(obj2.test)