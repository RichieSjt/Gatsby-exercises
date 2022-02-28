import React from 'react'
import Layout from '../../components/Layout'
import * as styles from './projects.module.css'

// Base route for a directory is index.js
// We can access this page in /projects
const Projects = () => {
    return (
        <Layout>
            <div className={styles.portfolio}>
                <h2>Portfolio</h2>
                <h3>Projects & websites I've created</h3>
            </div>
        </Layout>
    )
}

export default Projects