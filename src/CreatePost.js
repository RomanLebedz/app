import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Badge from "@material-ui/core/Badge";
import AddIcon from "@material-ui/icons/AddCircle";
import IconButton from "@material-ui/core/IconButton";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1)
        },
    },
}));

export default function CreatePost() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <IconButton aria-label="show 4 new mails" color="inherit" onClick={handleClickOpen}>
                <Badge color="secondary">
                    <AddIcon />
                </Badge>
            </IconButton>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Новый товар</DialogTitle>
                <DialogContent  className={classes.root} noValidate autoComplete="off">
                    <DialogContentText>
                        Добавить новый товар
                    </DialogContentText>
                    <TextField
                        autoFocus
                        label="Наименование товара"
                        id="outlined-size-normal"
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        label="Модель"
                        id="outlined-size-normal"
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        label="Цена"
                        id="outlined-size-normal"
                        variant="outlined"
                        fullWidth
                    />
                    <Button
                        variant="contained"
                        color="default"
                        className={classes.button}
                        startIcon={<CloudUploadIcon />}
                    >
                        Upload
                    </Button>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Отмена
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Сохранить
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
