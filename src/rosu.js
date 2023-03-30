import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


const changeBackgroundColor = (color) => {
    console.log('changeBackgroundColor called with color:', color);
    const element = document.getElementById("root");
    element.style.backgroundColor = color;
}

export default function TextButtons() {
    return (
        <Stack direction="row" spacing={2}>
            <Button onClick={() => changeBackgroundColor("#ffffff")}>Default</Button>
            <Button onClick={() => changeBackgroundColor("#FF5733")}>Orange</Button>
            <Button onClick={() => changeBackgroundColor("#F4D03F")}>Yellow</Button>
        </Stack>
    );
}