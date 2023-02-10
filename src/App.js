import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route exact path='/' element={< Home />} />
        </Routes>
        <Footer /> 
      </Router>  
      
    </div>
  );
}

export default App;
