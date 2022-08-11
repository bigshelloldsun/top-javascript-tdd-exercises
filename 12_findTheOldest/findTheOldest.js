const findTheOldest = function(list) {
  const calcAge = (person) => {
    const currentYear = new Date().getFullYear();
    return !person.yearOfDeath ? currentYear - person.yearOfBirth : person.yearOfDeath - person.yearOfBirth;
  };

  return list.reduce(function(oldest, person) {
    return calcAge(oldest) > calcAge(person) ? oldest : person;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
