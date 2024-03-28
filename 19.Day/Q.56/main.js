var mixedArray = [1, "mango", 2, "apple", true, "banana"];
var stringArray = mixedArray.filter(function (item) { return typeof item === "string"; });
console.log(stringArray);
