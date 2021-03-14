function changeFirstName(per){
    per.firstName = "Arif";
}

var person = { firstName : "Adnan" };
var temp = person;
changeFirstName(person)    
console.log(person.firstName + " " + temp.firstName)
