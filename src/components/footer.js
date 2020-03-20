import React from "react"
import { Link } from "gatsby"
import DropdownLink from "./dropdown-link"
import styles from "./footer.module.css"

export default () => (
	<footer className={styles.siteFooter}>
		<div className={styles.container}>
			<div className={styles.topLeft}>
				<Link to="/" className={styles.siteLogo}>Holmes</Link>
			</div>
			<div className={styles.topRight}>
				right side
			</div>
			<div className={styles.bottomLeft}>
				privacy stuff
			</div>
			<div className={styles.bottomRight}>
				contact stuff
			</div>
		</div>
	</footer>
)
