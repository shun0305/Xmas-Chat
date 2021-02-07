import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {
        // gridRow: 1,
        float: 'right',
        width: '180px',
        overflow: 'auto',
        marginRight: '65px',
        borderRadius: '10px',

    }
});
const Picture = (imageurl) => {
    const classes = useStyles();
    return (

        <div>
            <img alt="" src={imageurl.imageurl}
                className={classes.root}
            />
        </div>

    )
};

export default Picture