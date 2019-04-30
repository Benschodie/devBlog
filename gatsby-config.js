module.exports = {

  siteMetadata: {
    title: 'Life of a Noob',
    author: 'Benjamin Konopka'
  },

  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark'
  ]
}