import React from 'react'
import "../styles/Header.css"
import Logo from './Logo'
import Navigation from './Navigation'


function Header() {
    return (
        <div className="header">
            <Logo />
            <div className="horizontal"><hr></hr></div>
            <div className="navigations">
                <Navigation url="/" title="00  Home"/>
                <Navigation url="/destination" title="01 Destination"/>
                <Navigation url="/crew" title="02 Crew"/>
                <Navigation url="/technology" title="03 Technology"/>
            </div>
        </div>
    )
}

export default Header
