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
									sublinks {
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

// TODO: Fix inconsistent link naming scheme
const renderLinks = (data) =>
	data.allNetlifyConfigJson.nodes[0].navLinks.map(navLink => {
		if (navLink.sublinks == null)
			return <Link className={styles.navigationLink} to={navLink.link}>{navLink.name}</Link>
		
		return (
			<DropdownLink className={styles.navigationLink} to={navLink.link} text={navLink.name}>
				{navLink.sublinks.map(sublink => 
					<Link className={styles.navigationLink} to={sublink.link}>{sublink.name}</Link>
				)}
			</DropdownLink>
		)
	})
