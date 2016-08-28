'use strict';
const Path = require('path');
const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiReactViews = require('hapi-react-views');
const h2o2 = require('h2o2');
require('babel-core/register')({
    presets: ['react', 'es2015'],
    plugins: ["transform-es2015-modules-commonjs", "transform-export-extensions"]
});

const prerender = require('../client/dist/sb.js')
console.log(prerender)

const server = new Hapi.Server();
server.connection({ port: 3001 });
server.register([Inert, Vision, h2o2], (err) => {

    if (err) {
        console.log('Failed to load plugins.');
    }

    // server.views({
    //     engines: {
    //         jsx: HapiReactViews
    //     },
    //     relativeTo: __dirname,
    //     path: __dirname + '/../client/src',
    //     compileOptions: {
    //         renderMethod: 'renderToString',
    //         layoutPath: Path.join(__dirname, 'views'),
    //         layout: 'html'
    //     }
    // });

    server.route({
        method: 'GET',
        path: '/app.js',
        handler: {
            proxy: {
                uri: 'http://localhost:8000/app.js'
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/works',
        handler: (request, reply) => {
            console.log(prerender.html())
            reply(prerender.html())
        }
    });

    require('./routes.js')(server, prerender)

    // server.route({
    //     method: 'GET',
    //     path: '/',
    //     handler: (request, reply) => {
    //
    //         const context = { foo: 'baz' };
    //         context.state = 'window.state = ' + JSON.stringify(context) + ';';
    //
    //         reply.view('App', context);
    //     }
    // });

    server.start((err) => {

        if (err) {
            throw err;
        }

        console.log('Server is listening at ' + server.info.uri);
    });
});