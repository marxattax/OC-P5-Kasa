import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Rating(props) {
    function starRating() {
    const rating =props.rating

    var i = 0

    const stars = document.querySelectorAll(".star")
    for(const star of stars) {
        i++
        if(i<=rating) {
        star.style.color = "red"
        }
    }
}


    return <span ref={starRating}>
        <FontAwesomeIcon icon={faStar} className="star" />
        <FontAwesomeIcon icon={faStar} className="star" />
        <FontAwesomeIcon icon={faStar} className="star" />
        <FontAwesomeIcon icon={faStar} className="star" />
        <FontAwesomeIcon icon={faStar} className="star" />
    </span>
}

export default Rating