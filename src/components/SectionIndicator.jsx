import { useLocation } from 'react-router-dom';
import { CATEGORY_BY_ID } from '../data/categories';

export default function SectionIndicator() {
  const location = useLocation();
  const match = location.pathname.match(/\/category\/([^\/]+)/);
  const categoryId = match ? match[1] : null;
  const category = categoryId ? CATEGORY_BY_ID[categoryId] : null;

  if (!category) return null;

  return (
    <div className="section-indicator">
      <span className="section-indicator__badge">{category.id.toUpperCase()}</span>
      <span className="section-indicator__title">{category.title}</span>
    </div>
  );
}
