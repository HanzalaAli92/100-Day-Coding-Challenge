let guset_list: string[] = [":ali", ":subhan", ":farhan", ":hina", ":ayesha"];
for (let i = 0; i < guset_list.length; i++) {
  console.log(
    "Assalam e walikum" +
      guset_list[i] +
      ",\nwe invited you on dinner tomorrow.\n Thank you\n"
  );
}
let not_present: string = "hina";
let new_guset: string = ":hafsa";
guset_list[3] = new_guset;
for (let i = 0; i < guset_list.length; i++) {
  console.log(
    "Assalam e walikum" +
      guset_list[i] +
      ",\nwe invited you on dinner tomorrow.\n Thank you\n"
  );
}
console.log(`Mrs. ${not_present} will not coming tomorrow dinner. `);