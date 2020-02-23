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
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    }
}));

function App() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <MainMenu/>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                <Grid container>
                        <Grid container justify="center" spacing={12}>
                            {[0, 1, 2, 3, 4, 5, 6, 76, 7, 8].map(value => (
                                <Grid key={value} item className={classes.card}>
                                    <Item/>
                                </Grid>
                            ))}
                        </Grid>
                </Grid>
                </main>
            </div>
        </ThemeProvider>
    );
}

export default App;
