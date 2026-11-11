import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES, HOME_FEATURED, WHAT_YOU_WILL_LEARN } from '../data/categories';
import ArticleCard from '../components/ArticleCard';
import BackToHome from '../components/BackToHome';
import { Play, BookOpen, Zap, Shield, Cloud, CreditCard } from 'lucide-react';

const HERO_STATS = [
  { label: '200+', text: 'Servicios en la nube' },
  { label: '60+', text: 'Regiones globales' },
  { label: '90+', text: 'Estándares de cumplimiento' },
];

export default function Home() {
  return (
    <div className="page home-page">
      <BackToHome />

      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__title">Azure Wiki</h1>
          <p className="hero__subtitle">
            Guía educativa sobre Microsoft Azure: conceptos, servicios principales y casos de uso
            para estudiantes y personas que se inician en la computación en la nube.
          </p>
          <div className="hero__stats">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="hero__stat">
                <span className="hero__stat-number">{stat.label}</span>
                <span className="hero__stat-label">{stat.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section__title">Qué aprenderá el visitante</h2>
        <ul className="feature-list">
          {WHAT_YOU_WILL_LEARN.map((item, i) => (
            <li key={i} className="feature-list__item">
              <span className="feature-list__number">{i + 1}</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="section section--bg">
        <h2 className="section__title">Servicios destacados</h2>
        <div className="card-grid">
          {HOME_FEATURED.map((service) => {
            const IconMap = { compute: Zap, storage: Cloud, databases: BookOpen, networking: Shield };
            const Icon = IconMap[service.id] || Cloud;
            return (
              <article key={service.id} className="card card--featured">
                <div className="card__icon">
                  <Icon size={24} />
                </div>
                <h3 className="card__title">{service.title}</h3>
                <p className="card__excerpt">{service.description}</p>
                <Link to={service.route} className="card__link">
                  Explorar <span aria-hidden="true">→</span>
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section">
        <h2 className="section__title">Accesos rápidos a categorías</h2>
        <div className="category-grid">
          {CATEGORIES.map((cat) => {
            const IconMap = {
              introduction: InfoIcon,
              compute: Zap,
              storage: Cloud,
              databases: BookOpen,
              networking: Shield,
              security: CreditCard,
              costs: CreditCard,
              'use-cases': BriefcaseIcon,
              glossary: BookOpen,
            };
            const Icon = IconMap[cat.id] || BookOpen;
            return (
              <Link key={cat.id} to={`/category/${cat.id}`} className="category-card">
                <div className="category-card__icon">
                  <Icon size={20} />
                </div>
                <span className="category-card__title">{cat.title}</span>
                <span className="category-card__count">{cat.articleCount} artículos</span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function InfoIcon() {
  return (
    <svg className="lucide-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />
    </svg>
  );
}
function BriefcaseIcon() {
  return (
    <svg className="lucide-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="12" x="2" y="9" rx="2" ry="2" /><path d="M4 9v2l3 3h10l3-3v-2" /><path d="M10 15h4" />
    </svg>
  );
}
