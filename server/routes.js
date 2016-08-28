module.exports = (server, prerender) => {
    server.route({
        method: 'GET',
        path: '/',
        handler: (request, reply) => {
            console.log(prerender.html())
            reply(prerender.html())
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
        path: '/blog/posts/{postid?}',
        handler: (request, reply) => {
            console.log(prerender.html())
            reply(prerender.html())
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