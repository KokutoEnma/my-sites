module.exports = {
    client: process.env.NODE_ENV === 'production' ? 'www.shaw-yu.com' : 'localhost:3000',
    server: process.env.NODE_ENV === 'production' ? 'www.shaw-yu.com' : 'localhost:8000',
}