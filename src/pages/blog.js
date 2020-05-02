import React from "react"
import Page from "../components/page"
import Section from "../components/section"
import { graphql } from 'gatsby'

export default ({data}) => (
    <Page>
        <Section title="Blog!" />
        {data.allMarkdownRemark.nodes[0].frontmatter.title}
    </Page>
)

export const query = graphql`
    query BlogTitleQuery {
        allMarkdownRemark {
            nodes {
                frontmatter {
                    title
                }
            }
        }
    }
`