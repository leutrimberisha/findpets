import React from 'react'
import Logo from '../../assets/logo-white.png'

const Navigation = () => {
    return (
        <nav>
            <a href="/cadastro" className="items">😨 I lost my pet</a>
            <a href="/cadastro" className="items">😱 I found a little animal</a>
            <a href="/pets"><img src={Logo} alt="Logo" /></a>
            <a href="/cadastro" className="items">🥰 Adopt a pet</a>
            <a href="https://play.google.com/store/apps/details?id=com.kalifyinc.findyourpet&pli=1" target="_blank" rel="noreferrer" className="items">😍 Download App (Android)</a>
            {/* <a href="/maps" className="items">📌 Mapa dos Animais</a> */}
        </nav>
    )
}

export default Navigation
