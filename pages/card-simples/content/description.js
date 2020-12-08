import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

const style = {
    padding: "1rem",
};

export default class Description extends Component {

    render() {
        return (
            <div style={style}>
                <Typography variant="h5" color="initial">Adicione uma descrição ao Card Game</Typography>
                <form noValidate autoComplete="off">
                    <TextField multiline rows="3" label="Decrição" variant="outlined" />
                </form>
            </div>
        )
    }
}
