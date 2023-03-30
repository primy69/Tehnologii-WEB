import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const myfun = () => {
    console.log("Alert button")
    alert("Alert button")
}

export default function ContainedButtons1() {
    return (
        <Stack direction="row" spacing={2}>
            <Button variant="contained" color={"secondary"} onClick={myfun}>
                Alert
            </Button>
        </Stack>
    );
}