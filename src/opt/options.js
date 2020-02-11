const fs = require('fs');
const configPath = __dirname+'/options.json';
const parsed = JSON.parse(fs.readFileSync(configPath, 'UTF-8'));

module.exports = {
    HOST_FULL: parsed.HOST_FULL,
    host: parsed.HOST,
    user: parsed.user,
    password: parsed.password
};