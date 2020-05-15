/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
	  title: 'Gatsby Default Starter',
	    menuLinks:[
	      {
	         name:'home',
	         link:'/'
	      },
	      {
	         name:'page2',
	         link:'/page-2'
	      }
	    ]
	  },
	  plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `markdown-pages`,
				path: `${__dirname}/src/markdown-pages`,
			},
		},
		`gatsby-transformer-remark`,
		`gatsby-plugin-netlify-cms`
	]
	
}
