import React from 'react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const ZFloatingActionButton: React.FC = () => {
    return (
        <Fab color="primary" aria-label="add">
            <AddIcon />
        </Fab>
    );
};

export default ZFloatingActionButton;
