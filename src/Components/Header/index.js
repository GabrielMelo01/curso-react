import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
    const [headerOpacity, setHeaderOpacity] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const maxScroll = 200; // Defina o valor máximo de scroll para opacidade máxima
            const opacity = Math.min(scrollY / maxScroll, 1);
            setHeaderOpacity(opacity);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header style={{ backgroundColor: `rgba(0, 0, 0, ${headerOpacity > 0.75 ? 0.75 : headerOpacity})`, backdropFilter: 'blur(10px)' }}>
            <Link className="logo" to='/'>Prime Flix</Link>
            <Link className="favoritos" to='/favoritos'>Minha Conta</Link>
        </header>
    );
}

export default Header;
