import { browserHistory } from 'react-router'

export default function commandHandler(data) {
	function parser(data) {
		let tokens = data.split(/(navigate|go\s?to|take\s?me\s?to)/)
		navigate(tokens)
	}
	function navigate(tokens) {
		var route = /(blog|home|projects)/.exec(tokens[tokens.length -1])
		if(route === null) return false;
		if(/(home)/.test(tokens[tokens.length -1])) { 
			browserHistory.push('/')
			return;
		}
		browserHistory.push(/(blog|projects)/.exec(tokens[tokens.length -1])[1])
	}
	parser(data)
	console.log(data)
}