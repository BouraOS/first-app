import React from 'react'
import './header.css'
import NavBar from './NavBar'
import LandingText from './LandingText'
import LandingCard from './LandingCard'
import Boxes from './Boxes'
import PopupConnexion from '../Modal-Popup/Popup-Connexion/PopupConnexion'
import InscriptionPopup from '../Modal-Popup/Inscription-popup/InscriptionPopup'


const Header = () => {
    return (
        <div className='container-fluid mt-3'>
            <div className='home-header'>
                <NavBar/>
                <div className='landing container-lg'>
                    <div className="row row-cols-1 g-5">
                        <div className="col-12 order-1 col-md-6 order-md-0 mx-auto d-flex justify-content-center ">
                            <LandingText/>
                        </div>
                        <div className="col-12 col-md-6 mx-auto d-flex justify-content-center">
                            <LandingCard/>
                            </div>
                        <div className="col-12">
                            <Boxes/>
                        </div>
                    </div>
                    <PopupConnexion/>
                    <InscriptionPopup/>
                </div>
            </div>
        </div>
    )
}

export default Header