import React, { useEffect, useRef, } from 'react';
import {
    Avatar,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { gravatarPath } from '../gravatar';
import { gravatarPathUser } from '../gravatar';




const useStylesright = makeStyles(() => ({
    avaright: {
        position: 'absolute',
        right: '0px',
    },
    nameright: {
        textAlign: 'end',
        marginRight: '50px',
        marginBottom: '5px',
    },
    textright: {
        float: 'right',
        marginRight: '50px',
        color: 'white',
        background: '#009966',
        borderRadius: '4px',
        fontWeight: '500',
        padding: '.5rem',
        maxWidth: '80%',
        width: 'auto',
        fontSize: '13px'
    }

}));

const useStylesleft = makeStyles(() => ({

    nameright: {
        marginBottom: '5px',
    },

    textright: {

        color: 'white',
        background: '#009966',
        borderRadius: '4px',
        fontWeight: '500',
        padding: '.5rem',
        marginRight: '1rem',
        maxWidth: '80%',
        width: 'auto',
        fontSize: '13px'
    },
}));



const MessageItem = ({ isLastItem, name, text, }) => {
    const ref = useRef(null);
    //const [images, setImages] = useState("");
    const classes = useStylesright();
    const classesleft = useStylesleft();
    const avatarPath = name === 'santa' ? gravatarPath(name) : gravatarPathUser(name);

    console.log(name);
    useEffect(() => {
        if (isLastItem) {
            //スクロール
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [isLastItem]);



    if (name === 'santa') {
        return (

            <ListItem
                // divider={true}
                ref={ref}  >
                <ListItemAvatar className={classesleft.avaright}>
                    <Avatar src={avatarPath} />
                </ListItemAvatar>
                <ListItemText
                    primary={<Typography className={classesleft.nameright}>
                        {name}
                    </Typography>}

                    secondary={
                        <Typography
                            component="span"
                            variant="body2"
                            className={classesleft.textright}
                        >
                            {text}
                        </Typography>
                    }

                />



            </ListItem>
        )
    } else {
        return (

            <ListItem
                // divider={true}
                ref={ref}  >
                <ListItemAvatar className={classes.avaright}>
                    <Avatar src={avatarPath} />
                </ListItemAvatar>
                <ListItemText
                    primary={<Typography
                        className={classes.nameright}>
                        {name}
                    </Typography>}
                    secondary={
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.textright}
                        >
                            {text}
                        </Typography>
                    }
                />

            </ListItem>)
    }
};

export default MessageItem;