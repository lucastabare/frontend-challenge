import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography
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

  const fetchNews = async () => {
    try {
      const response = await getNews({ page: 1, pageSize: 100 });
      setNewsList(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (open) fetchNews();
  }, [open]);

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
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      disableEnforceFocus
      keepMounted
    >
      <DialogTitle>Eliminar Noticias</DialogTitle>
      <DialogContent dividers>
        {newsList.length === 0 ? (
          <Typography variant="body2">No hay noticias disponibles.</Typography>
        ) : (
          <List>
            {newsList.map((news) => (
              <ListItem
                key={news.id}
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
            ))}
          </List>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cerrar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteModal;
