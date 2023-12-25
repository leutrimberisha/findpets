import React from 'react'

import Logo from '../../assets/logotipo-white.png'
import SubPages from '../components/SubPages'
import AddPetButton from '../components/AddPetButton'
import Footer from '../components/Footer'

const Carreiras = () => {
    return (
        <SubPages>
            <a href="/pets"><img src={Logo} /></a>
<h2>Careers</h2>
<p>
    Our team at FindYourPet is managed by Kalify Inc., an organization
    aiming to solve everyday problems through technology and assist
    society with web-based solutions. <br /><br /> Are you interested in working with FindYourPet? We always have
    volunteer positions - up to the present moment - to help our application grow
    and evolve. Since we currently do not have sponsors and do not have
    any advertising plans or any other revenue-generating initiatives, we
    rely on donations to keep the project running. <br /><br />
    As a result, the services surrounding this project are entirely free
    and of immense importance in aiding and reducing the impact on lost animals,
    animals without owners, and animals available for adoption, but with limited exposure,
    making it difficult for them to find homes. <br /><br />
    If you have expertise and believe you can help our project evolve, you
    can access our <a href="https://github.com/Yagasaki7K/website-findyourpet" target="_blank" rel="noreferrer">repository on Github</a>, fork the project - make a copy to your account - upload the updates we need, and open a PR - pull request - we will
    review it, and if it's of significant importance and quality for the project, you will be
    credited as one of the contributors. <br /><br />
</p>

            </p>
            <AddPetButton />
            <Footer />
        </SubPages>
    )
}

export default Carreiras
