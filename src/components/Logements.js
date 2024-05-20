import { logements } from '../datas/logements'
import '../styles/logements.css'

function Logements() {
    return <div className='logements'>
        {logements.map((logement) => (
            <div key={`${logement.id}`} className='logements-card'>
                <img src={logement.cover} alt={logement.title} />
                <span>{logement.title}</span>
            </div>
        ))}
    </div>
}

export default Logements