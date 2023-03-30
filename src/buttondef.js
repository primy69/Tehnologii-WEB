import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));
const myfun = () => {
    console.log("Alert button")
    alert("Alert button")
}
export default function ContainedButtons() {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Button variant="contained" color="secondary" href="#contained-buttons" onClick={myfun}>
                Alert button
            </Button>
        </div>
    );
}
