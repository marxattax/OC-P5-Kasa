import { Outlet, Link } from 'react-router'
import mountain from "../../assets/mountain.png"
import "../../styles/about.css"

function About () {
    return <div className='about'>
        <img src={mountain} alt="Mountain" />
        <div className='valeurs'>
            
        </div>
    </div>
}

export default About