import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

const style = {
    padding: "1rem",
};

export default class Power extends Component {

    render() {
        return (
            <div style={style}>
                <Typography variant="h5" color="initial">Adicione a quantidade de poder agora</Typography>
                <form noValidate autoComplete="off">
                    <TextField type="number" label="Ataque" variant="outlined" />
                    <TextField type="number" label="Defesa" variant="outlined" />
                </form>
            </div>
        )
    }
}
