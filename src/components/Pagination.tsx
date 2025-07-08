import { Box, Button, Typography } from '@mui/material';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handleClick = (page: number) => {
    if (page !== currentPage && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" gap={2} mt={4}>
      <Button
        variant="outlined"
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Anterior
      </Button>

      <Typography variant="body1">
        Página {currentPage} de {totalPages}
      </Typography>

      <Button
        variant="outlined"
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Siguiente
      </Button>
    </Box>
  );
};

export default Pagination;
