//BOILERPLATE CODE STARTS
const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(expressLayouts);
app.use('/css', express.static(__dirname + 'public/css'));

app.set('view engine', 'ejs');

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
//BOILERPLATE CODE ENDS

app.get('/indexA', (req, res) => {
    const variables = {
      name: "CARL",
      age: 30
    }
    res.render("indexA", variables);
})

app.get('/indexB', (req, res) => {
  const variables = {
    name: "CARL",
    age: 30,
    grocery_list: ['oranges', 'apples', 'chicken', 'cereal']
  }
  res.render("indexB", variables);
})



