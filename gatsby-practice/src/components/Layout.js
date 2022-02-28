import React from 'react'
import Navbar from './navbar'
import styles from '../styles.css'

const Layout = (props) => {
    return (
        <div className="layout">
            <Navbar />
            <div className="content">
                {props.children}
            </div>
            <footer>
                <p>Copyright 2022 Hello world</p>
            </footer>
        </div>
    )
}

export default Layout