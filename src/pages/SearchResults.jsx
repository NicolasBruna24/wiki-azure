import { useSearchParams, Link } from 'react-router-dom';
import { searchArticles } from '../data/articles';
import BackToHome from '../components/BackToHome';

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const results = searchArticles(query);

  return (
    <div className="page search-page">
      <BackToHome />
      <h1 className="page__title">Resultados de búsqueda</h1>
      <p className="page__subtitle">
        Se encontraron {results.length} resultado{results.length !== 1 ? 's' : ''} para "{query}"
      </p>

      <div className="article-list">
        {results.length > 0 ? (
          results.map((article) => (
            <div key={`${article.category}-${article.id}`} className="card">
              <div className="card__body">
                <span className="card__category">{article.category}</span>
                <h3 className="card__title">{article.title}</h3>
                <p className="card__excerpt">{article.excerpt}</p>
                <Link to={`/article/${article.category}/${article.id}`} className="card__link">
                  Leer artículo <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-state">
            <h2>No se encontraron resultados</h2>
            <p>Intenta con otros términos de búsqueda.</p>
          </div>
        )}
      </div>
    </div>
  );
}
