const getTheTitles = function(list) {
  let titles = [];
  list.filter(item => titles.push(item.title));
  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
