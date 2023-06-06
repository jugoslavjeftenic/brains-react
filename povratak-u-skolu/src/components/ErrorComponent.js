import React from 'react';
import { Alert, Box } from '@mui/material';

const ErrorComponent = ({ error }) => {
    return (
        <Box textAlign={'center'}>
            <Alert variant='filled' severity='error'>Dogodila se greška - {error}</Alert>
        </Box>
    );
};

export default ErrorComponent;
