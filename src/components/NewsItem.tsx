import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { News } from '../interfaces/News';

interface NewsItemProps {
  news: News;
}

const NewsItem: React.FC<NewsItemProps> = ({ news }) => {
console.log("news => ", news)

  return (
    <Card sx={{ width: '100%', borderRadius: 2, boxShadow: 3 }}>
      {news.imageUrl && (
        <CardMedia
          component="img"
          height="200"
          image={news.imageUrl}
          alt={news.title}
          sx={{ objectFit: 'cover' }}
        />
      )}
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {news.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {news.body}
        </Typography>
        {news.author && (
          <Box mt={1}>
            <Typography variant="caption" color="text.secondary">
              Por {news.author}
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default NewsItem;
