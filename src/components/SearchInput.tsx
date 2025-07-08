import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

interface SearchInputProps {
  onSearch: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query.trim());
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: 2,
        mb: 4,
        mt: 2,
        width: '100%',
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Buscar noticias..."
        value={query}
        onChange={handleInputChange}
        sx={{ width: '100%', maxWidth: 400 }}
        size="small"
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        size="small"
        sx={{ textTransform: 'none' }}
      >
        Buscar
      </Button>
    </Box>
  );
};

export default SearchInput;
