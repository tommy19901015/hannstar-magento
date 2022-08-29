import React, { useState, useEffect, useRef } from 'react'
import './css.scss'
import SC from 'styled-components'

const Main = ({ type, widthL, widthR, content, contentL, contentR }) => {
    const FullPageSC = SC.div`
      max-width:1400px;
      width:100%;
      margin: 40px auto;
      @media (max-width: 980px) {
        margin: 20px;
      }   
    `

    const FullPage = () => <FullPageSC>{content}</FullPageSC>

    const OneColSC = SC.div`
      max-width:1400px
      margin: 0 auto;
      @media (max-width: 980px) {
        margin: 20px auto;
      }   
    `

    const OneCol = () => <OneColSC>{content}</OneColSC>

    const TwoCol = () => {
        const TwoColMain = SC.div`
        display: flex;
        margin: 40px auto;
        @media (max-width: 980px) {
            flex-direction: column-reverse;
            margin: 10px auto;
        } 
        `

        const LeftCol = SC.div`
            width: ${widthL}%;
            @media (max-width: 980px) {
                width: 100%;
            } 
        `

        const RightCol = SC.div`
            width: ${widthR}%;
            @media (max-width: 980px) {
                width: 100%;
            } 
        `
        return (
            <TwoColMain>
                <LeftCol widthL={widthL}>{contentL}</LeftCol>
                <RightCol widthR={widthR}>{contentR}</RightCol>
            </TwoColMain>
        )
    }

    const columnsObj = {
        fullPage: <FullPage />, //滿版
        // oneCol: <OneCol />, //最大寬度1400px
        twoCol: <TwoCol />, //左右兩欄
    }

    return columnsObj[type]
}

export default Main
