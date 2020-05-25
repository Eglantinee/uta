let tokenize = require("../src/tokenizer")
let tone  = require('../src/routes/tone')

expect.extend(require("./util"))

const input1 = "Наразі в Україні тепла погода."
const input2 = "У середині жовтня – посеред усього того аномального тепла – синоптики спрогнозували Україні НАЙХОЛОДНІШУ зиму за останні 30 років"
const input3 = "Вона сильно любила життя - світле, радісне, сповнене сонцем бажаної роботи. Її зовсім любов не знала меж."

describe('Tonality test', () => {
	
	test('get neutral as None', () => {
	  return tokenize(input1).then(res => {
	    expect(tone(res)).toEqual("neutral");
	  });
	});

	test('get negative tonality', () => {
	  return tokenize(input2).then(res => {
	    expect(tone(res)).toEqual("negative");
	  });
	});

	test('get positive tonality', () => {
	  return tokenize(input3).then(res => {
	    expect(tone(res)).toEqual("positive");
	  });
	});

	test('expect vesum interpretation', () => {
	  return tokenize(s[1]).then(res => {
	    expect(res[0].interpretation).toBeDefined();
	    expect(res[0].interpretation).toBeArray();
	    expect(res[0].interpretation).toHaveLength(6);
	  });
	});

	test("direct test", () => {
		expect(tone( [
      {
        token: 'UK',
        value: 'Наразі',
        span: { start: 0, length: 6 },
        interpretation: [ [Object] ],
        tone: 2
      }])).toEqual("positive");
	});
})
