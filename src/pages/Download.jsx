import React from 'react'

import Logo from '../../assets/logotipo-white.png'
import SubPages from '../components/SubPages'
import AddPetButton from '../components/AddPetButton'
import Footer from '../components/Footer'

const Download = () => {
    return (
        <SubPages>
            <a href="/pets"><img src={Logo} /></a>
            <h1>Download</h1>
            <a href="https://play.google.com/store/apps/details?id=com.kalifyinc.findyourpet&pli=1" target="_blank" rel="noreferrer">Click here to download the Android version of the app</a>

            <br /><br />
            <h2>Changelog</h2>
            <p>
                <strong>1.0.1</strong>
                <br />
                - Added: Terms and Policies

                <br /><br />
                <strong>1.0.0</strong>
                <br />
                - App launch
            </p>
            <AddPetButton />
            <Footer />
        </SubPages>
    )
}

export default Download
