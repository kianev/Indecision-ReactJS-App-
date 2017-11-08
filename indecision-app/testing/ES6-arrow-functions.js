 function square(x) {
  return x * x;
}

//all arrow functions are anonymous
const squareArrow = (x) => x * x;
console.log(squareArrow(5));

const fullName = "Pesho Goshev";

const getfirstname = (name) => name.split(' ')[0];
 console.log(getfirstname(fullName));
