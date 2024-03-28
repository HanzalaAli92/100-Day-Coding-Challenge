let  Laptop = {

    make:  "Hp",
    model: "NoteBook",
    year: "2019",
    describe  : function(){
        console.log(`This is laptop ${this.make} ${this.model} ${this.year}`);
    },
};
Laptop.describe(); 