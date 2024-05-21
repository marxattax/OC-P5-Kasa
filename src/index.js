import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Index from './pages/Index'
import Header from './components/Header/index.js'
import Footer from './components/Footer/index.jsx'
import About from './pages/Index/about.jsx'
import './styles/index.css'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/About" element={<About />} />
        </Routes>
     <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
