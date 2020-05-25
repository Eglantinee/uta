let tokeize = require("../tokenizer")
const tonality = require('./tone')

module.exports = {
	route: "/tonality_module",
	handler: (req, res) => {
		tokeize(req.body.text)
			.then(tokens => {
				res.send({tone:tonality(tokens)})
			})
	}
}

