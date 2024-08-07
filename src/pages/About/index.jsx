import Banner from '../../components/Banner'
import Depliant from '../../components/Depliant'
import mountain from "../../assets/mountain.png"
import "./about.css"

function About () {
    return <div className='about'>
        <Banner>
            {mountain}
            <span></span>
        </Banner>
        <div className='valeurs'>
        <Depliant>
            Fiabilité
            <span>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</span>
        </Depliant>
        <Depliant>
            Respect
            <span>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</span>
        </Depliant>
        <Depliant>
            Service
            <span>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</span>
        </Depliant>
        <Depliant>
            Sécurité
            <span>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</span>
        </Depliant>
        </div>
    </div>
}

export default About