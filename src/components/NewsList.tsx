import { Box, Typography, List, ListItemButton, ListItemText, Divider, ListItemAvatar, Avatar } from '@mui/material';
import { useState } from 'react';
import { News } from '../interfaces/News';
import NewsItem from './NewsItem';

interface NewsListProps {
    news: News[];
}

const NewsList: React.FC<NewsListProps> = ({ news }) => {
    const [selectedNews, setSelectedNews] = useState<News | null>(news[0] || null);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 4,
                mt: 2,
            }}
        >
            <Box sx={{ flex: 2 }}>
                {selectedNews && <NewsItem news={selectedNews} />}
            </Box>

            <Box sx={{ flex: 1 }}>
                <Typography variant="h6" gutterBottom>
                    Más Noticias
                </Typography>
                <List dense>
                    {news.map((item) => (
                        <Box key={item.id}>
                            <ListItemButton
                                selected={selectedNews?.id === item.id}
                                onClick={() => setSelectedNews(item)}
                                alignItems="flex-start"
                            >
                                <ListItemAvatar>
                                    <Avatar
                                        variant="square"
                                        src={item.imageUrl || ''}
                                        alt={item.title}
                                        sx={{ width: 56, height: 56, mr: 2 }}
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={item.title}
                                    secondary={item.author}
                                    primaryTypographyProps={{ fontWeight: 500 }}
                                />
                            </ListItemButton>
                            <Divider component="li" />
                        </Box>
                    ))}
                </List>
            </Box>
        </Box>
    );
};

export default NewsList;
