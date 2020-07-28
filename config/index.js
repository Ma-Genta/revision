require('dotenv').config();

const config = {
    dev: process.env.NODE_ENV != 'production',
    port: process.env.PORT || 3000,
    cors: process.env.CORS,
    uri: process.env.URI,
    auth: process.env.AUTH_JWT_SECRET,
    defaultAdminPassword: process.env.DEFAULT_ADMIN_PASSWORD,
    defaultUserPassword: process.env.DEFAULT_USER_PASSWORD,
    publicToken: process.env.PUBLIC_API_KEY_TOKEN,
    adminToken: process.env.ADMIN_API_KEY_TOKEN,
};

module.exports = { config };