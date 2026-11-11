import { useParams } from 'react-router-dom';
import { getArticlesByCategory } from '../data/articles';
import { CATEGORY_BY_ID } from '../data/categories';
import ArticleCard from '../components/ArticleCard';
import SectionIndicator from '../components/SectionIndicator';
import BackToHome from '../components/BackToHome';

export default function Category() {
  const { categoryId } = useParams();
  const category = CATEGORY_BY_ID[categoryId];
  const articles = getArticlesByCategory(categoryId);

  if (!category) {
    return (
      <div className="page not-found-page">
        <BackToHome />
        <div className="empty-state">
          <h2>Categoría no encontrada</h2>
          <p>La categoría solicitada no existe.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page category-page">
      <BackToHome />
      <SectionIndicator />
      <h1 className="page__title">{category.title}</h1>
      <p className="page__subtitle">{category.description}</p>

      <div className="article-list">
        {articles.length > 0 ? (
          articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))
        ) : (
          <div className="empty-state">
            <h2>Sin artículos</h2>
            <p>Esta categoría aún no tiene artículos publicados.</p>
          </div>
        )}
      </div>
    </div>
  );
}
