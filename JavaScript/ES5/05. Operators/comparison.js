// Is equal to	
console.log("Is equal to:");
var n1 = 10;
var n2 = 10;
if(n1 == n2){
    console.log("n1 and n2 are Equal");
}


// Identical (equal and of same type)	
console.log("Identical (equal and of same type):");
var n1 = 10;
var n2 = 10n;
var n3 = 10n;
if(n1 === n2){
    console.log("n1 and n2 are Equal");
}
if(n2 === n3){
    console.log("n2 and n3 are Equal and same Type");
}


// Not equal to
console.log("Not equal to:");
var n1 = 10;
var n2 = 20;
if(n1 != n2){
    console.log("n1 and n2 are Not Equal");
}

// Not Identical	
console.log("Not Identical:");
console.log("Identical (equal and of same type):");
var n1 = 10;
var n2 = 10n;
var n3 = 20n;
if(n1 !== n2){
    console.log("n1 and n2 are Equal But not same Type");
}
if(n2 !== n3){
    console.log("n2 and n3 are Equal and same Type");
}

// Greater than	
console.log("Greater than:")
 var n1 = 10;
 var n2 = 20;
 if(n1 < n2){
     console.log("n2 Greater than n1");
 }


//  Greater than or equal to
console.log("Greater than or equal to:");
 var n1 = 10;
 var n2 = 10;
 if(n1 <= n2){
     console.log("n2 Greater than or equal to n1");
 }

 // Less than		
console.log("Less than:");
var n1 = 20;
var n2 = 10;
if(n1 > n2){
    console.log("n2 Less than n1");
}

// Less than or equal to

console.log("Less than or equal to:");
var n1 = 20;
var n2 = 10;
if(n1 >= n2){
    console.log("n2 Less than or equal to n1");
}






