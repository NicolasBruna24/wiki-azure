import { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Search, Home, Menu as MenuIcon } from 'lucide-react';

export default function Header({ onToggleMenu }) {
  const [query, setQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <header className="header">
      <div className="header__container">
        <button className="header__menu-btn" onClick={onToggleMenu} aria-label="Menú">
          <MenuIcon size={20} />
        </button>

        <Link to="/" className="header__logo">
          <span className="header__logo-icon">☁</span>
          <span className="header__logo-text">Azure Wiki</span>
        </Link>

        <form className="header__search" onSubmit={handleSearch}>
          <Search size={16} className="header__search-icon" />
          <input
            type="text"
            className="header__search-input"
            placeholder="Buscar artículos..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="header__search-btn" aria-label="Buscar">
            <Search size={16} />
          </button>
        </form>

        <Link to="/" className="header__home">
          <Home size={18} />
          <span>Inicio</span>
        </Link>
      </div>
    </header>
  );
}
