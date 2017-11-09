class Person {
 constructor (name = 'Anonymous', age = 0){
   this.name = name;
   this.age = age;
 }
 getGreeting(){
   return `Hi. I am ${this.name}!`;
 }

 getDescription(){
   return `${this.name} is ${this.age} year(s) old.`;
 }
}

class Student extends Person{
  constructor (name, age, major){
   super(name, age);
   this.major = major;
 }
 hasMajor(){
   return !!this.major;
 }

 getDescription(){
  let description = super.getDescription();
  if(this.hasMajor()){
    description = description += ` His major is: ${this.major}.`
  }
  return description;
 }
}

class Traveler extends Person{
  constructor (name, age, location){
    super(name, age);
    this.location = location;
  }

  hasLocation(){
    return !!this.location;
  }

  getGreeting(){
    let greeting = super.getGreeting();
    if(this.hasLocation()){
      greeting = greeting + `I am visiting from ${this.location}.`;
    }
    return greeting;
  }
}

const me = new Traveler('Pesho Goshev', 26, 'Plovdiv');
const other = new Traveler(undefined, undefined, 'Nowhere');

console.log(me.getGreeting());
console.log(other.getGreeting());
