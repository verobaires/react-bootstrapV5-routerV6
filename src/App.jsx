
import './App.css';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';



import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import Tres from './components/Sucursales/Sucursales'
import Menu from './components/Menu/Menu';
import Banner from './components/Banner/Banner';
 



function App() {
  return (
    <div className="App">
    <Banner/>
      < Router>
        <Routes>
          <Route path='/' element={<Menu />}>
            <Route index element={<Home />} />
            <Route path='sucursales' element={ <Tres/>} />
            <Route path='contact' element={<Contact />} />
            <Route path='*' element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </ Router>

    </div>
  );
}

export default App