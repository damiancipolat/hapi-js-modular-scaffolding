const routes = require('./routes');

//Create the plugin in happi style.
const plugin = {
    pkg: require('../../package.json'),
    name: 'auth-module', 
    version: '0.0.1',
    register: async function (server, options) {
        server.route(routes);
    }
};

module.exports = plugin;