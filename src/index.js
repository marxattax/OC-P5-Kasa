import React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Index from './pages/Index'
import Header from './components/Header/index.jsx'
import Footer from './components/Footer/index.jsx'
import About from './pages/About/index.jsx'
import Logement from './pages/Logement/index.jsx'
import { logements } from './datas/logements'
import './styles/index.css'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/About" element={<About />} />
          {logements.map((logement) => (
          <Route path={`${logement.id}`} key={`${logement.id}`} element={<Logement id={`${logement.id}`} />} />
          ))}
        </Routes>
        <Footer />
    </Router>
  </React.StrictMode>
)
