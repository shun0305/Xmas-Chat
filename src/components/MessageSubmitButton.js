import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from "@material-ui/styles";
import { pushMessage } from '../firebase'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#388e3c',
        },
        secondary: {
            light: '#0066ff',
            main: '#d32f2f',
            contrastText: '#ffcc00',
        }
    }
});
const MessageSubmitButton = ({ inputEl, name, setText, text, imageurl }) => {
    return (
        <ThemeProvider theme={theme}>
            <IconButton disabled={text === ''}
                onClick={() => {
                    imageurl = ''
                    pushMessage({ name, text, imageurl });

                    setText('');
                    inputEl.current.focus();
                }}
            >
                <SendIcon color="secondary" />
            </IconButton>
        </ThemeProvider>
    )
};

export default MessageSubmitButton;