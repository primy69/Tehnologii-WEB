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
const changeBackgroundColor = (color) => {
    console.log('changeBackgroundColor called with color:', color);
    const element = document.getElementById("root");
    element.style.backgroundColor = color;
}

export default function TextButtons() {

    return (
        <ThemeProvider theme={theme}>
        <Stack direction="row" spacing={2}>
            <Button color="colorbut" onClick={() => changeBackgroundColor("#ffffff")}>Default</Button>
            <Button color="colorbut" onClick={() => changeBackgroundColor("#ffd500")}>Galben</Button>
            <Button color="colorbut" onClick={() => changeBackgroundColor("#FF5733")}>Orange</Button>
        </Stack>
        </ThemeProvider>
    );
}