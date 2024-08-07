import './error.css'
import { Link } from 'react-router-dom'

function Error() {
    return <div class="error">
        <div class="error-title">404</div>
        <div class="error-subtitle">Oups! La page que vous demandez n'existe pas.</div>
            <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
}

export default Error