module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'strapi.merakicommerce.com',
    ],
  },
  env: {
    API_URL: process.env.API_URL,
    HOST: process.env.HOST
  },
}
