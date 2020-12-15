import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import GetAppIcon from "@material-ui/icons/GetApp";
import ClearIcon from "@material-ui/icons/Clear";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import { Stage, Layer, Rect, Label, Text, Image } from "react-konva";
import useImage from "use-image";

const Field = (props) => {
    return (
        <div>
            <Typography variant={"subtitle2"} color={"initial"}></Typography>
            <TextField
                color={"secondary"}
                InputLabelProps={{ shrink: true }}
                margin={"normal"}
                name={props.name}
                style={{display: props.display, color:"white"}}
                rows={props.rows}
                type={props.type}
                value={props.value}
                multiline={props.multiline}
                label={props.label}
                onChange={props.handleChange}
                variant={"filled"}/>
        </div>
    )
}

const CustomImage = (props) => {
    const [image] = useImage(props.image);
    return (
        <Image image={image} x={props.x} y={props.y} width={props.width} height={props.height} />
    );
}

export default class ExampleCardGame extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            description: "",
            attack: "",
            defense: "",
            stars: "",
            image: "",
        };
        this.ref = React.createRef();

        this.handleExport = this.handleExport.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handlePower = this.handlePower.bind(this);
        this.handleStars = this.handleStars.bind(this);
        this.handleImage = this.handleImage.bind(this);
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
        this.downloadURI(uri, "exemplo-card-game.png");
    };

    handleClearForm() {
        this.setState({
            name: "",
            description: "",
            attack: "",
            defense: "",
            stars: "",
            countStars: "",
            image: ""
        });
    }

    handleName(event) {
        this.setState({ name: event.target.value.slice(0,25) });
    }

    handleDescription(event) {
        let value = event.target.value;
        this.setState({ description: value.slice(0, 220) });
    }

    handlePower(event) {
        let power = event.target.value;
        if (power > 10000){
            power = 10000;
        }
        this.setState({ [event.target.name]: power });
    }

    handleStars(event) {
        let stars = "";
        let countStars = event.target.value;
        if (countStars > 12){
            countStars = 12;
        }
        for (let x = 0; x < countStars; x++) {
            stars += "⭐";
        }
        this.setState({ countStars: countStars, stars: stars });
    }

    handleImage(event) {
        event.preventDefault();
        console.log("entrou")

        if (event.target.files[0]) {
            let reader = new FileReader();
            let file = event.target.files[0];

            reader.onloadend = () => {
                this.setState({ image: reader.result });
            }
            reader.readAsDataURL(file);
        }
    }

    render() {
        return (
            <div align={"center"}>
                <Typography variant={"h4"}>Card Game de Exemplo</Typography>
                <Grid container spacing={2} alignItems={"center"} alignContent={"center"} justify={"center"}>
                    <Grid id={"cardGame"} item xs> 
                        <Stage width="350" height="500" ref={this.ref}>
                            <Layer>
                                <Rect id="background1"
                                    x={10}
                                    y={10}
                                    width={330}
                                    height={480}
                                    fill={"#6699ff"}
                                    cornerRadius={[0, 15, 0, 15]}
                                />
                                <Rect id="name"
                                    x={20}
                                    y={20}
                                    width={310}
                                    height={40}
                                    fill={"#ccddff"}
                                />
                                <Label x={25} y={25}>
                                    <Text fontSize={20} fill={"#3366ff"} text={this.state.name} />
                                </Label>
                                <Rect id="image"
                                    x={20}
                                    y={60}
                                    width={310}
                                    height={200}
                                    fill={"#ffffff"}
                                />
                                <CustomImage image={this.state.image} x={20} y={60} width={310} height={200} />
                                <Rect id="stars"
                                    x={20}
                                    y={260}
                                    width={310}
                                    height={40}
                                    fill={"#ccddff"}
                                />
                                <Label x={25} y={265}>
                                    <Text fontSize={20} text={this.state.stars} />
                                </Label>
                                <Rect id="description"
                                    x={20}
                                    y={300}
                                    width={310}
                                    height={120}
                                    fill={"#007acc"}
                                />
                                <Label x={25} y={305}>
                                    <Text fontSize={15} fill={"#ffffff"} text={this.state.description} />
                                </Label>
                                <Rect id="attack"
                                    x={20}
                                    y={420}
                                    width={155}
                                    height={60}
                                    fill={"#ff4d94"} />
                                <Label x={25} y={425}>
                                    <Text fontSize={20} fill={"#ffffff"} text={"Ataque:"} />
                                    <Text fontSize={20} fill={"#ffc34d"} text={`\n ${this.state.attack}`} />
                                </Label>
                                <Rect id="defense"
                                    x={175}
                                    y={420}
                                    width={155}
                                    height={60}
                                    fill={"#ffc34d"}
                                />
                                <Label x={180} y={425}>
                                    <Text fontSize={20} fill={"#ffffff"} text={"Defesa:"} />
                                    <Text fontSize={20} fill={"#ff4d94"} text={`\n ${this.state.defense}`} />
                                </Label>
                            </Layer>
                        </Stage>
                        <Fab style={{ margin: "0.2rem" }} variant="extended" onClick={this.handleClearForm} color={"light"}>
                            Limpar <ClearIcon />
                        </Fab>
                        <Fab style={{ margin: "0.2rem" }} variant="extended" onClick={this.handleExport} color={"primary"}>
                            Baixar <GetAppIcon />
                        </Fab>
                    </Grid>
                    <Grid id={"form"} item xs>
                            <Grid container justify="center" alignItems="center">
                            <Grid item xs>
                                <Field
                                    name={"name"}
                                    type={"text"}
                                    value={this.state.name}
                                    label={"Adicione um nome legal"}
                                    maxLength={27}
                                    handleChange={this.handleName} />
                                <Field
                                    name={"description"}
                                    multiline
                                    rows={3}
                                    label={"Capriche na descrição"}
                                    type={"text"}
                                    value={this.state.description}
                                    maxLength={135}
                                    handleChange={this.handleDescription} />
                                <Field
                                    name={"attack"}
                                    type={"number"}
                                    value={this.state.attack}
                                    label={"Adicione poder de ataque"}
                                    handleChange={this.handlePower} />
                                <Field
                                    name={"defense"}
                                    type={"number"}
                                    value={this.state.defense}
                                    label={"Adicione poder de defesa"}
                                    handleChange={this.handlePower} />
                                <Field
                                    name={"stars"}
                                    type={"number"}
                                    value={this.state.countStars}
                                    label={"Adicione estrelas"}
                                    handleChange={this.handleStars} />
                                <Fab style={{ margin: "0.2rem" }} variant="contained" component="label" color={"secondary"}>
                                    Adicionar imagem<AddIcon />
                                    <input onChange={this.handleImage} type="file" style={{ display: "none" }} />
                                </Fab>
                                </Grid>
                            </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
