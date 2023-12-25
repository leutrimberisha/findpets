import React, { useEffect, useState } from "react";

import { Backdrop, ModalDetails, ModalContent, ModalHeader } from "./ModalDetails";

import Logo from '../../assets/logo-white.png'
import Googleplay from '../../assets/googleplay.png'

const DOWNLOAD_NOTICE_KEY = "hasOpenedModal";

export default function Modal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const hasOpenedModal = localStorage.getItem(DOWNLOAD_NOTICE_KEY);

        if (!hasOpenedModal) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }, []);

    function handleCloseModal() {
        localStorage.setItem(DOWNLOAD_NOTICE_KEY, true);
        setIsOpen(false);
    }

    return (
        <>
            {isOpen && (
                <>
                    <ModalDetails>
                        <ModalHeader>
                            <img src={Logo} />
                        </ModalHeader>

                        <ModalContent>
                            <h1>
                                How about using hair App?
                            </h1>

                            <p>
                                The app is much faster and easier to use, in addition to
                                 have the information in the palm of your hand!
                            </p>

                            <a href="https://play.google.com/store/apps/details?id=com.kalifyinc.findyourpet&pli=1" target="_blank" rel="noreferrer">
                                <img src={Googleplay} alt="" />
                            </a>
                        </ModalContent>
                    </ModalDetails>
                    <Backdrop onClick={handleCloseModal} />
                </>
            )}
        </>
    )
}
