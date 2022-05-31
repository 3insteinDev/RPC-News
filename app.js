const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const cors = require('cors')
const axios = require('axios')
const router = express.Router()
const app = express();


let porta = 3000;

const path = require('path')
app.use(express.static(path.join(__dirname, "/public")))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/app/views/pages')
app.use(express.urlencoded())
app.use(express.json())
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


//Modelo  Programmes criado
const Programmes = mongoose.model('Programme',{

	media_id: Number,
	title: Number,
	description: Number,
	webmedia_title_id: Number,
	start_time: Number,
	end_time: Number,
	human_start_time: String,
	human_end_time: String,
	duration_in_minutes: Number,
	live_broadcast: false,
	custom_info: {
	  BaseUTCOffset: String,
	  Graficos: {
		URL: String ,
		Trailler: Number,
		ImagemURL: Number,
		PosterURL: Number,
		LogoURL: String,
		Confronto: {
		  Oponente: [
			{
			  Nome: Number,
			  URL: Number,
			  ImagemURL: Number
			},
			{
			  Nome: Number,
			  URL: Number,
			  ImagemURL: Number
			}
		  ]
		}
	  },
	  Resumo: {
		Sinopse: Number,
		ResumoImprensa: Number,
		Destaque: Number
	  },
	  Elenco: Number,
	  Pais: Number,
	  Classe: String,
	  TituloOriginal: Number,
	  Dublador: Number,
	  UrlPrograma: Number,
	  Video: String,
	  ClosedCaption: Number
	},
	program: {
	  id: Number,
	  name: String,
	  category: Number,
	  parental_guide: Number,
	  webmedia_program_id: Number
	}
})


//--------------Criando Routers ----------------------

app.get('/index',async(req,res)=>{
	res.render('index.ejs')

	try{
		//response é a resposta do axio Mas eu tiro o data de dentro do response 
	const {data} = await axios('https://epg-api.video.globo.com/programmes/1337?date=2022-05-20')

	//------testando recebimento da data"conteudo da axios" -------------
	console.log("imprimindo a data recebida " + data)

	//------testando rescebimento da data.programme -------------
	var jsonRecebido = []
	jsonRecebido= data.programme
	console.log("imprimindo o json recebido " + jsonRecebido)

	//------testando rescebimento da data.programme.entries -------------
	
	var listaDoDia = []
	listaDoDia = jsonRecebido.entries
	console.log("imprimindo a lista do dia " + listaDoDia)
		for (i=0; i< listaDoDia.length; i++){
			var programme = new Programmes
			
			programme = listaDoDia[i]
			//------testando rescebimento da data.programme.entries[i]-------------
			console.log("imprimindo cada programe: " + i  + programme)
			
		}	
	}catch(error){
		console.error(error)
	}
	
})

app.listen(porta, ()=>{
	console.log(`Running in http://localhost:${porta}`);
})




