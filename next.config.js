/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: 'http://vra.local',
    USERNAME: 'vra',
    PASSWORD: 'this.admin',
  }
}

module.exports = nextConfig
