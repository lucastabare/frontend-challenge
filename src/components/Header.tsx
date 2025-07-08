import React, { useState } from 'react';
import { Button, Modal, Box } from '@mui/material';
import NewsForm from './NewsForm';
import DeleteModal from './DeleteModal';

const modalStyle = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
};

const Header: React.FC = () => {
    const [openCreate, setOpenCreate] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);

    return (
        <header className="header">
            <div className="logo">MFNews</div>
            <div className="actions">
                <Button
                    variant="contained"
                    color="error"
                    onClick={() => setOpenDelete(true)}
                >
                    Eliminar Noticia
                </Button>
                <Button
                    variant="contained"
                    onClick={() => setOpenEdit(true)}
                    sx={{ mx: 1 }}
                >
                    Editar Noticia
                </Button>
                <Button
                    variant="contained"
                    color="success"
                    onClick={() => setOpenCreate(true)}
                >
                    Crear Noticia
                </Button>
            </div>

            <Modal open={openCreate} onClose={() => setOpenCreate(false)}>
                <Box sx={modalStyle}>
                    <NewsForm onClose={() => setOpenCreate(false)} />
                </Box>
            </Modal>

            <Modal open={openEdit} onClose={() => setOpenEdit(false)}>
                <Box sx={modalStyle}>
                    <NewsForm isEditMode onClose={() => setOpenEdit(false)} editId="1" />
                </Box>
            </Modal>

            <Modal open={openDelete} onClose={() => setOpenDelete(false)}>
                <Box sx={modalStyle}>
                    <DeleteModal open={openDelete} onClose={() => setOpenDelete(false)} />
                </Box>
            </Modal>
        </header>
    );
};

export default Header;
