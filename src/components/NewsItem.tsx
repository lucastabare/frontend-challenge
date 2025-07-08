import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { News } from '../interfaces/News';

interface NewsItemProps {
    news: News;
}

const NewsItem: React.FC<NewsItemProps> = ({ news }) => {
    return (
        <Card sx={{ width: '100%', borderRadius: 2, boxShadow: 3 }}>
            <CardContent>
                <Typography variant="h4" component="h2" gutterBottom>
                    {news.title}
                </Typography>

                {news.author && (
                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                        Por {news.author} | {new Date(news.date).toLocaleDateString('es-AR', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                        })}
                    </Typography>
                )}
            </CardContent>

            {news.imageUrl && (
                <CardMedia
                    component="img"
                    height="350"
                    image={news.imageUrl}
                    alt={news.title}
                    sx={{ objectFit: 'cover' }}
                />
            )}

            <CardContent>
                <Typography variant="body1" color="text.primary">
                    {news.body}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default NewsItem;
