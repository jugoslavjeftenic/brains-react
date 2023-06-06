import React from 'react';
import { Box, CircularProgress } from '@mui/material';

const LoadingComponent = () => {
    return (
        <Box textAlign={'center'}>
            <CircularProgress />
        </Box>
    );
};

export default LoadingComponent;
