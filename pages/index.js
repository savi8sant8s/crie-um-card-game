import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import backgroundImage from '../public/cool-background.png';

const bgImage = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh'
};

export default function App() {

    return (
        <div className="app" style={bgImage}>
           <Grid container spacing={1} m={2}>
                <Grid item xs={12}>
                    <Typography variant="h6" style={{color: "white"}}>Crie seu card game</Typography>
                </Grid>
                <Grid item xs={4}>
                    <img width="400px" src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Hand_in_Shithead.jpg" />
                </Grid>
                <Grid item xs={8}>
                    <Typography variant="h2" style={{color: "white"}}>Crie seu card game agora!!!</Typography>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" fullWidth href="card-simples">Vamos começar</Button>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
