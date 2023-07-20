import 'normalize.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header/Header'
import Fixtures from './Components/Fixtures/Fixtures';
import DayCalendar from './Components/Fixtures/DayCalendar';
function App() {
  return (
    <div className="App">
        <header className="App-header">
          <Header/>
        </header>
        <>
          <section className="fixtures-section container-lg mt-3">
            <Fixtures/>
            <DayCalendar/>
          </section>
          <div className='text-center mb-2'>
            <button type='button' className='btn btn-danger'><i class="fa-solid fa-calendar-days" style={{marginRight: "10px"}}></i>Voir tout le programme</button>
          </div>
        </>
    </div>
  );
}

export default App;
