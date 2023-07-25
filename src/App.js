import 'normalize.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header'
import FixturesLayout from './Components/Fixtures/Layouts/FixturesLayout';
import './Components/Fixtures/FixStyle.css'
import './App.css';




function App() {
  return (
    <div className="App">
        <header className="App-header">
          <Header/>
        </header>
        <FixturesLayout/>
    </div>
  );
}

export default App;
