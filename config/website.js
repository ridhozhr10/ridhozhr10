const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Ridho Azhar - Web Developer & Tech Enthusiast', // Navigation and Site Title
  siteTitleAlt: 'ridhozhr10 - Web Developer & Tech Enthusiast', // Alternative Site title for SEO
  siteUrl: 'https://ridhozhr10.github.io', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo-1024.png', // Used for SEO and manifest
  siteDescription: `Hey, i\'am ridho azhar, Web developer from Depok, indonesia and this is my profile`,

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@ridhozhr10', // Twitter Username
  ogSiteName: 'ridhozhr10.github.io', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
