import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function BackToHome() {
  return (
    <Link to="/" className="back-to-home">
      <ArrowLeft size={16} />
      <span>Volver al inicio</span>
    </Link>
  );
}
