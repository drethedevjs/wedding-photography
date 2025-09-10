export default function sitemap() {
  return [
    {
      url: "https://covenantlx.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1
    },
    {
      url: "https://covenantlx.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: "https://covenantlx.com/portfolio",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: "https://covenantlx.com/investment",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: "https://covenantlx.com/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6
    }
    // // Add portfolio galleries if you have separate pages
    // {
    //   url: 'https://covenantlx.com/portfolio/weddings',
    //   lastModified: new Date(),
    //   changeFrequency: 'weekly',
    //   priority: 0.8,
    // },
    // {
    //   url: 'https://covenantlx.com/portfolio/engagements',
    //   lastModified: new Date(),
    //   changeFrequency: 'weekly',
    //   priority: 0.8,
    // },
  ];
}
