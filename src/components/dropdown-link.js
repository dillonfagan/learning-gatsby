import React from "react"
import { Link } from "gatsby"
import navigationStyles from "./header.module.css"
import styles from "./dropdown-link.module.css"

export default props => (
    <div className={styles.dropdownLink}>
        <Link to={props.to} className={navigationStyles.navigationLink}>{props.text}</Link>
        <div className={styles.dropdown}>{props.children}</div>
    </div>
)
