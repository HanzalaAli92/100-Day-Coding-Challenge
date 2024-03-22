var guset_list = [":ali", ":subhan", ":farhan", ":hina", ":ayesha"];
for (var i = 0; i < guset_list.length; i++) {
    console.log('Assalam e walikum' + guset_list[i] + ',\nwe invited you on dinner tomorrow.\n Thank you\n');
}
var not_present = "hina";
var new_guset = ":hafsa";
guset_list[3] = new_guset;
for (var i = 0; i < guset_list.length; i++) {
    console.log("Assalam e walikum" +
        guset_list[i] +
        ",\nwe invited you on dinner tomorrow.\n Thank you\n");
}
console.log("Mrs. ".concat(not_present, " will not coming tomorrow dinner. "));
guset_list.unshift(":shahmeer", ":waleed", ":hamza");
for (var i = 0; i < guset_list.length; i++) {
    console.log("Assalam e walikum" +
        guset_list[i] +
        ",\nwe invited you on dinner tomorrow. we found big table so we decide to invite 3 more guset\n Thank you\n");
}
