function makeShrit(size, text) {
    if (size === void 0) { size = 'largr'; }
    if (text === void 0) { text = 'i love coding'; }
    console.log("you have order a ".concat(size, ", shirt that says ").concat(text));
}
makeShrit();
makeShrit('medium');
//different message
makeShrit('small', 'this is my first project in typescript');
