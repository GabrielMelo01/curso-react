import { Link } from 'react-router-dom';
import './notfound.css'
import errorImage from '../../img/error-404.avif'

function NotFound() {
    return (
        <div className="not-found">
            <h1>Página não encontrada</h1>
            <img src={errorImage} alt="Error 404" />
            <Link to={'/'}>Voltar a Home</Link>
        </div>
    );
}
export default NotFound;