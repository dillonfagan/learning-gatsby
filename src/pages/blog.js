import React from "react"
import Page from "../components/page"
import Section from "../components/section"
import { graphql } from 'gatsby'
import Card from "../components/card"
import styles from "../components/card.module.css"


export default ({data}) => (
    <Page>
        <Section title="Blog!"> 
            <p>These blog posts offer inspiration and insight, yet never easy answers. 
            It’s a journal of what’s currently on our minds, topics we find valuable 
            and worthy of attention.</p>
        </Section>
        <section className={styles.cardContainer}>
            {data.allMarkdownRemark.nodes.map(post =>
                <Card
                    title={post.frontmatter.title}
                    date={post.frontmatter.date}
                    path={post.frontmatter.path}
                />
            )}
        </section>
    </Page>
)

export const query = graphql`
    query BlogTitleQuery {
        allMarkdownRemark {
            nodes {
                frontmatter {
                    title
                    date(formatString: "MMMM DD, YYYY")
                    path
                }
            }
        }
    }
`