import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography'

const style = {
    padding: "1rem",
};

export default class Image extends Component {

    render() {
        return (
            <div style={style}>
                <Typography variant="h5" color="initial">Agora adicione uma imagem para finalizar</Typography>
                
            </div>
        )
    }
}
