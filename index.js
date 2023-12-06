const express = require('express')
const app = express()

const mysql = require('mysql');
var connection = mysql.createConnection({
    password: 'password',
  database : 'test'
});
 
connection.connect();


import { engine } from 'express-handlebars';


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000);
 


app.get('/', function (req, res) {
    connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0].solution);
      });
  res.send('Hello World')
})

app.listen(3000)