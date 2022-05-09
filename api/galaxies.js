const galaxies = require('../data/galaxies.json');
module.exports = {
  route: '/galaxies',
  run: async (req, res) => {
    res.send(galaxies);
  },
};
