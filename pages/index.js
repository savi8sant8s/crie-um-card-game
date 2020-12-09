import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const style = {
    padding: "1rem",
};

export default function App() {

    return (
        <div className="app" style={style}>
            <Grid container alignContent={"center"} alignItems={"center"}>
                <Grid item xs={12}>
                    <Typography variant="h3">Crie seu card game agora!!!</Typography>
                    <Button variant="contained" color="primary" fullWidth href="card-simples">Vamos começar</Button>
                </Grid>
            </Grid>
        </div>
    )
}
