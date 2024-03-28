let mixedArray  = [1, "mango", 2,"apple", true , "banana"];

let stringArray = mixedArray.filter(item  => typeof item === "string");
console.log(stringArray);