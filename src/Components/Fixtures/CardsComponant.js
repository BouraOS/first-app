import React from 'react'

export default function CardsComponant({data, callback }) {
  return (
    <div className="boxes">
    {
    data.map((race, index) => (
        <div className={`card item-${race.id}`} key={index}>
            <div className='race-info' onClick={() => callback(race.id)}>
                <span className='elipse'>{race.category}</span>
                <div className='group'>
                    <span className='race-place'>{race.place}</span>
                    <div className='race-icons'>
                        <i className="bi bi-brightness-high"></i>
                        <span>{race.temperature}</span>
                        <i className="fa-solid fa-horse" ></i>
                    </div>
                </div>
            </div>
        </div>
    ))
    }
    </div>
  )
}
