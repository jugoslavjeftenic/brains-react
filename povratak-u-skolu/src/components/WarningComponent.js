import React from 'react';
import { Alert, Box } from '@mui/material';

const WarningComponent = ({ warning }) => {
    return (
        <Box textAlign={'center'}>
            <Alert variant='filled' severity='warning'>{warning}</Alert>
        </Box>
    );
};

export default WarningComponent;
