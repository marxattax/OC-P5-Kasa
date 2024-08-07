import './footer.css'
import logo from '../../assets/LOGO-footer.png'
 
function Footer() {
    return <div className='footer'>
        <img src={logo} alt="Kasa" />
        <span>© 2020 Kasa. All rights reserved</span>
      </div>
}

export default Footer