import React, { useState, useEffect } from 'react'
import './css.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const bannerData = [
    {
        src: 'https://webdev.hannstar.com/upload/banner_list/twL_banner_22A27_6erpvjpmxp.jpg',
        title: '創新技術、品質服務',
    },
    {
        src: 'https://webdev.hannstar.com/upload/banner_list/twL_banner_22A28_zi638kdkyz.jpg',
        title: '綠色顯示、全新視界',
    },
    {
        src: 'https://webdev.hannstar.com/upload/banner_list/twL_banner_22B08_8e38nb3hz6.jpg',
        title: '實踐 ESG、邁向永續經營',
    },
]

const BannerSlider = (porps) => {
    const settings = {
        dots: true,
        arrows: false,
        fade: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        // className: 'bannerSlider',
        // dotsClass: 'bannerDots',
    }

    return (
        <div className="bannerSlider">
            <Slider {...settings}>
                {bannerData.map((item, idx) => (
                    <>
                        <img src={item.src} />
                        <div className="textBlock">
                            <h2 className="title">{item.title}</h2>
                            <p className="text">{item.content}</p>
                        </div>
                    </>
                ))}
            </Slider>
        </div>
    )
}

export default BannerSlider
