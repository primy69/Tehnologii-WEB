import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
    const handleInputChange = (event) => {
        console.log(event.target.value);
    }

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="standard-basic"
                label="Standard"
                variant="standard"
                onChange={handleInputChange}
            />
        </Box>
    );
}