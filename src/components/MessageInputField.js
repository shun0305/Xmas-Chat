import React, { useRef, useState } from 'react';
import { Avatar, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { gravatarPathUser } from '../gravatar';
import { gravatarPath } from '../gravatar';
import MessageField from './MessageField';
import MessageSubmitButton from './MessageSubmitButton';
import ImageArea from './imageArea';
//import MenuBarButton from './MenuBarButton';
import MapButton from './MapButton';

const useStyles = makeStyles({
    root: {
        gridRow: 2,
        margin: '26px',
    },
    avatar: {
        marginLeft: '8px',
        maxWidth: '80%',
    }
});

const MessageInputField = ({ name }) => {
    const inputEl = useRef(null);
    const [text, setText] = useState('');
    const classes = useStyles();
    const avatarPath = name === 'santa' ? gravatarPath(name) : gravatarPathUser(name);
    return (<div className={classes.root}>
        <Grid container>
            <Grid item xs={1}>
                <Avatar src={avatarPath} />
            </Grid>
            <Grid item xs={7} className={classes.avatar}>
                <MessageField
                    inputEl={inputEl}

                    name={name} setText={setText} text={text} />
            </Grid>
            <Grid item xs={1}>
                <MessageSubmitButton
                    inputEl={inputEl}
                    name={name} setText={setText} text={text} />
            </Grid>
            <Grid item xs={1}>
                <ImageArea
                    name={name} setText={setText} text={text} />
            </Grid>
            <Grid item xs={1}>
                <MapButton />
            </Grid>
        </Grid>
    </div>);

};

export default MessageInputField;