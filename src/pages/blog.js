import React from "react"
import Page from "../components/page"
import Section from "../components/section"
import { graphql } from 'gatsby'
import Card from "../components/card"
import styles from "../components/card.module.css"


export default ({data}) => (
    <Page>
        <Section title="Blog!" />
        <section className={styles.cardContainer}>
            {data.allMarkdownRemark.nodes.map(post =>
                <Card
                    title={post.frontmatter.title}
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
                    path
                }
            }
        }
    }
`