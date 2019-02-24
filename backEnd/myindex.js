const express = require("express");
const PORT = 3400;
const library = require("./gymnasts");

const app = express();

app.get("/gymnasts", (req, res) => {
  let gymnast = library.getGymnasts();
  res.json(gymnast); // you can also put res.json and put the
});

app.get("/gymnast/:firstName", (req, res) => {
  let firstName = req.params.firstName;
  let specificGymnast = library.getSpecificGymnast(firstName);
  res.json(specificGymnast);

  //   console.log(name);
});

//let library = JSON.parse(artistData);
// res.json(library[number]);
// });//

app.listen(PORT, () => {
  console.log(`I am listening on port ${PORT}`);
});
