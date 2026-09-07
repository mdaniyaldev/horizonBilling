export const robots = {
  rules: {
    userAgent: '*',
    disallow: '/',
  },
};

export default function robotsConfig() {
  return robots;
}
