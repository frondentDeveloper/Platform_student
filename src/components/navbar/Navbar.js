import React from 'react';
import "./navbar.scss"
import i18n from "i18next"
import {useTranslation, initReactI18next} from "react-i18next";
import Dropdown from 'react-bootstrap/Dropdown';

function Navbar(props) {
    const {t} = useTranslation();

    // i18n
    //     .use(initReactI18next) // passes i18n down to react-i18next
    //     .init(  {
    //         resources: {
    //             en: {
    //                 translation: {
    //                     "Welcome to React": "Welcome to React and react-i18next"
    //                 }
    //             }
    //         },
    //         lng: "en",
    //         fallbackLng: "en",
    //     });


    return (
        <div className="navbar">
            <div className="logo_navbar">
                <img src="imgSVG/logo 1.svg" alt=""/>
            </div>
            <div className="for-login">
                <div className="for-login-in"><img src="images/profile.png" alt=""/></div>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <img src="images/LANGUAGE.png" alt=""/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item >UZ</Dropdown.Item>
                        <Dropdown.Item >ENG</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
}

export default Navbar;