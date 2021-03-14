// Bitwise AND	
console.log("Bitwise AND:");
var a = 3; // 0011
var b = 5; // 0101

/*
    0011
  & 0101
   -----
    0001
*/
var and_ab = a & b;
console.log(" a & b: "+ and_ab);


// Bitwise OR	
console.log("Bitwise OR:");
var a = 3; // 0011
var b = 5; // 0101

/*
    0011
  | 0101
   -----
    0111
*/
var or_ab = a & b;
console.log(" a | b: "+ or_ab);


// Bitwise XOR	
console.log("Bitwise XOR:");
var a = 3; // 0011
var b = 5; // 0101

/*
    0011
  | 0101
   -----
    0110
*/
var xor_ab = a ^ b;
console.log(" a ^ b: "+ xor_ab);


// Bitwise NOT		
console.log("Bitwise NOT	:");
var a = 5; // 0101
/*
~a = (-1 * (a + 1))
  ~ 00000101 = 1111 1010
  '1111 1010' 2s Complement:
  1111 1010 = 0000 0101
                    + 1
             ----------
              0000 0110   
*/
var not_a = ~a;
console.log(" ~a: "+ not_a);


// Bitwise Left Shift	
console.log("Bitwise Left Shift:");
var a = 3;
// a << p => a *2^p; 
var leftShift = 3 << 1;
console.log("leftShift :"+ leftShift); 

// Bitwise Right Shift	
console.log("Bitwise Right Shift:");
var a = 10;
// a >> p => a / 2^p; 
var rightShift = (a >> 2);
console.log("rightShift :"+ rightShift); 