import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "./home.module.css"

// Desctructuring props to obtain the data returned by the graphql query
export default function Home() {
  // console.log(data)
  // const { title, description } = data.site.siteMetadata

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Mexico City.</p>
          <Link className={styles.btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        <img src="/banner.png" alt="" style={{ maxWidth: "100%" }} />
        {/* <p>
          {title} - {description}
        </p> */}
      </section>
    </Layout>
  )
}

// Page queries
// export const query = graphql`
//   query SiteInfo {
//     site {
//       siteMetadata {
//         description
//         title
//       }
//     }
//   }
// `
