import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button'

const styles = {
    margin: {
        margin: "0.5rem"
    },
    border: {
        borderColor: "white",
    },
    gridStyle: {
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        margin: "1rem"
    }
};

const images = {
    exemplo: require("../images/example/exemplo-card-game.png"),
    baralho: require("../images/example/baralho-card-game.png")
}

export default class ExampleCardGame extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div align={"center"}>
                <Typography variant={"h4"}>Crie um Card Game</Typography>
                <Grid container>
                    <Grid id={"exampleCardGame"} item xs border={2} style={styles.gridStyle}>
                        <Typography variant={"h6"} color={"default"}>Card Game de Exemplo</Typography>
                        <div align={"center"}>
                            <img width={"300px"} src={images.exemplo} />
                        </div>
                        <Button variant={"contained"} color={"primary"} href="/exemplo">Acessar</Button>
                    </Grid>
                    <Grid id={"baralhoCardGame"} item xs style={styles.gridStyle}>
                        <Typography variant={"h6"} color={"default"}>Baralho</Typography>
                        <div align={"center"}>
                            <img width={"300px"} src={images.baralho} />
                        </div>
                        <Button variant={"contained"} color={"primary"} href="/baralho">Acessar</Button>
                    </Grid>
                </Grid>
            </div >
        )
    }
}
