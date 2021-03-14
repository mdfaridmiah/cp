// Object.assign(dest, [src1, src2, src3...])


var user = { name: "Arif" };

var permissions1 = { canView: true };
var permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

console.log(user);