var blog = require('./dataAccess/blog')
var projects = require('./dataAccess/projects')

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
            blog.getAllPosts(request.server.plugins['hapi-mongodb'].db[0]).then((data) => {
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
            blog.getPostById(request.server.plugins['hapi-mongodb'].db[0], parseInt(request.params.postid)).then((data) => {
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
            projects.getAllProjects(request.server.plugins['hapi-mongodb'].db[1]).then((data) => {
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
        path: '/api/projects/{projectid}',
        handler: (request, reply) => {
            projects.getProjectById(request.server.plugins['hapi-mongodb'].db[1], parseInt(request.params.projectid)).then((data) => {
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