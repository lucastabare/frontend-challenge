import { useEffect, useState } from 'react';
import { getNews } from '../services/newsService';
import { News, PaginatedResponse } from '../interfaces/News';
import SearchInput from '../components/SearchInput';
import Pagination from '../components/Pagination';
import Header from '../components/Header';
import NewsList from '../components/NewsList';
import { Box, CircularProgress, Typography } from '@mui/material';

const Home: React.FC = () => {
    const [newsList, setNewsList] = useState<News[]>([]);
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const [pageSize] = useState(6);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            setError(false);
            try {
                const data: PaginatedResponse<News> = await getNews({ page, pageSize, query });
                setNewsList(data.data || []);
                setTotalPages(data.totalPages || 1);
            } catch (err) {
                console.error(err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, [page, pageSize, query]);

    return (
        <>
            <Header />
            <Box className="bg-white py-4 flex justify-center">
                <SearchInput onSearch={setQuery} />
            </Box>
            <Box className="max-w-5xl mx-auto p-4">
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    Noticias
                </Typography>

                {loading ? (
                    <Box display="flex" justifyContent="center" mt={4}>
                        <CircularProgress />
                    </Box>
                ) : error ? (
                    <Typography color="error" mt={4}>
                        Ocurrió un error al cargar las noticias.
                    </Typography>
                ) : newsList.length === 0 ? (
                    <Typography mt={4}>No hay noticias disponibles.</Typography>
                ) : (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                           <NewsList news={newsList} />
                        </div>
                        <Pagination
                            currentPage={page}
                            totalPages={totalPages}
                            onPageChange={setPage}
                        />
                    </>
                )}
            </Box>
        </>
    );
};

export default Home;
