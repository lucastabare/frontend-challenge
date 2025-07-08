import React, { useEffect } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { News } from '../interfaces/News';
import { createNews, getNewsById, updateNews } from '../services/newsService';

interface NewsFormProps {
  onClose: () => void;
  isEditMode?: boolean;
  editId?: string;
}

const NewsForm: React.FC<NewsFormProps> = ({ onClose, isEditMode = false, editId }) => {
  const formik = useFormik<Partial<News>>({
    initialValues: {
      title: '',
      body: '',
      imageUrl: '',
      author: ''
    },
    validationSchema: Yup.object({
      title: Yup.string().required('El título es obligatorio'),
      body: Yup.string().required('El contenido es obligatorio'),
      imageUrl: Yup.string().url('Debe ser una URL válida').nullable(),
      author: Yup.string().nullable()
    }),
    onSubmit: async (values) => {
      try {
        if (isEditMode && editId) {
          await updateNews(editId, values as News);
        } else {
          await createNews(values as News);
        }
        onClose();
      } catch (err) {
        console.error(err);
      }
    }
  });

  useEffect(() => {
    if (isEditMode && editId) {
      getNewsById(parseInt(editId)).then(data => {
        formik.setValues({
          title: data.title,
          body: data.body,
          imageUrl: data.imageUrl,
          author: data.author
        });
      }).catch(console.error);
    }
  }, [editId, isEditMode]);

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 600, mx: 'auto', mt: 4 }}
    >
      <TextField
        label="Título"
        name="title"
        value={formik.values.title}
        onChange={formik.handleChange}
        error={formik.touched.title && Boolean(formik.errors.title)}
        helperText={formik.touched.title && formik.errors.title}
      />
      <TextField
        label="Contenido"
        name="body"
        multiline
        rows={4}
        value={formik.values.body}
        onChange={formik.handleChange}
        error={formik.touched.body && Boolean(formik.errors.body)}
        helperText={formik.touched.body && formik.errors.body}
      />
      <TextField
        label="URL de Imagen"
        name="imageUrl"
        value={formik.values.imageUrl}
        onChange={formik.handleChange}
        error={formik.touched.imageUrl && Boolean(formik.errors.imageUrl)}
        helperText={formik.touched.imageUrl && formik.errors.imageUrl}
      />
      <TextField
        label="Autor"
        name="author"
        value={formik.values.author}
        onChange={formik.handleChange}
        error={formik.touched.author && Boolean(formik.errors.author)}
        helperText={formik.touched.author && formik.errors.author}
      />
      <Button variant="contained" color="primary" type="submit">
        {isEditMode ? 'Actualizar Noticia' : 'Crear Noticia'}
      </Button>
    </Box>
  );
};

export default NewsForm;
