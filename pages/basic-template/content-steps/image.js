import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'

const style = {
    padding: "1rem",
};

export default class Image extends Component {

    constructor(props) {
        super(props)
        this.state = {
            file: null
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })
    }
    
    render() {
        return (
            <div style={style}>
                <Typography variant="h5" color="initial">Agora adicione uma imagem para finalizar</Typography>
                <TextField type="file" onChange={this.handleChange} variant="outlined" />
                <img src={this.state.file} />
            </div>
        );
    }
}