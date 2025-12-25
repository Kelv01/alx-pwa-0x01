import type { NextConfig } from "next";
import withPWAInit from "@ducanh2912/next-pwa";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images:{
    domains: ['m.media-amazon.com']
  }
};

const withPWA = withPWAInit({
  dest: 'public'
})



export default ({
  ...nextConfig
});
