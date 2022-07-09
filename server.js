const express = require("express");
const HTTP = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');

console.log('This is Server.js');

// enable CORS
const app = express();
const PORT = 3001;

app.unsubscribe(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });


  // parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// define a root route
app.get("/", (req, res) => {
  res.send("Hello World");
});

const mercadoLibre = require("./src/routes/items.routes");
app.use("/api/v1/mercadolibre", mercadoLibre);

var httpServer = HTTP.createServer(app);

httpServer.listen(PORT, () => {
  console.log(`Server http is listen on port => ${PORT}`);
});