/*
 * @Author: HideOnBush 
 * @Date: 2018-07-20 20:35:11 
 * @Last Modified by: HideOnBush
 * @Last Modified time: 2018-07-24 13:54:56
 */
import React from 'react'
import './index.css'
export default function Header(){
    return (
        <header>
            <div className="wrapper">
                <div className="header-left">
                    <div className="logo">
                        过河卒
                    </div>
                    <div className="blog-title">
                        Life is too short to be little.
                    </div>
                </div>
                <div className="header-right">
                    <div className="search">
                        <i></i>
                        <input type="text" placeholder="Search"/>
                    </div>
                    <div className="RSS"></div>
                </div>
            </div>            
        </header>
    )
}