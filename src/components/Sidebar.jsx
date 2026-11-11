import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronRight, BookOpen, Layers, Database, Cylinder, Share2, Shield, CreditCard, Briefcase, Info } from 'lucide-react';
import { CATEGORIES } from '../data/categories';

const ICON_MAP = {
  introduction: Info,
  compute: Layers,
  storage: Database,
  databases: Cylinder,
  networking: Share2,
  security: Shield,
  costs: CreditCard,
  'use-cases': Briefcase,
  glossary: BookOpen,
};

export default function Sidebar({ isOpen = true, onToggle }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <aside className={`sidebar ${isOpen ? 'sidebar--open' : ''} ${isCollapsed ? 'sidebar--collapsed' : ''}`}>
      <div className="sidebar__header">
        <button className="sidebar__brand" onClick={() => navigate('/')} aria-label="Ir al inicio">
          <span className="sidebar__brand-icon">☁</span>
          <span className="sidebar__brand-text">{isCollapsed ? '' : 'Azure Wiki'}</span>
        </button>
        {!isOpen && (
          <button className="sidebar__toggle" onClick={onToggle} aria-label="Abrir menú">
            <Menu size={20} />
          </button>
        )}
        {isOpen && !isCollapsed && (
          <button className="sidebar__toggle" onClick={() => setIsCollapsed(true)} aria-label="Contraer menú">
            <X size={20} />
          </button>
        )}
        {isOpen && isCollapsed && (
          <button className="sidebar__toggle" onClick={() => setIsCollapsed(false)} aria-label="Expandir menú">
            <ChevronRight size={20} />
          </button>
        )}
      </div>

      <nav className="sidebar__nav" aria-label="Navegación principal">
        {CATEGORIES.map((category) => {
          const Icon = ICON_MAP[category.id] || BookOpen;
          const active = isActive(`/category/${category.id}`) || isActive(`/article/${category.id}/`);

          return (
            <div key={category.id} className="sidebar__category">
              <button
                className={`sidebar__category-button ${active ? 'sidebar__category-button--active' : ''}`}
                onClick={() => navigate(`/category/${category.id}`)}
              >
                <Icon size={16} className="sidebar__category-icon" />
                <span className="sidebar__category-label">{isCollapsed ? '' : category.title}</span>
                {!isCollapsed && <ChevronRight size={14} className="sidebar__category-chevron" />}
              </button>
            </div>
          );
        })}
      </nav>

      {isOpen && !isCollapsed && (
        <div className="sidebar__footer">
          <p className="sidebar__footer-text">Azure Wiki</p>
          <p className="sidebar__footer-sub">Recurso educativo sobre Microsoft Azure</p>
        </div>
      )}
    </aside>
  );
}
