/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {}, // ❌ 'appDir' 제거
  
    typescript: {
      ignoreBuildErrors: false, // ✅ TypeScript 빌드 오류 무시 방지
    },
  };
  
  module.exports = nextConfig;
  