import React, { useEffect, useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Button,
  Divider,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { getNews, deleteNews } from '../services/newsService';
import { News } from '../interfaces/News';

interface DeleteModalProps {
  open: boolean;
  onClose: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ open, onClose }) => {
  const [newsList, setNewsList] = useState<News[]>([]);

  useEffect(() => {
    if (open) {
      fetchNews();
    } else {
      setNewsList([]);
    }
  }, [open]);

  const fetchNews = async () => {
    try {
      const response = await getNews({ page: 1, pageSize: 100 });
      setNewsList(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteNews(id);
      setNewsList((prev) => prev.filter((news) => news.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  if (!open) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1300,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
      }}
    >
      <Paper sx={{ width: '100%', maxWidth: 500, maxHeight: '90vh', overflowY: 'auto', p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Eliminar Noticias
        </Typography>

        {newsList.length === 0 ? (
          <Typography variant="body2">No hay noticias disponibles.</Typography>
        ) : (
          <List>
            {newsList.map((news) => (
              <Box key={news.id}>
                <ListItem
                  secondaryAction={
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => news.id !== undefined && handleDelete(news.id)}
                    >
                      <DeleteIcon color="error" />
                    </IconButton>
                  }
                >
                  <ListItemText primary={news.title} secondary={news.author} />
                </ListItem>
                <Divider />
              </Box>
            ))}
          </List>
        )}

        <Box mt={2} textAlign="right">
          <Button onClick={onClose} variant="outlined">
            Cerrar
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default DeleteModal;
