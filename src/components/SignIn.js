import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from "@material-ui/styles";
import RedeemIcon from '@material-ui/icons/Redeem';


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/shun0305/04_07_santa"
                target="_blank"
                rel="noopener">
                サンタクロース
            </Link>
        </Typography>
    );
}

const theme = createMuiTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#388e3c',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            light: '#0066ff',
            main: '#d32f2f',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#ffcc00',
        }
    }
});

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.error.dark,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },

    back: {
        backgroundColor: theme.palette.error.dark,
    }
}));


export default function SignIn({ setName }) {
    const classes = useStyles();
    const [disabled, setDisabled] = useState(true);
    const [string, setString] = useState('');
    const [isComposed, setIsComposed] = useState(false);
    //console.group({ string });


    //文字が入力されたらボタンが活性化
    useEffect(() => {
        const disabled = string === ''
        setDisabled(disabled)
    }, [string]);


    return (
        <ThemeProvider theme={theme} >
            <Container component="main" maxWidth="xs" >
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar} >
                        <RedeemIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Merry X'mas
                </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            color="secondary"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="ニックネーム"
                            name="name"
                            autoFocus
                            onChange={(e) => setString(e.target.value)}
                            onKeyDown={(e) => {
                                // console.log({ key: e.key });
                                if (isComposed) return;


                                if (e.key === 'Enter') {
                                    setName(e.target.value);
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
                        />


                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            disabled={disabled}
                            onClick={() => {
                                setName(string);
                            }}
                        >
                            はじめる
          </Button>

                    </form>
                </div>
                <Box mt={8}>
                    <Copyright />
                </Box>
            </Container>
        </ThemeProvider>
    );
}
