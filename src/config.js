//? Dependencies
require('dotenv').config()

const config = {
    port: process.env.PORT || 9000,
    nodeEnv: process.env.NODE_ENV || 'development',
    jwtSecret: process.env.JWT_SECRET,
    db: {
        host: process.env.DB_HOST || 'localhost',
        userName: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASS,
        name: process.env.DB_NAME 
    }
}

module.exports = config