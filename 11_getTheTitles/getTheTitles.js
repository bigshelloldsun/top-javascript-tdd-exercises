const getTheTitles = function(list) {
  let titles = [];
  list.forEach(item => {
    titles.push(item.title);
  });
  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
