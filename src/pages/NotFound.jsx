import { Link } from 'react-router-dom';
import BackToHome from '../components/BackToHome';

export default function NotFound() {
  return (
    <div className="page not-found-page">
      <BackToHome />
      <div className="empty-state">
        <h1>404</h1>
        <h2>Página no encontrada</h2>
        <p>La página que buscas no existe.</p>
        <Link to="/" className="btn btn--primary">Ir al inicio</Link>
      </div>
    </div>
  );
}
