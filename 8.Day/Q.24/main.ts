let name_1 : string = "Muhammad Hanzala Ali"
let name_2 : string = "Muhammad Hanzala"
let name_3 : string = "Hanzala Ali"

if (name_1 == name_3){
    console.log("The names are equal")
 } else {
    console.log("The names are equal")
}
if (name_1 != name_2) {
    console.log("Name 1 and Name 2 are different")
}

let age_1 : number  = 18
let age_2 : number  = 20

if(age_1 == 18){
    console.log("eligible for vote")
}
if(age_1 != 20){
    console.log("eligible for vote in older category")
}
if (age_1 <= age_2) {
   console.log("Younger")
}
if (age_2 >= age_1) {
    console.log("Older")
 }
if (age_1 == 18 && age_2 == 22){
    console.log("person is eligible not for vote")
}
if (age_1 == 18 || age_2 != 22){
    console.log("person is eligible not for vote")
}
let Country : string [] = ["Pakistan","India","japan","china"]
if (Country .indexOf("Pakistan")){
    console.log("Pakistan is in country list")
}
let Countrys : string [] = ["Pakistan","India","japan","china"]
if (Countrys .indexOf("america")){
    console.log("America is not include in an array")
}