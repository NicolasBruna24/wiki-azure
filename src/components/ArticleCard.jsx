import { Link } from 'react-router-dom';

export default function ArticleCard({ article }) {
  return (
    <article className="card">
      <div className="card__body">
        <h3 className="card__title">{article.title}</h3>
        <p className="card__excerpt">{article.excerpt}</p>
        <Link to={`/article/${article.category}/${article.id}`} className="card__link">
          Leer artículo <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
