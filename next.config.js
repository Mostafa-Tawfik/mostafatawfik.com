module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/portfolio': { page: '/portfolio' },
      '/portfolio/myreads': { page: '/portfolio/[projectpath]'},
      '/portfolio/mywebsite': { page: '/portfolio/[projectpath]'},
      '/portfolio/dynamiclandingpage': { page: '/portfolio/[projectpath]'},
      '/portfolio/weatherjournalapp': { page: '/portfolio/[projectpath]'},
      '/portfolio/mygames': { page: '/portfolio/[projectpath]'},
      '/contact': { page: '/contact' },
    }
  },
  // images: {
  //   domains: ['assets.vercel.com'],
  //   formats: ['image/png', 'image/webp'],
  // },
}
