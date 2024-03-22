function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich order:");
    for (var i = 0; i < items.length; i++) {
        console.log("-  ".concat(items[i]));
    }
}
console.log("enjoy your sandwich sir/madam");
sandwich('chicken', 'cheese', 'bacon');
sandwich('turkey', 'avocado');
sandwich('beef', 'lettuce', 'tomato');
