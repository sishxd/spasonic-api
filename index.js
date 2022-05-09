const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("json spaces", 1);
require("./api/api")(app);
app.get('/', async (req, res) => {
  res.redirect('https://spasonic.cf');
});
app.get('*', (req, res) => {
  res.status(404).send();
});
app.listen(5000, () => {
  console.log('[^] | API Status: ONLINE')
});
