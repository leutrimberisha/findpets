import React from 'react'

import Logo from '../../assets/logotipo-white.png'
import AddPetButton from '../components/AddPetButton'
import SubPages from '../components/SubPages'
import Footer from '../components/Footer'

const ComoFunciona = () => {
    return (
        <SubPages>
            <a href="/pets"><img src={Logo} /></a>
            <h2>How Does It Work?</h2>
<p>
    The app is simple: What you need to do is go to the <a href="/signup">sign-up</a> section or click the [+] button
    on the right-hand side, and you'll be redirected. Once you reach the sign-up section, you'll need to provide the animal's name. You can simply
    enter 'dog,' 'cat,' or any other generic name in case you've just rescued the animal and don't know its name. In the description part,
    describe the animal using its characteristics, but keep it brief and concise.
</p>
<br />
<p>
    Upload an image of your found, lost, or adoptable pet. Any image representing
    something other than the animal will be removed from the platform, and the post will be deleted. Use common sense
    and ensure good lighting. In the type section, you should only select one of three categories: Is it a found animal,
    a lost animal, or an animal up for adoption? Please note that we do not allow the sale of animals
    on our platform under any circumstances. Hence, any such action will be deleted!
</p>
<br />
<p>
    In the location section, indicate the neighborhood where the animal was found so that people can
    have an idea of the distance. Never provide your physical address; we do not take responsibility for any
    issues related to this type of information. Provide a contact number so that people can reach out to you to learn more
    about the animal. Be cautious about the information you share and be careful not to
    fall victim to any scams or malicious acts.
</p>
<br />
<p>
    After this, simply submit the form, and our system will review and automatically publish it
    for all users accessing the website.
</p>

            <AddPetButton />
            <Footer />
        </SubPages>
    )
}

export default ComoFunciona
