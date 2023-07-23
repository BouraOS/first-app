import 'normalize.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header'
import './Components/Fixtures/FixStyle.css'
import './App.css';

import {
    createBrowserRouter, 
    createRoutesFromElements,
    Route, 
    RouterProvider
  } from 'react-router-dom'

// pages
import Hier from './Components/Fixtures/pages/Hier'
import Today from './Components/Fixtures/pages/Today';
import Tomorrow from './Components/Fixtures/pages/Tomorrow';

// layouts
import FixturesLayout from './Components/Fixtures/Layouts/FixturesLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<FixturesLayout />}>
      <Route index element={<Today />} />
      <Route path="hier" element={<Hier />} />
      <Route path="demain" element={<Tomorrow />}/>
    </Route>
  )
)

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <Header/>
        </header>
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
