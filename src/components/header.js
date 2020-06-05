import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import styles from "./header.module.css"

export default () => (
	<header className={styles.siteHeader}>
		<Link to="/" className={styles.siteLogo}>Holmes</Link>
		<nav className={styles.navigation}>
			<StaticQuery
				query={graphql`
					query SiteTitleQuery {
						site {
							siteMetadata {
								title
								menuLinks {
									name
									link
								}
							}		
						}
					}
				`}
				render={data => (
					data.site.siteMetadata.menuLinks.map(link =>
						<Link className={styles.navigationLink} to={link.link}>{link.name}</Link>
					)
				)}
			/>
		</nav>
	</header>
)
