let guset_list: string[] = [":ali", ":subhan", ":farhan", ":hina", ":ayesha"];
// for(let i=0; i<guset_list.length ;i++){
//     console.log('Assalam e walikum' + guset_list[i] +',\nwe invited you on dinner tomorrow.\n Thank you\n');
// }
let not_present: string = "hina";
let new_guset: string = ":hafsa";
guset_list[3] = new_guset;
// for(let i=0; i<guset_list.length ;i++){
//     console.log('Assalam e walikum' + guset_list[i] +',\nwe invited you on dinner tomorrow.\n Thank you\n');
// }
// console.log(`Mrs. ${not_present} will not coming tomorrow dinner. `);
guset_list.unshift(":shahmeer", ":waleed", ":hamza");
// for(let i=0; i<guset_list.length ;i++){
//     console.log('Assalam e walikum' + guset_list[i] +',\nwe invited you on dinner tomorrow. we found big table so we decide to invite 3 more guset\n Thank you\n');
// }
console.log(
  "\nunfortunately we can not arrange big table , only two people allow."
);
while (guset_list.length > 2) {
  let remove_guset = guset_list.pop();
  console.log(
    `Assalam e walikum sorry.${remove_guset} you are not invited for dinner.`
  );
}
for (let i = 0; i < guset_list.length; i++) {
  console.log(
    "Assalam e walikum " +
      guset_list[i] +
      ",\n Yes you are still invited on tmorrow dinner\nThank you\n"
  );
}
guset_list.splice(0, 2);
console.log(guset_list);