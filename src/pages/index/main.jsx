import React, { useState, useEffect, useRef } from 'react'
import Header from '../../component/header/main'
import BannerSlider from '../../component/bannerSlider/main'
import MessageCenter from '../../component/messageCenter/main'
import PlatformEntry from '../../component/platformEntry/main'
import GraphicsLine from '../../component/graphicsLine/main'
import Footer from '../../component/footer/main'
import './css.scss'

const Index = () => {
    const Body = () => {
        return (
            <div>
                <button className="hannstarBtn">BTN</button>
                <h1>index body</h1>;
            </div>
        )
    }

    return (
        <>
            <Header />
            <BannerSlider />
            <MessageCenter />
            <PlatformEntry />
            <GraphicsLine />
            <Footer />
        </>
    )
}

export default Index
