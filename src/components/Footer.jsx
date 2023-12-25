import React from 'react'
import PetsDetails from '../components/PetsDetails'

const Footer = () => {
    return (
        <>
            <PetsDetails>
                <hr />
                <footer>
                    <div className="footer-content break">
                        <h2>PawReunite</h2>
                        <a href="http://kalify.vercel.app/" target="_blank" rel="noreferrer">Institutional Website <i className="uil uil-external-link-alt" /></a>
                        <a href="https://play.google.com/store/apps/details?id=com.kalifyinc.findyourpet&pli=1" target="_blank" rel="noreferrer">Download App  <i className="uil uil-external-link-alt" /></a>
                        <a href="/carreiras">Careers</a>
                        <a href="mailto:kalifyinc@gmail.com">Contact us</a>
                        <a href="https://kalify.vercel.app/termos">Terms of use</a>
                        <a href="https://kalify.vercel.app/politicas">Privacy Policies</a>
                    </div>

                    <div className="footer-content break">
                        <h2>find it out</h2>
                        <a href="/cadastro">Register your Pet</a>
                        <a href="/como-funciona">How it works?</a>
                        <a href="/sobre-nos">About Us</a>
                        {/* <a href="#" target="_blank">Blog <i className="uil uil-external-link-alt"></i></a> */}
                    </div>

                    <div className="footer-content break">
                        <h2>Social</h2>
                        <a href="https://twitter.com/KalifyInc" target="_blank" rel="noreferrer">Twitter <i className="uil uil-external-link-alt" /></a>
                        <a href="https://discord.gg/jhSepmE7nN" target="_blank" rel="noreferrer">Discord <i className="uil uil-external-link-alt" /></a>
                    </div>
                </footer>

                <div className="copyright">
                    <i> © 2022 - {new Date().getFullYear()} FindYourPet - Kalify Inc | All animal images are property of their respective advertisers</i>
                </div>
            </PetsDetails>
        </>
    )
}

export default Footer
