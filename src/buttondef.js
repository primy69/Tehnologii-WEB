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
export default function ContainedButtons(props) {
    const classes = useStyles();
    const { onClick } = props;
    const handleClick = () => {
        onClick();
    }

    return (
        <div className={classes.root}>

            <Button  onClick={handleClick}> Afiseaza
            </Button>
        </div>
    );
}
