import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { pushMessage } from '../firebase'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from "@material-ui/styles";

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

const MessageField = ({ inputEl, name, setText, text, imageurl }) => {
    const [isComposed, setIsComposed] = useState(false);
    return (
        <ThemeProvider theme={theme}>
            <TextField fullWidth={true} color="secondary" autoFocus
                onChange={(e) => { setText(e.target.value); }}
                onKeyDown={(e) => {
                    if (isComposed) return;

                    const text = e.target.value;
                    if (text === '') return;

                    if (e.key === 'Enter') {
                        imageurl = ''
                        pushMessage({ name, text, imageurl })

                        setText('');
                        e.preventDefault();

                    }
                }}
                //変換の確定を識別
                onCompositionStart={() => {
                    setIsComposed(true)
                }}
                onCompositionEnd={() => {
                    setIsComposed(false)
                }}
                value={text}
            />
        </ThemeProvider>
    );

};

export default MessageField;
