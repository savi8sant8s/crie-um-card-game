import React from "react";
import Grid from "@material-ui/core/Grid";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import GetAppIcon from "@material-ui/icons/GetApp";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Typography from "@material-ui/core/Typography";
import { Stage, Layer, Rect, Label, Text } from "react-konva";

const styles = {
    white: {
        color: "white"
    },
    red: {
        color: "red"
    },
    margin: {
        margin: "1rem"
    }
};

const ValueOptions = (props) => {
    let cardsGroup1 = ["A", "2", "3", "4", "5"];
    let cardsGroup2 = ["6", "7", "8", "9", "10"];
    let cardsGroup3 = ["J", "K", "Q", "JK"];

    return (
        <div>
            <Typography variant={"h6"}>Clique no valor que deseja</Typography>
            <ButtonGroup orientation={"vertical"} variant={"contained"}>
                {cardsGroup1.map(function (item, i) {
                    return <Button onClick={props.handleChange} style={styles.margin}>{item}</Button>
                })}
            </ButtonGroup>
            <ButtonGroup onClick={props.handleChange} orientation={"vertical"} variant={"contained"}>
                {cardsGroup2.map(function (item, i) {
                    return <Button onClick={props.handleChange} style={styles.margin}>{item}</Button>
                })}
            </ButtonGroup>
            <ButtonGroup onClick={props.handleChange} orientation={"vertical"} variant={"contained"}>
                {cardsGroup3.map(function (item, i) {
                    return <Button onClick={props.handleChange} style={styles.margin}>{item}</Button>
                })}
            </ButtonGroup>
        </div>
    )
}

const IconOptions = (props) => {

    return (
        <div>
            <Typography variant={"h6"}>Clique no ícone que deseja</Typography>
            <RadioGroup value={props.value} onChange={props.handleChange}>
                <Grid item xs style={styles.white}>
                    <FormControlLabel value={"♥"} control={<Radio />} label={"♥"} />
                    <FormControlLabel value={"♦"} control={<Radio />} label={"♦"} />
                    <FormControlLabel value={"♠"} control={<Radio />} label={"♠"} />
                    <FormControlLabel value={"♣"} control={<Radio />} label={"♣"} />
                </Grid>
            </RadioGroup>
        </div>
    )
}

const ColorOptions = (props) => {

    return (
        <div>
            <Typography variant={"h6"}>Clique na cor que deseja</Typography>
            <RadioGroup value={props.value} onChange={props.handleChange}>
                <Grid item xs>
                    <FormControlLabel style={{color: "black"}} value={"black"} control={<Radio />} label={"Preto"} />
                    <FormControlLabel style={{color: "red"}} value={"red"} control={<Radio />} label={"Vermelho"} />
                </Grid>
            </RadioGroup>
        </div>
    )
}

