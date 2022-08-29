import './css.scss'
import React from 'react'
import Header from '../header/main'
import Footer from '../footer/main'

const Layout = (prop) => {
    return (
        <>
            <Header />
            <div className="hannstarMain">{prop.children}</div>
            <Footer />
        </>
    )
}

export default Layout
