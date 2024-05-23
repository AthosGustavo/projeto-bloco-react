import React from 'react';
import './App.css';
import { Login } from './Paginas/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './Paginas/Home';
import { BarraLogin } from './componentes/BarraLogin';


function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<BarraLogin/>}>
          <Route index element={<Login/>}></Route>
          <Route path="home" element={<Home/>}></Route>
        </Route>
        
      </Routes>
     </Router>

    </div>
  );
}

export default App;
