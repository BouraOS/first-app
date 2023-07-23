import React, { useState } from 'react'
import DayCalendar from '../DayCalendar';
import Hier from '../pages/Hier';
import Today from '../pages/Today';
import Tomorrow from '../pages/Tomorrow';
import { DataFixtures } from '../pages/DataFixtures';

export default function FixturesLayout() {
    const [data, setData] = useState(DataFixtures['Aujourd\'hui']);
    const [program, setProgram] = useState(data[0])
    const updateDataFunc = (newdata) => {
        console.log(`the is is ${newdata}`)
        setProgram(data[newdata - 1])
    }
    function handleActive(event) {
        let navItems = document.querySelectorAll('.Fixtures-header .fixtures-nav .nav li');
        for (const li of navItems) {
          li.classList.remove("active");
        }
        event.currentTarget.classList.add("active");
        setData(DataFixtures[`${event.currentTarget.querySelector('button').innerHTML}`])
      }
    //   onClick={handleActive}
  return (
    <section className="fixtures-section container-lg mt-3" id='fixtures'>
        <header className="Fixtures-header mb-2">
            <nav className="fixtures-nav">
                <ul className="nav" id="pills-tab" role="tablist" >
                    <li onClick={handleActive} class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Hier</button>
                    </li>
                    <li onClick={handleActive} class="nav-item active" role="presentation">
                        <button class="nav-link active" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Aujourd'hui</button>
                    </li>
                    <li onClick={handleActive} class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Demain</button>
                    </li>

                </ul>
            </nav>
        </header>
        <div className="Fixtures-main tab-content" id="pills-tabContent">
            <div class="tab-pane fade" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                <Hier data={data} callback={updateDataFunc}/>
            </div>
            <div class="tab-pane fade show active" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
                <Today data={data} callback={updateDataFunc} />
            </div>
            <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0">
                <Tomorrow data={data} callback={updateDataFunc}/>
            </div>
        </div>
        <div className="Fixtures-footer">
            <DayCalendar program={program}/>
        </div>
    </section>
  )
}
