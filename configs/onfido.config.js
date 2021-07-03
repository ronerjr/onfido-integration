const { Onfido, Region } = require("@onfido/api");
require('dotenv/config');

const onfido = new Onfido({
    apiToken: process.env.ONFIDO_API_TOKEN,
    // Supports Region.EU, Region.US and Region.CA
    region: Region.EU
});

setup = () => {
    return onfido;
}

module.exports = {
    setup
}
