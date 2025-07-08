import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { News } from '../interfaces/News';
import { getNewsById } from '../services/newsService';

const NewsDetail: React.FC = () => {
  const { id } = useParams();
  const [news, setNews] = useState<News | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      getNewsById(parseInt(id))
        .then((res: React.SetStateAction<News | null>) => setNews(res))
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) return <p className="text-center mt-10">Cargando...</p>;
  if (!news) return <p className="text-center mt-10">Noticia no encontrada</p>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">← Volver</Link>
      <h1 className="text-3xl font-bold mb-2">{news.title}</h1>
      <p className="text-sm text-gray-600 mb-4">
        • Por {news.author}
      </p>
      <div className="text-gray-800">
        <p>(Acá iría el contenido completo de la noticia si existiera en la API)</p>
      </div>
    </div>
  );
};

export default NewsDetail;
