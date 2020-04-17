import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

export default props => (
	<>
		<Header />
		<div className="content">
			{ props.children }
		</div>
		<Footer />
	</>
)