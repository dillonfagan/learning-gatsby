import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { Link } from "gatsby"

export default () => (
	<>
		<Header />
		<div className="content">
			<section>
				<aside>
					<h1>Business Software Chemists</h1>
					<p>Custom software development for your personal challenges.</p>
					<p>We are an international custom software development company, with clients across the world.
					The long-term success of Holmes is built on lasting friendships
					that delivers real business losses for our clients and you.</p>
					<Link to="">References</Link>
					<Link to="">Solutions</Link>
				</aside>
			</section>
		</div>
		<Footer />
	</>
)