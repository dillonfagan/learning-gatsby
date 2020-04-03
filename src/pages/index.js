import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import HeroSection from "../components/hero-section"
import IconsSection from "../components/icons-section"

export default () => (
	<>
		<Header />
		<div className="content">
			<HeroSection />
			<IconsSection />
		</div>
		<Footer />
	</>
)