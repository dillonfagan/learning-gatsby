import React from "react"
import { Link } from "gatsby"
import DropdownLink from "./dropdown-link"
import styles from "./header.module.css"

export default () => (
	<header className={styles.siteHeader}>
		<Link to="/" className={styles.siteLogo}>Holmes</Link>
		<nav className={styles.navigation}>
			<Link to="/blog" className={styles.navigationLink}>About</Link>
			<DropdownLink to="/solutions" text="Solutions" className={styles.navigationLink}>
				<Link to="/">Software Development</Link>
				<Link to="/">Holmes Design</Link>
				<Link to="/">Data Analytics & Insight</Link>
				<Link to="/">Augmented Reality</Link>
			</DropdownLink>
			<Link to="/blog" className={styles.navigationLink}>References</Link>
			<Link to="/blog" className={styles.navigationLink}>Blog</Link>
			<Link to="/blog" className={styles.navigationLink}>Contact</Link>
			<Link to="/blog" className="button">Careers</Link>
		</nav>
	</header>
)
