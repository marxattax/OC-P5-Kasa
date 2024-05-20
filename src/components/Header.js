import '../styles/Header.css'
import logo from '../assets/LOGO.png'

function Header() {
    return <div className="header">
    <img src={logo} alt="Kasa" className='logo' />
    <div className='header-links'>
        <a href="">Accueil</a>
        <a href="">A propos</a>
    </div>
    </div>
}

export default Header