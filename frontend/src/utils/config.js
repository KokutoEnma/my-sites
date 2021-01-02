
export const urls = {
    frontend: process.env.ENVIRONMENT === 'production' ? 'www.shaw-yu.com' : 'localhost:3000',
    backend: process.env.ENVIRONMENT === 'production' ? 'www.shaw-yu.com' : 'localhost:8000',
}
