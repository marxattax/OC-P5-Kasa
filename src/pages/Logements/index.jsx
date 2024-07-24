import { Link } from 'react-router-dom'
import { logements } from '../../datas/logements.js'
import Banner from '../../components/Banner'
import falaise from "../../assets/falaise.png"
import '../../styles/logements.css'

function Logements() {
    return <div className='logements'>
        <Banner>
            {falaise}
            Chez vous ici, partout, et ailleurs
        </Banner>
        <div class="logements-liste">
        {logements.map((logement) => (
            <Link key={`${logement.id}`} to={`${logement.id}`}>
                <div key={`${logement.id}`} className='logements-card'>
                    <img src={logement.cover} alt={logement.title} />
                    <div className='logements-card-title'><span>{logement.title}</span></div>
                </div>
            </Link>
        ))}
        </div>
    </div>
}

export default Logements