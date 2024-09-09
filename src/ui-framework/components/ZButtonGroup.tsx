import React from 'react';
import { ButtonGroup, Button } from '@mui/material';

const ZButtonGroup: React.FC = () => {
    return (
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
        </ButtonGroup>
    );
};

export default ZButtonGroup;
