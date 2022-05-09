const fs = require("fs");

const apiR = (app) => {
  fs.readdirSync(__dirname).forEach((files) => {
    if(files === 'api.js') return;
    let fileNames = files.substr(0, files.indexOf('.'));
    const endpoint = require(`./${fileNames}`);
    app.get(endpoint.route, (req, res) => {
      endpoint.run(req, res);
    });
  });
};

module.exports = apiR;
