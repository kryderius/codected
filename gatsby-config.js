const path = require(`path`);
module.exports = {
  siteMetadata: {
    title: `Codected`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Codected`,
        short_name: `Codected`,
        start_url: `/`,
        background_color: `#fff`,
        icon: `src/assets/images/favicon-32x32.png`,
        icons: [
          {
            src: `src/assets/images/favicon-16x16.png`,
            sizes: `16x16`,
            type: `image/png`,
          },
          {
            src: `src/assets/images/favicon-32x32.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
          {
            src: `src/assets/images/apple-touch-icon.png`,
            sizes: `180x180`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`, `images`),
      },
    },
    "gatsby-plugin-react-helmet",
  ],
};
