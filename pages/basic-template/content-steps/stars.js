import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

const style = {
    padding: "1rem",
};

export default class Stars extends Component {
    render() {

        return (
            <div style={style}>
                <Typography variant="h5" color="initial">Selecione quantas estrelas</Typography>
                    <ButtonGroup orientation="vertical" color="primary" aria-label="outlined primary button group">
                        <Button>⭐</Button>
                        <Button>⭐⭐</Button>
                        <Button>⭐⭐⭐</Button>
                        <Button>⭐⭐⭐⭐</Button>
                        <Button>⭐⭐⭐⭐⭐</Button>
                    </ButtonGroup>
            </div>
        )
    }
}
