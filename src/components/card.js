import React from "react"
import { Link } from "gatsby"
import styles from "./card.module.css"

export default props => (
    <article className={styles.card}>
        <Link to={props.path} ><h2>{props.title}</h2></Link>
    </article>
)