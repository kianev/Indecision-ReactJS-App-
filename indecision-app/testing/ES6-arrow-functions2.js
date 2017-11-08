//argument object no logner bound with arrow functions
//this no longer bount with arrow functions

const add = (a , b) => {
  return a + b;
}

//console.log(add(55, 1, 100));

const user = {
  name: "Pesho",
  cities: ["Plovdiv", "Sofia", "Pernik"],
  placesLived: function () {
    const that = this;
    this.cities.forEach(function (city) {
      console.log(that.name + " has lived in " + city)
    })
  }
}
//user.placesLived();

//there is no bounding with arrow function
const user1 = {
  name: "Pesho",
  cities: ["Plovdiv", "Sofia", "Pernik"],
  placesLived() {
    return this.cities.map((city) => this.name + " has lived in " + city)
  }
}

//console.log(user1.placesLived());

const multiplier = {
  numbers: [1, 2, 3, 4, 5],
  by: 2,
  multiply(){
    return this.numbers.map((number) => number * this.by)
  }
}

console.log(multiplier.multiply());