import { useRef, useState } from "react";
import { Box, Button, Container, MenuItem, Select, TextField } from "@mui/material";

const Predmeti = () => {
    const [error, setError] = useState(Error());

    // Priprema za fetch
    const [selectWhatToFetch, setSelectWhatToFetch] = useState(['0', '', 'number', 'none']);
    const handleFetchSelect = (e) => {
        const choice = e.target.value;
        setError(Error());
        switch (choice) {
            case '1':
                setSelectWhatToFetch(['1', 'upišite ID predmeta...', 'number', 'inline-flex']);
                break;
            case '2':
                setSelectWhatToFetch(['2', 'upišite početak naziva predmeta...', 'text', 'inline-flex']);
                break;
            default:
                setSelectWhatToFetch(['0', '', 'text', 'none']);
        }
    };
    const fetchParam = useRef('');
    // const handleFetchParam = (e) => {
    //     fetchParam.current = e.target.value;
    // };

    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                mt: 3,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    gap: 1,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 1,
                        flexGrow: 1,
                    }}
                >
                    <Button
                        variant='contained'
                        size='large'
                        disableElevation
                    // onClick={handleFetch}
                    >
                        Dobavi
                    </Button>
                    <Select
                        variant='outlined'
                        size='large'
                        id='predmeti-fetch-select'
                        value={selectWhatToFetch[0]}
                        sx={{
                            width: 190,
                        }}
                        onChange={handleFetchSelect}
                    >
                        <MenuItem value='0'>sve predmete</MenuItem>
                        <MenuItem value='1'>po ID-u</MenuItem>
                        <MenuItem value='2'>po početku naziva</MenuItem>
                    </Select>
                    <TextField
                        variant='outlined'
                        size='large'
                        id='predmeti-fetch-input'
                        label={selectWhatToFetch[1]}
                        type={selectWhatToFetch[2]}
                        sx={{
                            display: () => selectWhatToFetch[3],
                            // width: 200,
                            flexGrow: 1,
                            maxWidth: 300,
                        }}
                        onChange={(e) => fetchParam.current = e.target.value}
                        // onChange={handleFetchParam}
                        error={error.message ? true : false}
                    />
                </Box>
                <Button
                    variant='outlined'
                    size='large'
                >Novi predmet</Button>
            </Box>
        </Container>
    );
};

export default Predmeti;
