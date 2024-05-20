import { Link } from 'react-router-dom'
import '../../styles/Header.css'
import logo from '../../assets/LOGO.png'
 
function Header() {
    return (
      <div className='header'>
        <div className='logo'>
            <img src={logo} alt="Kasa" />
        </div>
        <nav className='header-links'>
            <Link to="/">Accueil</Link>
            <Link to="/about">A propos</Link>
        </nav>
      </div>
    )
}

export default Header