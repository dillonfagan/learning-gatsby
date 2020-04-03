import React from "react"
import { Link } from "gatsby"
import styles from "./footer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faMastodon, faEllo, faSpotify } from '@fortawesome/free-brands-svg-icons'

export default () => (
	<footer className={styles.siteFooter}>
		<div className={styles.container}>
			<div className={`${styles.topLeft} ${styles.gridCell}`}>
				<h1 className={styles.siteLogo}>Holmes</h1>
				<p>Custom software development for your personal challenges.</p>
			</div>
			<div className={`${styles.topRight} ${styles.gridCell}`}>
				<nav className={styles.footerNavigation}>
					<Link to="">About</Link>
					<Link to="">Solutions</Link>
					<Link to="">References</Link>
					<Link to="">Blog</Link>
					<Link to="">Contact</Link>
					<Link to="">Careers</Link>
				</nav>
				<div className={styles.footerLocations}>
					<div>
						<p>Looksy 12B</p>
						<p>111223 Providence, Rhode Island</p>
					</div>
					<div>
						<p>+867 530 0009</p>
						<p>info@holmes.coop</p>
					</div>
				</div>
			</div>
			<div className={`${styles.bottomLeft} ${styles.gridCell}`}>
				<Link to="">Meist (Murica)</Link>
				<Link to="">Privacy and Cookie Receipts</Link>
			</div>
			<div className={`${styles.bottomRight} ${styles.gridCell}`}>
				<Link><FontAwesomeIcon icon={faCoffee} /></Link>
				<Link><FontAwesomeIcon icon={faMastodon} /></Link>
				<Link><FontAwesomeIcon icon={faEllo} /></Link>
				<Link><FontAwesomeIcon icon={faSpotify} /></Link>
			</div>
		</div>
	</footer>
)
