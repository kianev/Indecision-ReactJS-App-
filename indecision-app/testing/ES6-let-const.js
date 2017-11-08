//can be redefined
//Can be reasigned
var nameVar = "Ivan";
var nameVar = "Pesho";
//console.log("nameVar: " + nameVar);

//cannot be redefined
//can be reasigned
let nameLet = "Gosho";
nameLet = "Stamat";
//console.log("nameLet: " + nameLet);

//cannot be redefined
//cannot be reasigned
const nameConst = "John";
//console.log("nameConst: " + nameConst);

//Function scope of variable
function getPetname () {
  let petName = "Pisi"; //cannot be accessed from outside the function
  return petName;
}

let petName = getPetname();//can be accessed from outside
//console.log(petName);

//block scope of variable
var fullName = "Pesho Goshev";
let secondName = "";
if(fullName){
  var firstName = fullName.split(' ')[0];
  secondName = fullName.split(' ')[1];
}
console.log(firstName);//var can be accsessed, does not have block scope
console.log(secondName);//let has block scope and cannot be accessed