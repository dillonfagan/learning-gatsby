import React from "react"
import Page from "../components/page"
import Section from "../components/section"
import { graphql } from 'gatsby'
import Card from "../components/card"


export default ({data}) => (
    <Page>
        <Section title="Blog!" />
        {data.allMarkdownRemark.nodes.map(post =>
            <Card
                title={post.frontmatter.title}
                path={post.frontmatter.path}
            />
        )}
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