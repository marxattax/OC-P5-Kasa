import './carousel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight} from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

function Carousel(props) {
    const listImg = props.listImg

    const [currentObject, setCurrentObject] = useState(0)

    const prevImg= () => {
        currentObject > 0 ? setCurrentObject(currentObject -1) : setCurrentObject(listImg.length -1)
    }

    const nextImg = () => {
        currentObject < listImg.length -1 ? setCurrentObject(currentObject +1) : setCurrentObject(0)
    }

        return <div className="carousel">
        <FontAwesomeIcon icon={faChevronLeft} className="prev-img" onClick={prevImg} />
        <FontAwesomeIcon icon={faChevronRight} className="next-img" onClick={nextImg} />
        <span className="count-img">{currentObject+1}/{listImg.length}</span>
        <img className="carousel-img" src={listImg[currentObject]} alt="Carousel" />
        </div>

}

export default Carousel