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
import { Stage, Layer, Rect, Label, Text, Image } from "react-konva";
import useImage from "use-image";

const styles = {
    black: {
        color: "black"
    },
    red: {
        color: "red"
    },
    margin: {
        margin: "0.5rem"
    }
};

const icons = {
    heart: {
        red:require("../images/baralho/heart-red.png"),
        black: require("../images/baralho/heart-black.png")
    },
    losango: {
        red: require("../images/baralho/losango-red.png"),
        black: require("../images/baralho/losango-black.png")
    },
    sword: {
        red:require("../images/baralho/sword-red.png"),
        black: require("../images/baralho/sword-black.png")
    },
    stick: {
        red: require("../images/baralho/stick-red.png"),
        black: require("../images/baralho/stick-black.png")
    }
}

const CardValueOptions = (props) => {
    let cardsGroup1 = ["A", "2", "3", "4", "5"];
    let cardsGroup2 = ["6", "7", "8", "9", "10"];

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
        </div>
    )
}

const CardIconOptions = (props) => {

    return (
        <div>
            <Typography variant={"h6"}>Clique no ícone que deseja</Typography>
            <RadioGroup value={props.value} onChange={props.handleChange}>
                <Grid item xs style={styles.black}>
                    <FormControlLabel value={"heartBlack"} control={<Radio />} label={"♥"} />
                    <FormControlLabel value={"losangoBlack"} control={<Radio />} label={"♦"} />
                    <FormControlLabel value={"swordBlack"} control={<Radio />} label={"♠"} />
                    <FormControlLabel value={"stickBlack"} control={<Radio />} label={"♣"} />
                </Grid>
                <Grid item xs style={styles.red}>
                    <FormControlLabel value={"heartRed"} control={<Radio />} label={"♥"} />
                    <FormControlLabel value={"losangoRed"} control={<Radio />} label={"♦"} />
                    <FormControlLabel value={"swordRed"} control={<Radio />} label={"♠"} />
                    <FormControlLabel value={"stickRed"} control={<Radio />} label={"♣"} />
                </Grid>
            </RadioGroup>
        </div>
    )
}

const CustomImage = (props) => {
    const [image] = useImage(props.image);
    return (
        <Image image={image} x={props.x} y={props.y} width={props.width} height={props.height} />
    );
}

export default class BaralhoCardGame extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: "A",
            icon: icons.heart.red,
            iconValue: "heartRed",
            color: "red",
            iconPositions: {
                A: [{ x: 155, y: 235 }],
                2: [{ x: 155, y: 90 },{ x: 155, y: 370 }],
                3: [{ x: 155, y: 90 },{ x: 155, y: 235 },{ x: 155, y: 370 }],
                4: [{ x: 80, y: 90 },{ x: 230, y: 90 },{ x: 80, y: 370 },{ x: 230, y: 370 }],
                5: [{ x: 80, y: 90 },{ x: 230, y: 90 },{ x: 80, y: 370 },{ x: 230, y: 370 },
                    { x: 155, y: 235 }],
                6: [{ x: 80, y: 90 },{ x: 230, y: 90 },{ x: 80, y: 370 },{ x: 230, y: 370 },
                    { x: 80, y: 235 },{ x: 230, y: 235 }],
                7: [{ x: 80, y: 90 },{ x: 230, y: 90 },{ x: 80, y: 370 },{ x: 230, y: 370 },
                      { x: 80, y: 235 },{ x: 230, y: 235 },{ x: 155, y: 235 }],
                8: [{ x: 80, y: 90 },{ x: 230, y: 90 },{ x: 80, y: 180 },{ x: 230, y: 180 },{ x: 80, y: 280 },
                    { x: 230, y: 280 },{ x: 80, y: 370 },{ x: 230, y: 370 }],
                9: [{ x: 80, y: 90 },{ x: 230, y: 90 },{ x: 80, y: 180 },{ x: 230, y: 180 },{ x: 80, y: 280 },
                    { x: 230, y: 280 },{ x: 80, y: 370 },{ x: 230, y: 370 },{ x: 155, y: 235 }],
                10: [{ x: 80, y: 90 },{ x: 230, y: 90 },{ x: 80, y: 160 },{ x: 230, y: 160 },{ x: 80, y: 230 },
                    { x: 230, y: 230 },{ x: 80, y: 300 },{ x: 230, y: 300 },{ x: 80, y: 370 },{ x: 230, y: 370 }]
            },
            currentIconPosition: [{ x: 155, y: 235 }] 
        };
        this.ref = React.createRef();
        this.handleExport = this.handleExport.bind(this);
        this.handleValue = this.handleValue.bind(this);
        this.handleIcon = this.handleIcon.bind(this);
    }

    downloadURI(uri, name) {
        var link = document.createElement("a");
        link.download = name;
        link.href = uri;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    handleExport() {
        const uri = this.ref.current.toDataURL();
        this.downloadURI(uri, "simple-card-game.png");
    };

    handleValue(event) {
        this.setState({ value: event.target.innerText.slice(0,2), 
        currentIconPosition: this.state.iconPositions[event.target.innerText.slice(0,2)]});
    }

    handleIcon(event) {
        let value = event.target.value;
        let icon = {
            "heartBlack": icons.heart.black,
            "losangoBlack": icons.losango.black,
            "swordBlack": icons.sword.black,
            "stickBlack": icons.stick.black,
            "heartRed": icons.heart.red,
            "losangoRed": icons.losango.red,
            "swordRed": icons.sword.red,
            "stickRed": icons.stick.red
        }[value];
        let color = (value.substring(value.length - 1) == "k"? "black": "red");
        this.setState({ color: color, icon: icon, iconValue: value});
    }

    render() {
        let iconsCardGame = [];
        for (let x in this.state.currentIconPosition) {
            iconsCardGame.push(
            <CustomImage image={this.state.icon} width={40} height={40} x={this.state.currentIconPosition[x].x} y={this.state.currentIconPosition[x].y} />
            )
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
                                    <Text fontSize={30} fill={this.state.color} text={this.state.value} />
                                </Label>
                                <Rect id={"rectCenter"}
                                    x={60}
                                    y={70}
                                    width={230}
                                    height={360}
                                    stroke={this.state.color}
                                    cornerRadius={[10, 10, 10, 10]}
                                    strokeWidth={5}
                                />
                                <Label id={"valueBottom"} x={310} y={470}>
                                    <Text rotation={180} fontSize={30} fill={this.state.color} text={this.state.value} />
                                </Label>
                                {iconsCardGame}
                            </Layer>
                        </Stage>
                        <Fab variant={"extended"} onClick={this.handleExport} color={"primary"}>
                            Baixar <GetAppIcon />
                        </Fab>
                    </Grid>
                    <Grid id={"cardOptions"} item xs>
                        <CardValueOptions handleChange={this.handleValue} />
                        <CardIconOptions value={this.state.iconValue} handleChange={this.handleIcon}/>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

                             