import React from "react"
import Page from "../components/page"
import Section from "../components/section"
import { graphql } from 'gatsby'
import NewsCard from "../components/news-card"
import styles from "../components/card.module.css"

export default ({ data }) => (
	<Page>
		<Section title="Holmes is in the news!">
			<p>These blog posts offer inspiration and insight, yet never easy answers.
			It’s a journal of what’s currently on our minds, topics we find valuable
            and worthy of attention.</p>
		</Section>
		<section className={styles.cardContainer}>
			{data.allArticlesJson.nodes.map(article =>
				<NewsCard
					title={article.title}
					date={article.date}
					path={article.link}
				/>
			)}
		</section>
	</Page>
)

export const query = graphql`
	query MyQuery {
  		allArticlesJson {
    		nodes {
				title
            date(formatString: "MMMM DD, YYYY")
				link
    		}
  		}
	}
`