import React from "react"
import styles from "./card.module.css"

export default props => (
	<article className={styles.card}>
		<h2><a href={props.path} target="_blank" rel="noopener noreferrer">{props.title}</a></h2>
		<p className={styles.date}>{props.date}</p>
	</article>
)