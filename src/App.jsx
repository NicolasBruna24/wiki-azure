import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Category from './pages/Category';
import Article from './pages/Article';
import Glossary from './pages/Glossary';
import SearchResults from './pages/SearchResults';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="category/:categoryId" element={<Category />} />
          <Route path="category/:categoryId/:articleId" element={<Article />} />
          <Route path="article/:categoryId/:articleId" element={<Article />} />
          <Route path="glossary" element={<Glossary />} />
          <Route path="search" element={<SearchResults />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
