/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: 'API_URL',
    USERNAME: 'USERNAME',
    PASSWORD: 'PASSWORD',
  }
}

module.exports = nextConfig
