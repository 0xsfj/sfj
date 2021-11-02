module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/ens',
        destination: 'https://discuss.ens.domains/t/ens-dao-delegate-applications/815/335?u=sfj',
        permanent: true,
      },
    ];
  },
};
