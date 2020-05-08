import React from "react"
import { Link } from "gatsby"
import styles from "./card.module.css"

export default props => (
    <article className={styles.card}>
        <h2><Link to={props.path}>{props.title}</Link></h2>
        <p className={styles.date}>{props.date}</p>
    </article>
)