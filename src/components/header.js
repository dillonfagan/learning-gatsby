import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.css"

export default () => (
    <header className={styles.siteHeader}>
        <Link className={styles.siteLogo}><h2>Holmes</h2></Link>
        <nav className={styles.navigation}>
            <Link to="/" className={styles.navigationLink}>About</Link>
            <Link to="/blog" className={styles.navigationLink}>Solutions</Link>
            <Link to="/blog" className={styles.navigationLink}>References</Link>
            <Link to="/blog" className={styles.navigationLink}>Blog</Link>
            <Link to="/blog" className={styles.navigationLink}>Contact</Link>
            <Link to="/blog" className="button">Careers</Link>
        </nav>
    </header>
)
