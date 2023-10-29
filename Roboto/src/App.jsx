import React from 'react'
import './App.css'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import MainContent from './components/maincontent'
import AddRobot from './components/addRobot'


const App = () => {
  return (
    <div className='container'>
      <Router>
        <div>
      <Header/>
      <Routes>
  <Route path="/" element={<MainContent />} />
  <Route path="/add-tobo" element={<AddRobot />} />
</Routes>

      {/* <MainContent/> */}
      <Footer/>
      </div>
      </Router>

    </div>
   
  )
}

export default App