'use strict';

/**
 * Module dependencies.
 */

const axios = require('axios');

/**
 * Instances.
 */

const { TOKEN } = process.env;

/**
 * Export builder.
 */

module.exports.default = (event, context, callback) => {
  axios.post(`https://registry.hub.docker.com/u/nunofgs/zenbot/trigger/${TOKEN}/`, { build: true })
    .then(response => callback(null, { status: 'ok' }))
    .catch(error => console.log(error));
};
