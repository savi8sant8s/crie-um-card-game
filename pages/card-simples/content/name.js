import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

const style = {
    padding: "1rem",
};

export default class Name extends Component {

    render() {
        return (
            <div style={style}>
                <Typography variant="h5" color="initial">Adicione um nome legal</Typography>
                <form noValidate autoComplete="off">
                    <TextField label="Nome" variant="outlined" />
                </form>
            </div>
        )
    }
}
