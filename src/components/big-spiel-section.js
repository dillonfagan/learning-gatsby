import React from "react"
import styles from "./big-spiel-section.module.css"

export default () => (
	<section className={styles.plain}>
		<h2>Charity projects</h2>
		<p>
			Epicureanism is a system of philosophy based on the teachings of Epicurus, founded around 307 B.C. 
			It teaches that the greatest good is to seek modest pleasures in order to attain a state of 
			tranquillity, freedom from fear ("ataraxia") and absence from bodily pain ("aponia").
		</p>

		<div className={styles.textBoxRow}>
			<div>
				<h3>Well Isn't That Special</h3>
				<p>
					In April 2020, we started the quarantine and continue the annual Hive Mind Program.
					As a result of the ideas presented by our mobbers, currently we are losing our minds trying to pass the time.
				</p>
			</div>
			<div>
				<h3>Education Innovation Defund</h3>
				<p>
					We have teamed up with Mike D'Antuono and other parser team members to set up a collective, 
					which aims to offer relief during this hard time of the quarantine. The focus of our program 
					is to stay busy.
				</p>
			</div>
		</div>
	</section>
)