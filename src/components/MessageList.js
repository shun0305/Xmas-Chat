import React, { useEffect, useState } from 'react';
import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MessageItem from './MessageItem'
import { messagesRef } from '../firebase'
import ImagePreview from './imagePreview';

const useStyles = makeStyles({
    root: {
        gridRow: 1,
        width: '100%',
        overflow: 'auto',
        backgroundColor: '#FF3300',
        color: 'white',

    }
})

const MessageList = () => {
    const [messages, setMessages] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        messagesRef.orderByKey().limitToLast(10).on('value', (snapshot) => {
            const messages = snapshot.val();
            if (messages === null) return;

            const entries = Object.entries(messages);
            const newMessages = entries.map((entry) => {
                const [key, nameAndText] = entry
                return { key, ...nameAndText };
            });
            setMessages(newMessages);
        });
    }, []);

    const length = messages.length;
    console.log(messages)

    return (
        <List className={classes.root}>
            {messages.map(({ key, name, text, imageurl }, index) => {
                const isLastItem = length === index + 1;
                if (text === '') {
                    return <ImagePreview
                        imageurl={imageurl} />

                }
                else {
                    return <MessageItem
                        key={key}
                        name={name}
                        text={text}
                        isLastItem={isLastItem}
                    />
                }
            })
            }
        </List>);
};

export default MessageList;