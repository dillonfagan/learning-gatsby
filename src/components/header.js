import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import DropdownLink from "./dropdown-link"
import styles from "./header.module.css"

export default () => (
	<header className={styles.siteHeader}>
		<Link to="/" className={styles.siteLogo}>Holmes</Link>
		<nav className={styles.navigation}>
			<StaticQuery
				query={graphql`
					query SiteTitleQuery {
						allNetlifyConfigJson {
							nodes {
								navLinks {
									link
									name
									subLinks {
										link
										name
									}
								}
							}
						}
					}
				`}

				render={data => renderLinks(data)}
			/>
		</nav>
	</header>
)

const renderLinks = (data) =>
	data.allNetlifyConfigJson.nodes[0].navLinks.map(navLink => {
		if (navLink.subLinks == null)
			return <Link className={styles.navigationLink} to={navLink.link}>{navLink.name}</Link>
		
		return (
			<DropdownLink className={styles.navigationLink} to={navLink.link} text={navLink.name}>
				{navLink.subLinks.map(subLink => 
					<Link className={styles.navigationLink} to={subLink.link}>{subLink.name}</Link>
				)}
			</DropdownLink>
		)
	})
