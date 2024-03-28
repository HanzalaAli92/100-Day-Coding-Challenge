var Laptop = {
    make: "Hp",
    model: "NoteBook",
    year: "2019",
    describe: function () {
        console.log("This is laptop ".concat(this.make, " ").concat(this.model, " ").concat(this.year));
    },
};
Laptop.describe();
