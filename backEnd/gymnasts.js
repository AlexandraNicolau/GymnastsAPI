var gymnasts = [
  {
    firstName: "Nadia",
    lastName: "Comaneci",
    skill: "uneven bars champion",
    country: "Romania"
  },
  {
    firstName: "Catalina",
    lastName: "Ponor",
    skill: "onodi to back handspring",
    country: "Romania"
  },
  {
    firstName: "Larisa",
    lastName: "Iordache",
    skill: "three-and-a-half twist",
    country: "Romania"
  },
  {
    firstName: "Alyia",
    lastName: "Mustafina",
    skill: "1 1/2 twisting double back",
    country: "Russia"
  },
  {
    firstName: "Angelina",
    lastName: "Melnikova",
    skill: "DTY",
    country: "Russia"
  }
];

const getGymnasts = function() {
  return gymnasts;
};

const getSpecificGymnast = function(name) {
  var findGymnast = gymnasts.find(function(gymnast) {
    return gymnast.firstName === name;
  });

  return findGymnast;
};

// var larisa = getSpecificGymnast("Catalina");

// console.log(larisa);

//FIND
// var found = array1.find(function(element) {
//   return element > 10;
// });

// const result = words.filter(word => word.length > 6);

// return gymnasts.filter(function (gymnast) {
//     return gymnast.firstName === name;
// });

module.exports = {
  getGymnasts: getGymnasts,
  getSpecificGymnast: getSpecificGymnast
};
