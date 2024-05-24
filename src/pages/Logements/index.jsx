import { Link } from 'react-router-dom'
import { logements } from '../../datas/logements.js'
import '../../styles/logements.css'

function Logements() {
    return <div className='logements'>
        {logements.map((logement) => (
            <Link key={`${logement.id}`} to={`${logement.id}`}>
                <div key={`${logement.id}`} className='logements-card'>
                    <img src={logement.cover} alt={logement.title} />
                    <div className='logements-card-title'><span>{logement.title}</span></div>
                </div>
            </Link>
        ))}
    </div>
}

export default Logements