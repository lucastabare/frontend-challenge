import { Box } from '@mui/material';
import { News } from '../interfaces/News';
import NewsItem from './NewsItem';

interface NewsListProps {
  news: News[];
}

const NewsList: React.FC<NewsListProps> = ({ news }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        mt: 2,
      }}
    >
      {news.map((item) => (
        <NewsItem key={item.id} news={item} />
      ))}
    </Box>
  );
};

export default NewsList;
