/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: 'Gatsby Default Starter',
        menuLinks: [
            {
                name: 'About',
                link: '/'
            },
            {
                name: 'Solutions',
                link: '/'
            }, 
            {
                name: 'References',
                link: '/'
            },
            {
                name: 'Blog',
                link: '/blog'
            },
            {
                name: 'Contact',
                link: '/'
            },
            {
                name: 'Careers',
                link: '/'
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
		 {
			 resolve: `gatsby-source-filesystem`,
			 options: {
				 name: `netlify-config`,
				 path: `${__dirname}/src/netlify-config`,
			 },
		 },
        `gatsby-transformer-remark`,
		  `gatsby-plugin-netlify-cms`,
		  `gatsby-transformer-json`
    ]
}
