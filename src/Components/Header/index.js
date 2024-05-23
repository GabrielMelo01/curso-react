import { Link } from 'react-router-dom';
import './header.css'
function Header() {
    return (
        <header>
        <Link className="logo" to='/'>MR Gestor</Link>
        <Link className="favoritos" to='/favoritos'>Minha Conta</Link>
      </header>
    );
}
export default Header;