import React, { useState } from 'react'
import PetsDetails from '../components/PetsDetails'
import Footer from '../components/Footer'
import FormSignUpDetails from '../components/FormSignUpDetails'
import PetServices from '../services/pet.services'
import { storage } from '../client'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import Navigation from '../components/Navigation'
import AddPetButton from '../components/AddPetButton'
import { badWords } from '../services/badwords'
import { sendNotification } from '../utils/sendNotification'

const SignUp = () => {
    const [PetName, setPetName] = useState('');
    const [PetDescription, setPetDescription] = useState('');
    const [PetFile, setPetFile] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [PetUrl, setPetUrl] = useState('');
    const [PetLocale, setPetLocale] = useState('');
    const [PetContact, setPetContact] = useState('');
    const [PetSituation, setPetSituation] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [PetCreated, setPetCreated] = useState('');
    const [PetValid, setPetValid] = useState('');

    // Get Type Situation of Pet - Adopt, Rescue or Lost
    function sendDataSelect() {
        const formStatus = document.getElementById('status')
        const resultStatus = formStatus.value
        setPetSituation(resultStatus)
        console.log('Status:', resultStatus)
    }

    function collectData() {
        //Pet registration creation date
        const date = new Date()
        const year = date.getFullYear()
        const month = (date.getMonth() + 1).toString().padStart(2, '0')
        const day = date.getDate().toString().padStart(2, '0')
        setPetCreated(`${day}/${month}/${year}`)

        //Pet registration expiration date
        date.setDate(date.getDate() + 60)
        const yearv = date.getFullYear()
        const monthv = (date.getMonth() + 1).toString().padStart(2, '0')
        const dayv = date.getDate().toString().padStart(2, '0')
        setPetValid(`${dayv}/${monthv}/${yearv}`)

        const formName = document.getElementById('name')
        const resultName = formName.value
        setPetName(resultName)

        const formDescription = document.getElementById('description')
        const resultDescription = formDescription.value
        setPetDescription(resultDescription)

        const formLocale = document.getElementById('locale')
        const resultLocale = formLocale.value
        setPetLocale(resultLocale)

        const formContact = document.getElementById('contact')
        const resultContact = formContact.value
        setPetContact('55' + resultContact)
    }

    function getImage(event) {
        const file = event.target.files[0];
        setPetFile(file);
    
        const storageRef = ref(storage, `/files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
    
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(Math.floor(progress));
            },
            (error) => console.log(error),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    setPetUrl(url);
                });
            }
        );
    }
    

    function Redirect() {
        location.assign("/pets");
    }

    function checkBadWords(string) {
        const filterBadWords = badWords; // Lista de palavras inapropriadas

        const hasBadWords = filterBadWords.some(word => string.toLowerCase().includes(word.toLowerCase()));

        if (hasBadWords) {
            console.log('Alerta! Palavras inapropriadas encontradas!');
            alert('Por favor, não use palavras inapropriadas!');
        } else {
            console.log('Texto validado com sucesso!');
        }
    }

    async function addToFirebase() {
        const NewPets = {
            name: PetName,
            description: PetDescription,
            locale: PetLocale,
            contact: PetContact,
            status: PetSituation,
            image: PetFile.name,
            imageURL: PetUrl,
            slug: PetName.toLowerCase().replace(/ /g, '-') + Math.floor(Math.random() * 1000),
            createdAt: PetCreated,
            validDate: PetValid
        }

        await (PetServices.addPets(NewPets))

        sendNotification({
            title: 'Um novo animalzinho foi cadastrado',
            body: 'Dê uma olhada, talvez ele precise de sua ajuda!',
            url: 'https://findyourpet.vercel.app/pets'
        });

        Redirect();
    }

    function sendData() {
        if (!PetName || !PetDescription || !PetLocale || !PetContact) {
            alert('Por favor, preencha todos os campos obrigatórios.');

        } else {
            checkBadWords(PetName);
            checkBadWords(PetDescription);
            addToFirebase();
        }
    }

    return (
        <>
            <PetsDetails>
                <Navigation />

                <a href="/cadastro" className="advice-yellow">
                    <i className="uil uil-shield-exclamation"></i>&nbsp;
                    Try to enter the information correctly - It will not be possible to edit later!
                    &nbsp;<i className="uil uil-shield-exclamation"></i>
                </a>
            </PetsDetails>

            <FormSignUpDetails>
                <form onChange={() => collectData()}>
                    <h4>Animal Name</h4>
                    <input type="text" id="name" placeholder="Nome do Animalzinho"
                        maxLength={15} size={24} />

                    <h4>Animal Photo</h4>
                    <input type="file" id="photo" onChange={getImage}></input>

                    <h4>Animal Description</h4>
                    <textarea id="description" placeholder="Cachorro pequeno, Pêlo branco, carinhoso, gosta de bolinhas" maxLength={50}
                        rows="4" cols="28" size={30} />

                    <h4>Neighborhood/City of Animal</h4>
                    <input type="text" id="locale" placeholder="Seu Bairro e Cidade"
                        maxLength={20} size={24} />

                    <h4>What is the situation:</h4>
                    <select id="status" onChange={() => sendDataSelect()}>
                        <option value="">Select</option>
                        <option value="Adoção">Adoption</option>
                        <option value="Encontrado">Animal Found</option>
                        <option value="Perdido">Lost Animal</option>
                    </select>

                    <h4>WhatsApp number*</h4>
                    <div>
                        <input type="text" id="contact" placeholder="19123456789"
                            maxLength={11} size={24} />
                    </div>
                    <i>*Do not use spaces, dashes or parentheses</i>

                    <div>
                        <button type="reset" className="reset">To clean</button>
                        <button type="button" className="send" onClick={sendData}>Register</button>
                    </div>
                </form>
            </FormSignUpDetails>

            <Footer />
            <AddPetButton />
        </>
    )
}

export default SignUp
