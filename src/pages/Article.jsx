import { useParams } from 'react-router-dom';
import { getArticle } from '../data/articles';
import { CATEGORY_BY_ID } from '../data/categories';
import SectionIndicator from '../components/SectionIndicator';
import BackToHome from '../components/BackToHome';

export default function Article() {
  const { categoryId, articleId } = useParams();
  const article = getArticle(categoryId, articleId);
  const category = categoryId ? CATEGORY_BY_ID[categoryId] : null;

  if (!article) {
    return (
      <div className="page not-found-page">
        <BackToHome />
        <div className="empty-state">
          <h2>Artículo no encontrado</h2>
          <p>El artículo solicitado no existe.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page article-page">
      <BackToHome />
      {category && <SectionIndicator />}
      <article className="article-wrapper">
        <header className="article__header">
          <h1 className="article__title">{article.title}</h1>
          <p className="article__excerpt">{article.excerpt}</p>
        </header>
        <div className="article__body" dangerouslySetInnerHTML={{ __html: article.content }} />
      </article>
    </div>
  );
}
