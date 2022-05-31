const Programmes = require('../models/programmes')

//metodo para renderizar o arquivo index.ejs  e visualizar o index
exports.index = function(req,res){
	res.render('/app/views/pages/index.ejs')
}



