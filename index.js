const express = require('express')
const app = express()

const mysql = require('mysql');
var connection = mysql.createConnection({
  user:'root',
    password: 'root',
  database : 'test'
});
 
connection.connect();


const { engine } = require ('express-handlebars');


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
  console.log('enter')
  connection.query('SELECT * FROM computer', function (error, results, fields) {
      if (error) throw error;
      console.log(results);
      res.render('home',{ results})
    });

});

app.listen(3001);
 


console.log('Listen: http://localhost:3001')