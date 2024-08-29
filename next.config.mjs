/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.pixabay.com"], // ระบุโดเมนภายนอกที่คุณต้องการอนุญาต
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false, // ตัวอย่างการตั้งค่าสำหรับการหลีกเลี่ยงโมดูลที่ใช้ในฝั่งเซิร์ฟเวอร์
      };
    }
    config.experiments = {
      topLevelAwait: true,
      layers: true,
    };

    return config;
  },
};

export default nextConfig;
