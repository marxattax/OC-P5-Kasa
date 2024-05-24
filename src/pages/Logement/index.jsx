import { logements } from '../../datas/logements.js'
import Depliant from '../../components/Depliant/index.jsx'
import Tags from '../../components/Tags/index.js'
import Carousel from '../../components/Carousel/index.jsx'
import Rating from '../../components/Rating/index.js'
import '../../styles/logement.css'

function Logement(props) {
    const id = props.id
    for(var i=0; i<logements.length; i++) {
        while (id == logements[i].id) {
            const logement = logements[i]

    return <div className='logement'>
    <div className='card-logement'>
        <Carousel listImg={logement.pictures} />
        <div className='card-encart'>
            <div className='card-title-and-location'>
                <span className='card-title'>{logement.title}</span>
                <span className='card-location'>{logement.location}</span>
            </div>
            <div className='card-user'>
                <span>{logement.host.name}</span>
                <img src={logement.host.picture} alt={logement.host.name} />
            </div>
        </div>
        <div className='card-tags-and-rating'>
            <Tags array={logement.tags} />
            <div className='card-rating'>
                <Rating rating={logement.rating} />
            </div>
        </div>
        <div className='card-description-and-equipments'>
            <Depliant target={logement}>
                Description
                <span className='card-description'>{logement.description}</span>
            </Depliant>
            <Depliant target={logement}>
                Équipements
                {logement.equipments.map((i) => (<span key={i} className="card-equipments">{i}</span>))}
            </Depliant>
        </div>
    </div>

    </div>
        }}
    }

export default Logement