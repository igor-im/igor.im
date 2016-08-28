var React  = require('react');
var ReactDOM  = require('react-dom');
var ReactDOMServer  = require('react-dom/server');
import {PreRender} from './prerender.jsx';

//console.log(ReactDOMServer.renderToString(<PreRender />))

// export const html = ReactDOMServer.renderToString(<PreRender />)

module.exports = {
    html: function() { return ReactDOMServer.renderToString(<PreRender />) }
};