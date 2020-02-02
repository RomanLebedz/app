import React from 'react';
import './App.css';
import MainMenu from "./MainMenu";

import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Item from "./Item";
import makeStyles from "@material-ui/core/styles/makeStyles";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#c5cae9',
        },
        secondary: {
            light: '#0066ff',
            main: '#0044ff',
            contrastText: '#ffcc00',
        },
    },
});

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    }, control: {
        padding: theme.spacing(2),
    },
    card: {
        margin: '7px'
    }
}));

function App() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <MainMenu/>
                <Grid container className={classes.root}>
                        <Grid container justify="center" spacing={12}>
                            {[0, 1, 2, 3, 4, 5, 6, 76, 7, 8].map(value => (
                                <Grid key={value} item className={classes.card}>
                                    <Item/>
                                </Grid>
                            ))}
                        </Grid>
                </Grid>
            </div>
        </ThemeProvider>
    );
}

export default App;
