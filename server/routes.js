var blog = require('./dataAccess/blog')

module.exports = (server, prerender) => {
    server.route({
        method: 'GET',
        path: '/',
        handler: (request, reply) => {
            //console.log(prerender.html())
            reply('hello')
        }
    });

    server.route({
        method: 'GET',
        path: '/blog',
        handler: (request, reply) => {
            console.log(prerender.html())
            reply(prerender.html())
        }
    });

    server.route({
        method: 'GET',
        path: '/api/blog/posts',
        handler: (request, reply) => {
            blog.getAllPosts(request.server.plugins['hapi-mongodb'].db).then((data) => {
                console.log('data')
                reply(data);
            }).catch((reason) => {
                console.log(reason)
                console.log('error')
            });
        }
    });

    server.route({
        method: 'GET',
        path: '/api/blog/posts/{postid}',
        handler: (request, reply) => {
            blog.getPostById(request.server.plugins['hapi-mongodb'].db, parseInt(request.params.postid)).then((data) => {
                console.log('data')
                reply(data);
            }).catch((reason) => {
                console.log(reason);
                reply('Server Error').statusCode(500)
            });
        }
    });

    server.route({
        method: 'GET',
        path: '/blog/tags/{tagid?}',
        handler: (request, reply) => {
            console.log(prerender.html())
            reply(prerender.html())
        }
    });

    server.route({
        method: 'GET',
        path: '/blog/categories/{categoryid?}',
        handler: (request, reply) => {
            console.log(prerender.html())
            reply(prerender.html())
        }
    });

    server.route({
        method: 'GET',
        path: '/search',
        handler: (request, reply) => {
            console.log(prerender.html())
            reply(prerender.html())
        }
    });

    server.route({
        method: 'GET',
        path: '/projects',
        handler: (request, reply) => {
            console.log(prerender.html())
            reply(prerender.html())
        }
    });

    server.route({
        method: 'GET',
        path: '/api/projects',
        handler: (request, reply) => {
            console.log(prerender.html())
            reply(prerender.html())
        }
    });

    server.route({
        method: 'GET',
        path: '/contact',
        handler: function (request, reply) {
            reply('contact');
        }
    });

    server.route({
        method: 'GET',
        path: '/interesting-stuff',
        handler: (request, reply) => {
            console.log(prerender.html())
            reply(prerender.html())
        }
    });
};