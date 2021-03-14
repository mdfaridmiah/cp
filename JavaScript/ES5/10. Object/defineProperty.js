// Object.defineProperty(obj, prop, descriptor)

// obj: The object on which to define the property.
// prop: The name or Symbol of the property to be defined or modified.
// descriptor: The descriptor for the property being defined or modified.

const student = {
    firstName: 'Amir'
}

// getting property
Object.defineProperty(student, "getName", {
    get : function () {
        return this.firstName;
    }
});

// setting property
Object.defineProperty(student, "changeName", {
    set : function (value) {
        this.firstName = value;
    }
});

console.log(student.firstName); 

// changing the property value
student.changeName = "Saday";

console.log(student.firstName); 