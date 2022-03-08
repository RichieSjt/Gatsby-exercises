import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import * as styles from '../styles/project-details.module.css'
import { graphql } from 'gatsby'

const ProjectDetails = ({ data }) => {
    const { html } = data.markdownRemark
    const { title, stack, featuredImg:img } = data.markdownRemark.frontmatter
    const featuredImg = getImage(img)

    return (
        <Layout>
            <div className={styles.details}>
                <h2>{title}</h2>
                <h3>{stack}</h3>
                <div className={styles.featured}>
                    <GatsbyImage image={featuredImg} />
                </div>
                <div className={styles.html} dangerouslySetInnerHTML={ {__html: html} }/>
            </div>
        </Layout>
    )
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default ProjectDetails