const mongoose = require('mongoose')

const Programmes = mongoose.model('Programmes',{

	"media_id": any,
	"title": any,
	"description": any,
	"webmedia_title_id": any,
	"start_time": any,
	"end_time": any,
	"human_start_time": String,
	"human_end_time": String,
	"duration_in_minutes": any,
	"live_broadcast": false,
	"custom_info": {
	  "BaseUTCOffset": String,
	  "Graficos": {
		"URL": String ,
		"Trailler": any,
		"ImagemURL": any,
		"PosterURL": any,
		"LogoURL": String,
		"Confronto": {
		  "Oponente": [
			{
			  "Nome": any,
			  "URL": any,
			  "ImagemURL": any
			},
			{
			  "Nome": any,
			  "URL": any,
			  "ImagemURL": any
			}
		  ]
		}
	  },
	  "Resumo": {
		"Sinopse": any,
		"ResumoImprensa": any,
		"Destaque": any
	  },
	  "Elenco": any,
	  "Pais": any,
	  "Classe": "Filme",
	  "TituloOriginal": any,
	  "Dublador": any,
	  "UrlPrograma": any,
	  "Video": "SD",
	  "ClosedCaption": any
	},
	"program": {
	  "id": any,
	  "name": String,
	  "category": any,
	  "parental_guide": any,
	  "webmedia_program_id": any
	}
})

module.exports = Programmes