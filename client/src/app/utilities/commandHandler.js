import { browserHistory } from 'react-router'

export default function commandHandler(data) {
	function parser(data) {
		let tokens = data.split(/(navigate|go\s?to|take\s?me\s?to)/)
		navigate(tokens)
	}
	function navigate(tokens) {
		browserHistory.push(/(blog|home|projects)/.exec(tokens[tokens.length -1])[1])
	}
	parser(data)
	console.log(data)
}