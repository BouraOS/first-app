import React from 'react'

const LandingCard = () => {
  return (
    <div className='landing-card'>
        <h1>Mar. 31 jan 2023</h1>
        <div className='card-text-circle'>
            <span className='circle'>C1</span>
            <span className='circle-text'>r1 cagnes-sur -mer</span>
        </div>
        <div className='shapes'>
            <span>Tiercé</span>
            <span>Quarté</span>
            <span>Quarté+</span>
        </div>
        <p className='card-parag'> Hacque adfabilitate confisus cum eadem postridie feceris.</p>
        <button type="button" className="btn btn-outline-light">
            <a href='!#'>Jouez et soyez le gagnant</a>
        </button>
    </div>
  )
}

export default LandingCard