/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
   
  },
    images: {
      unoptimized: true,
        domains: ["localhost","s3.paperscissorstone.in,webanixsolutions.paperscissorstone.in,beta.curatedlearn.in"], // Add your domain(s) here
      },
}

module.exports = nextConfig
