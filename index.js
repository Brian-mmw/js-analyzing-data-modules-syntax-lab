const datejs = require('datejs');

function combineUsers(...args) {
  const combinedObject = {
    users: []
  };

  for (const array of args) {
    combinedObject.users = [...combinedObject.users, ...array];
  }

  // Gets today's date in M/d/yyyy format
  combinedObject.merge_date = new Date().toString('M/d/yyyy');

  return combinedObject;
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};