export default class BaralhoCardGame extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            card: {
                color: "red",
                icon: "♥",
                mainIcon: "A",
                iconPositions: [{x: 288, y:12}, {x:60, y:488, rotation: 180},{x: 155, y:205, icon: 'α'}],
                value: "A"
            },
            iconPositions: {
                A: [{x: 288, y:12}, {x:60, y:488, rotation: 180},{x: 155, y:205, icon: 'α'}],
                J: [{x: 288, y:12}, {x:60, y:488, rotation: 180},{x: 135, y:205, icon: '👸'}],
                K: [{x: 288, y:12}, {x:60, y:488, rotation: 180},{x: 135, y:205, icon: '🤴'}],
                Q: [{x: 288, y:12}, {x:60, y:488, rotation: 180},{x: 135, y:205, icon: '👸'}],
                JK: [{x: 288, y:12}, {x:60, y:488, rotation: 180},{x: 135, y:205, icon: '🃏'}],
                2: [{ x: 155, y: 90 }, { x: 155, y: 370 }],
                3: [{ x: 155, y: 90 }, { x: 155, y: 235 }, { x: 155, y: 370 }],
                4: [{ x: 80, y: 90 }, { x: 230, y: 90 }, { x: 80, y: 370 }, { x: 230, y: 370 }],
                5: [{ x: 80, y: 90 }, { x: 230, y: 90 }, { x: 80, y: 370 }, { x: 230, y: 370 },
                { x: 155, y: 235 }],
                6: [{ x: 80, y: 90 }, { x: 230, y: 90 }, { x: 80, y: 370 }, { x: 230, y: 370 },
                { x: 80, y: 235 }, { x: 230, y: 235 }],
                7: [{ x: 80, y: 90 }, { x: 230, y: 90 }, { x: 80, y: 370 }, { x: 230, y: 370 },
                { x: 80, y: 235 }, { x: 230, y: 235 }, { x: 155, y: 235 }],
                8: [{ x: 80, y: 90 }, { x: 230, y: 90 }, { x: 80, y: 180 }, { x: 230, y: 180 }, { x: 80, y: 280 },
                { x: 230, y: 280 }, { x: 80, y: 370 }, { x: 230, y: 370 }],
                9: [{ x: 80, y: 90 }, { x: 230, y: 90 }, { x: 80, y: 180 }, { x: 230, y: 180 }, { x: 80, y: 280 },
                { x: 230, y: 280 }, { x: 80, y: 370 }, { x: 230, y: 370 }, { x: 155, y: 235 }],
                10: [{ x: 80, y: 90 }, { x: 230, y: 90 }, { x: 80, y: 160 }, { x: 230, y: 160 }, { x: 80, y: 230 },
                { x: 230, y: 230 }, { x: 80, y: 300 }, { x: 230, y: 300 }, { x: 80, y: 370 }, { x: 230, y: 370 }]
            }
        };
        this.ref = React.createRef();
        this.handleExport = this.handleExport.bind(this);
        this.handleValue = this.handleValue.bind(this);
        this.handleIcon = this.handleIcon.bind(this);
        this.handleColor = this.handleColor.bind(this);
    }

    downloadURI(uri, name) {
        let link = document.createElement("a");
        link.download = name;
        link.href = uri;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    handleExport() {
        const uri = this.ref.current.toDataURL();
        this.downloadURI(uri, "baralho-card-game.png");
    };

    handleValue(event) {
        let value = event.target.innerText.slice(0, 2);
        let cardsGroup = ["A", "2", "3", "4", "5","6", "7", "8", "9", "10", "J", "K", "Q", "JK"];
        if (cardsGroup.includes(value)) {
            let card = this.state.card;
            card.value = value;
            card.iconPositions = this.state.iconPositions[value];
            this.setState({ card: card });
        }
    }

    handleColor(event) {
        let value = event.target.value;
        let card = this.state.card;
        card.color = value;
        this.setState({card: card});
    }

    handleIcon(event) {
        let value = event.target.value;
        let card = this.state.card;
        card.icon = value;
        this.setState({card: card});
    }

    render() {
        let iconsCardGame = [];
        for (let x in this.state.card.iconPositions) {
            let icon = this.state.card.iconPositions[x];
            iconsCardGame.push(<Label id={"icons"} x={icon.x} y={icon.y}>
                <Text rotation={icon.rotation} fontSize={60} fill={this.state.card.color} text={icon.icon ? icon.icon: this.state.card.icon} />
            </Label>);
        }
        return (
            <div align={"center"}>
                <Typography variant="h4">Card Game do jogo de Baralho</Typography>
                <Grid container spacing={2} alignItems={"center"} alignContent={"center"} justify={"center"}>
                    <Grid id={"cardGame"} item xs>
                        <Stage width="350" height="500" ref={this.ref}>
                            <Layer>
                                <Rect id={"background"}
                                    x={10}
                                    y={10}
                                    width={330}
                                    height={480}
                                    fill={"white"}
                                    cornerRadius={[10, 10, 10, 10]}
                                />
                                <Label id={"valueTop"} x={30} y={30}>
                                    <Text fontSize={30} fill={this.state.card.color} text={this.state.card.value} />
                                </Label>
                                <Rect id={"rectCenter"}
                                    x={60}
                                    y={70}
                                    width={230}
                                    height={360}
                                    stroke={this.state.card.color}
                                    cornerRadius={[10, 10, 10, 10]}
                                    strokeWidth={5}
                                />
                                <Label id={"valueBottom"} x={310} y={470}>
                                    <Text rotation={180} fontSize={30} fill={this.state.card.color} text={this.state.card.value} />
                                </Label>
                                {iconsCardGame}
                            </Layer>
                        </Stage>
                        <Fab variant={"extended"} onClick={this.handleExport} color={"primary"}>
                            Baixar <GetAppIcon />
                        </Fab>
                    </Grid>
                    <Grid id={"cardOptions"} item xs>
                        <ValueOptions handleChange={this.handleValue} />
                        <IconOptions value={this.state.card.icon} handleChange={this.handleIcon}/>
                        <ColorOptions value={this.state.card.color} handleChange={this.handleColor} />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

                             