import React from 'react'
import './FixStyle.css'
const Fixtures = () => {
    return (
        <div className='Fixtures-header container mb-2'>
            <div className='fixtures-nav'>
                <ul>
                    <li><a href='!#'>Hier</a></li>
                    <li className='active'><a href='!#' >Aujourd'hui</a></li>
                    <li><a href='!#'>Demain</a></li>
                </ul>
            </div>
            <div className="Fixtures-races container">
                <div className="card item-1">
                    <a href='!#' className='race-info'>
                        <span className='elipse'>R1</span>
                        <div className='group'>
                            <span className='race-place'>MARRAKECH</span>
                            <div className='race-icons'>
                                <i className="bi bi-brightness-high"></i>
                                <span>15 0C</span>
                                <i className="fa-solid fa-horse" ></i>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="card item-2">
                    <a href='!#' className='race-info'>
                        <span className='elipse'>R3</span>
                        <div className='group'>
                            <span className='race-place'>BORDEAUX- LE BOUSCAT</span>
                            <div className='race-icons'>
                                <i className="bi bi-brightness-high"></i>
                                <span>15 0C</span>
                                <i className="fa-solid fa-horse" ></i>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="card item-3">
                    <a href='!#' className='race-info'>
                        <span className='elipse'>R4</span>
                        <div className='group'>
                            <span className='race-place'>PONT DE VIVAUX</span>
                            <div className='race-icons'>
                                <i className="bi bi-brightness-high"></i>
                                <span>15 0C</span>
                                <i className="fa-solid fa-horse" ></i>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="card item-4">
                    <a href='!#'  className='race-info'>
                        <span className='elipse'>R6</span>
                        <div className='group'>
                            <span className='race-place'>CAGNES-SUR -MER</span>
                            <div className='race-icons'>
                                <i className="bi bi-brightness-high"></i>
                                <span>15 0C</span>
                                <i className="fa-solid fa-horse" ></i>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Fixtures