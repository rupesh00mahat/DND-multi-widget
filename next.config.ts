import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

module.exports={
  async rewrites(){
    return [
      {
        source: '/api/stoic-quote',
        destination: 'https://stoic.tekloon.net/stoic-quote'
      }
    ]
  }
}

export default nextConfig;
