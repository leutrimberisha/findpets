import React, { useEffect } from 'react'
import AppDetails from '../components/AppDetails'
import AppBackground from '../components/AppBackground'
import Logo from '../../assets/logotipo-white.png'
import Modal from '../components/Modal'
import pet1 from '../../assets/pet1.jpg'
import pet2 from '../../assets/pet2.jpg'
import pet3 from '../../assets/pet3.jpg'
import pet4 from '../../assets/pet4.jpg'

function toHome() {
    window.location.href = "/pets"
}

const Home = () => {
    useEffect(() => {
        const sendPermissionRequestForNotification = async () => {
            let permission = await Notification.requestPermission()
                .then((result) => {
                    console.log('User choice', result)
                    if (result === 'granted') {
                        return
                    } else {
                        console.log('No notification permission granted!')
                    }
                })

            return permission
        }

        sendPermissionRequestForNotification()
    }, [])
    return (
        <>
            <AppBackground />
            <AppDetails>
                <ul>
                    <a href="/"><img src={Logo} /></a>
                    <li><a href="/sobre-nos">Sobre a Kalify</a></li>
                    <li><a href="/carreiras">Careers</a></li>
                    <li><a href="https://discord.gg/jhSepmE7nN" target="_blank" rel='noreferrer'>Support</a></li>
                    <li><a href="https://play.google.com/store/apps/details?id=com.kalifyinc.findyourpet&pli=1">Download</a></li>
                    <button onClick={() => toHome()}>Enter</button>
                </ul>

                <div className="container">

                    <div className="content">
                        <div className="leftSide">
                            <h1>Find your perfect pet companion</h1>
                            <p>Looking for a four-legged friend? Find Your Pet helps you find and rescue animals in need of loving homes</p>

                            {/* <div className="newsletter">
                                <input type="text" placeholder='Insira seu email ...' />
                                <button>Enviar</button>
                            </div> */}

                            <button onClick={() => toHome()}>Enter</button>

                            <div className="contact">
                                <div className="left-contact">
                                    <img src="https://storage.googleapis.com/mixo-files/public/img/avatars/male-19.png" alt="" />
                                </div>

                                <div className="right-contact">
                                    <h2>
                                        &quot;I found my best friend through Find Your Pet. It's an amazing platform for pet lovers.&quot;
                                    </h2>
                                    <h4>Pedro Guilherme</h4>
                                </div>


                            </div>
                        </div>

                        <div className="rightSide">
                            <svg width="404" height="392" fill="none" viewBox="0 0 404 392"><defs><pattern id="837c3e70-6c3a-44e6-8854-cc48c737b659" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="4" height="4" fill="currentColor"></rect></pattern></defs><rect width="404" height="392" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"></rect></svg>

                            <img src={pet1} className="pet1" alt="" />
                        </div>
                    </div>

                    <div className="content">
                        <div className="leftSide">
                            <img src={pet2} className="pet2" alt="" />
                        </div>

                        <div className="rightSide">
                            <h1>
                                Easy Pet Search
                            </h1>
                            <p>
                                PawReunite makes it easy to search for pets based on your preferences. Find the perfect companion that matches your lifestyle and needs.
                            </p>
                        </div>
                    </div>

                    <div className="content">
                        <div className="leftSide">
                            <h1>
                                Rescue and save lives
                            </h1>
                            <p>
                                By using PawReunite, you can rescue pets in need and give them a second chance at life. Make a difference and save a life today.
                            </p>
                        </div>

                        <div className="rightSide">
                            <img src={pet3} className="pet3" alt="" />
                        </div>
                    </div>

                    <div className="content">
                        <div className="leftSide">
                            <svg width="404" height="392" fill="none" viewBox="0 0 404 392"><defs><pattern id="837c3e70-6c3a-44e6-8854-cc48c737b659" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="4" height="4" fill="currentColor"></rect></pattern></defs><rect width="404" height="392" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"></rect></svg>
                            <img src={pet4} className="pet4" alt="" />
                        </div>

                        <div className="rightSide">
                            <h1>
                                Support pet adoption
                            </h1>
                            <p>
                                PawReunite promotes pet adoption and supports shelters and rescue organizations. Join us in providing loving homes for pets in need.
                            </p>
                        </div>
                    </div>

                    <div className="advice">
                        <h1>
                            “PawReunite helped me rescue a dog that was abandoned.
                            I'm grateful for this platform and the opportunity to give him a loving home.”
                        </h1>

                        <div className="client">
                            <img src="https://storage.googleapis.com/mixo-files/public/img/avatars/male-31.png" alt="" />
                            <h4>Vinicius de Oliveira</h4>
                        </div>
                    </div>

                    <div className="joinUs">
                        <div className="content">
                            <h1>
                                Join our community of pet lovers and make a difference<span>.</span>
                            </h1>

                            <i>“Thanks to PawReunite, I found my perfect pet companion and also contributed to the mission of saving animals. It’s a win-win situation.” - Bruna dos Santos</i>

                            <button onClick={() => toHome()}>Entrar</button>
                        </div>
                    </div>

                    <div className="links">
                        <div className="url">
                            <a href="https://kalify.vercel.app/termos">Terms of use</a>&nbsp; - &nbsp;
                            <a href="https://kalify.vercel.app/politicas">Privacy Policies</a>
                        </div>

                        <p>© 2022 - {new Date().getFullYear()} <a href="/">FindYourPet</a> by <a href="https://kalifyinc.vercel.app/" target="_blank" rel="noreferrer">Kalify Inc.</a> | All animal images are property of their respective advertisers</p>
                    </div>
                </div>
            </AppDetails>
            <Modal />
        </>
    )
}

export default Home
