const express = require('express');
const bodyParser = require('body-parser');

const app = express();
//const index = require('./routers/index-router');
//app.use('/index', index);

let porta = 3000;

const path = require('path')
app.use(express.static(path.join(__dirname, "/public")))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/app/views/pages')
app.use(express.urlencoded())
app.use(express.json())


app.get('/index',(req,res)=>{
	res.render('index.ejs')
})

app.listen(porta, ()=>{
	console.log('Servidor em execução na porta '+ porta);
	console.log('localhost:3000')
})
