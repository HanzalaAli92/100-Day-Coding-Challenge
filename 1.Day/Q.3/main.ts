//lower case
let personName = "Hanzala";

console.log("lowercase:", personName.toLowerCase());
// upper case
// let personName: string="HANZALA"
console.log("uppercase:", personName.toLocaleUpperCase());
// Title case
// let personName: string="hanzala"
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));