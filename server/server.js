'use strict';
const Path = require('path');
const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiReactViews = require('hapi-react-views');
const h2o2 = require('h2o2');
const corsHeaders = require('hapi-cors-headers')
require('babel-core/register')({
    presets: ['react', 'es2015'],
    plugins: ["transform-es2015-modules-commonjs"]
});

// const prerender = require('../client/dist/sb.js')
// console.log(prerender)
var dbOpts = [
    {
        "url": "mongodb://mongo:27017/blog",
        "settings": {
            "db": {
                "native_parser": false
            },
            "server": {
                poolSize: 5
            }
        }
    },
    {
        "url": "mongodb://mongo:27017/projects",
        "settings": {
            "db": {
                "native_parser": false
            },
            "server": {
                poolSize: 5
            }
        }
    }
];
const server = new Hapi.Server();
server.connection({ port: 3001});
server.ext('onPreResponse', corsHeaders);
server.register([Inert, Vision, h2o2, {
    register: require('hapi-mongodb'),
    options: dbOpts
}], (err) => {

    if (err) {
        console.log('Failed to load plugins.');
        console.log(err)
    }

    server.route({
        method: 'GET',
        path: '/app.js',
        handler: {
            proxy: {
                uri: 'http://localhost:8000/app.js'
            }
        }
    });

    require('./routes.js')(server)

    server.start((err) => {

        if (err) {
            throw err;
        }

        console.log('Server is listening at ' + server.info.uri);
    });
});