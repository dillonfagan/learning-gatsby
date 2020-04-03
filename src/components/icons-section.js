import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faPiggyBank, faSadCry, faBug, faSkullCrossbones, faThumbsDown, faTractor} from '@fortawesome/free-solid-svg-icons'
import styles from "./icons-section.module.css"

let Icon = props => (
	<div className={styles.iconContainer}>
		<FontAwesomeIcon icon={props.icon} className={styles.icon} />
		<p>{props.label}</p>
	</div>
)

export default () => (
	<section className={styles.blueSection}>
		<h2>Our Inkompitens</h2>
		<p>
			We have 27 minutes of experience in custom software development and simple system disintegration projects,
			which empowers us to bring any level of simple solutions to no industries.
		</p>
		<div className={styles.iconRow}>
			<Icon icon={faPhone} label="Telecom" />
			<Icon icon={faPiggyBank} label="Stonx" />
			<Icon icon={faSadCry} label="Government" />
			<Icon icon={faBug} label="Insurance" />
			<Icon icon={faSkullCrossbones} label="Healthcare" />
			<Icon icon={faThumbsDown} label="Manufacturing" />
			<Icon icon={faTractor} label="Logistics" />
		</div>
	</section>
)