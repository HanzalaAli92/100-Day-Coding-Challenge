function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' the great';
    }
}
var magicians2 = ["abbas", "jawwad", "faraz"];
make_great(magicians2);
console.log(magicians2);
