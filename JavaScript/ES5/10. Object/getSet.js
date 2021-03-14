const student = {

    // data property
    firstName: 'Amir',
    
    // accessor property(getter)
    get getName() {
        return this.firstName;
    },

    set changeName(newName) {
        this.firstName = newName;
    }

};

// accessing data property
console.log(student.firstName); 

// accessing getter methods
console.log(student.getName); 

// trying to access as a method
// console.log(student.getName());


student.changeName = 'Saday';
console.log(student.firstName);
