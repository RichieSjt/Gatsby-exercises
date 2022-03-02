import React from 'react'
import Layout from '../../components/Layout'

// We make subdirectories by making folders inside the pages folder
// We can access this page in /projects/test
const Test = () => {
    return (
      <Layout>
        <h1>Test</h1>
        <div style={{ "margin-bottom": "2rem" }}>Div 1</div>
        <div style={{ "margin-top": "2rem" }}>Div 2</div>
      </Layout>
    )
}

export default Test