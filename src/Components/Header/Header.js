import React from 'react'
import './header.css'
import NavBar from './NavBar'
import LandingText from './LandingText'
import LandingCard from './LandingCard'
import Boxes from './Boxes'
const Header = () => {
    return (
        <div className='container-fluid mt-3'>
            <div className='home-header'>
                <NavBar/>
                <div className='landing container-lg'>
                    <div class="row row-cols-1 g-5">
                        <div class="col-12 order-1 col-md-6 order-md-0 mx-auto d-flex justify-content-center ">
                            <LandingText/>
                        </div>
                        <div class="col-12 col-md-6 mx-auto d-flex justify-content-center">
                            <LandingCard/>
                            </div>
                        <div class="col-12"><Boxes/></div>
                    </div>
                </div>

                    {/* <div className='row row-cols-1 row-cols-md-2'>
                        <div class="col-12 col-md-6">
                            
                        </div>
                        <div class="col-12 col-md-6">
                            <LandingCard/>
                        </div>
                        <div class="col">
                        </div>

                    </div> */}
            </div>
        </div>
    )
}

export default Header