function make_great2(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + " the Great");
    }
    return greatMagicians;
}
var magicians3 = ["faraz", "usman", "haseeb"];
var greatMagicians2 = make_great2(magicians3);
console.log(magicians3);
console.log(greatMagicians2);
