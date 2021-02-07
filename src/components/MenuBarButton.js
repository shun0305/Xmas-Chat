import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddLocationIcon from '@material-ui/icons/AddLocation';
//import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from "@material-ui/styles";


const MenuBarButton = () => {



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






    return (
        <ThemeProvider theme={theme}>
            <IconButton color="secondary">

                <AddLocationIcon />
            </IconButton>
        </ThemeProvider>
    )
};



export default MenuBarButton