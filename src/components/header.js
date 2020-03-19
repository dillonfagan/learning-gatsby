import React from "react"
import { Link } from "gatsby"
import DropdownLink from "./dropdown-link"
import styles from "./header.module.css"

export default () => (
    <header className={styles.siteHeader}>
        <Link className={styles.siteLogo}><h2>Holmes</h2></Link>
        <nav className={styles.navigation}>
            <DropdownLink to="/about" text="About" className={styles.navigationLink}>
                <Link to="/">Click me!</Link>
            </DropdownLink>
            <Link to="/blog" className={styles.navigationLink}>Solutions</Link>
            <Link to="/blog" className={styles.navigationLink}>References</Link>
            <Link to="/blog" className={styles.navigationLink}>Blog</Link>
            <Link to="/blog" className={styles.navigationLink}>Contact</Link>
            <Link to="/blog" className="button">Careers</Link>
        </nav>
    </header>
)
