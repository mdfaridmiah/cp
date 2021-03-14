var person = {
    name: 'Amir',
    age: 28,

    // accessing name property by using this.name
    greet: function() { console.log('The name is' + ' ' + this.name); }
};

person.greet();



var person = {

    name : "Arif",
    getname : function(){
        var catchThis = this;
        var name = "Hi";
        function findName(){
            console.log(catchThis.name);
        }
        findName();
    }

};

person.getname();
