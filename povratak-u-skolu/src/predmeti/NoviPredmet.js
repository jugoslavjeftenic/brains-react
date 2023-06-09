import { Box, TextField, Typography } from "@mui/material";

const NoviPredmet = () => {
    return (
        <Box
            alignSelf={'center'}
            mt={5}
            mb={5}
            border={1}
            borderRadius={2}
            padding={2}
        >
            <Box
                alignSelf={'center'}
            >
                <Typography
                    variant='subtitle1'
                    textAlign={'center'}
                >NOVI PREDMET</Typography>
            </Box>
            <Box
                alignSelf={'center'}
            >
                <TextField
                    required
                    variant='standard'
                    id='predmet-naziv'
                    type='text'
                    label='Naziv predmeta'
                />
                <TextField
                    required
                    variant='standard'
                    id='predmet-razred'
                    type='number'
                    label='Razred'
                />
                <TextField
                    required
                    variant='standard'
                    id='predmet-fond-casova'
                    type='number'
                    label='Fond časova'
                />
            </Box>
            <Box
                alignSelf={'center'}
            >
                Pucad.
            </Box>
        </Box>
    );
};

export default NoviPredmet;