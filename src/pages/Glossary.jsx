import { GLOSSARY } from '../data/glossary';
import SectionIndicator from '../components/SectionIndicator';
import BackToHome from '../components/BackToHome';

export default function Glossary() {
  return (
    <div className="page glossary-page">
      <BackToHome />
      <SectionIndicator />
      <h1 className="page__title">Glosario</h1>
      <p className="page__subtitle">Conceptos técnicos de la nube explicados de manera sencilla.</p>

      <div className="glossary-grid">
        {GLOSSARY.map((item) => (
          <div key={item.term} className="glossary-card">
            <h3 className="glossary-card__term">{item.term}</h3>
            <p className="glossary-card__definition">{item.definition}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
