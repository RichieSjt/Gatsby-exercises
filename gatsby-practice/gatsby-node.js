const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    // Fetching data required for the templates
    
    const { data } = await graphql(`
      query Projects {
        allMarkdownRemark {
          nodes {
            frontmatter {
              slug
            }
          }
        }
      }
    `)
    
    data.allMarkdownRemark.nodes.forEach((node) => {
        actions.createPage({
          path: `/projects/${node.frontmatter.slug}`,
          // Template absolute location
          component: path.resolve("./src/templates/project-details.js"),
          // Variables passed to the template
          context: {
            // Query variable for the page
            slug: node.frontmatter.slug,
          },
        })
    })
}