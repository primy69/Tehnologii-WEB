import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const theme = createTheme({
    palette: {
        colorbut: {
            main: '#000000',
        },
    },
});

export default function TextButtons(props) {
    return (
        <ThemeProvider theme={theme}>
            <Stack direction="row" spacing={2}>
                <Button color="colorbut" onClick={() => props.handleColorChange('#ffffff')}>
                    Default
                </Button>
                <Button color="colorbut" onClick={() => props.handleColorChange('#ffd500')}>
                    Galben
                </Button>
                <Button color="colorbut" onClick={() => props.handleColorChange('#FF5733')}>
                    Orange
                </Button>
            </Stack>
        </ThemeProvider>
    );
}
