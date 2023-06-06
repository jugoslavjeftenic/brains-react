import { Box, CircularProgress } from '@mui/material';
import React from 'react';

const Loading = ({ loading }) => {
    return (
        <Box
            sx={{
                display: loading ? 'block' : 'none',
                // display: () => loading ? 'block' : 'none',
                textAlign: 'center',
                margin: 5,
            }}
        >
            <CircularProgress />
        </Box>
    );
};

export default Loading;
