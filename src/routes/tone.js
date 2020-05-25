var dict ={"дуже":1.15, "зовсім":1.20}

function tone(data){
	var sum = 0
	var tone = 0
	var result = 0
	var coeff = 1
	var res_msg = ""
	for (var item of data){
		// console.log(item)
		var tmp = item.tone
		tmp *= coeff
		coeff = 1
		if (typeof(item.interpretation) == "object"){
			var names = item.interpretation.map(
				function (list){
				return list.mainForm
				})
			if (Object.keys(dict).includes(names[0]) == true){
				coeff = dict[names[0]]
				// console.log(coeff)
			}
		}
		if (item.tone != 0){
			sum ++
			tone += tmp
		}
	}
	result = tone / sum
	// console.log(result)
	if (result >= 0.5 && result < 1.5){
		res_msg = "neutral"
	} else if (result >1.5 ){
		res_msg = "positive"
	} else if (result < 0.5){
		res_msg = "negative"
	} else {
		res_msg = "neutral"
	}
	return res_msg
}

/**
 * Модуль для аналізу тонольності тексту.
 * @module tone
 */

/**
 * Повертає тональність тексту.
 * @param {string} input - Вхідний текст.
 * @return {string} Повертає тональність тексту (positive, negative or neutral)
*/

module.exports = tone;


