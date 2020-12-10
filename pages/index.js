import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import GetAppIcon from '@material-ui/icons/GetApp';
import ClearIcon from '@material-ui/icons/Clear';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import { Stage, Layer, Rect, Label, Text, Image } from "react-konva";
import { toJpeg } from 'html-to-image';
import useImage from 'use-image';

const style = {
    padding: "1rem",
};

const Field = (props) => {
    return (
        <div className="field">
            <Typography variant="subtitle2" color="initial">{props.title}</Typography>
            <TextField
                name={props.name}
                rows={props.rows}
                type={props.type}
                value={props.value}
                multiline={props.multiline}
                label={props.label}
                onChange={props.handleChange}
                variant="outlined"/>
        </div>
    )
}

const CustomImage = (props) => {
    const [image] = useImage(props.image);
    return (
        <Image image={image} x={props.x} y={props.y} width={props.width} height={props.height} />
    );
}

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: '',
            attack: '',
            defense: '',
            stars: '',
            image: ''
        };
        this.handleClearForm = this.handleClearForm.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handlePower = this.handlePower.bind(this);
        this.handleStars = this.handleStars.bind(this);
        this.handleImage = this.handleImage.bind(this);
    }

    downloadCardGame() {
        toJpeg(document.getElementById('cardGame'), { quality: 1 })
            .then(function (dataUrl) {
                let
                 link = document.createElement('a');
                link.download = 'simple-card-game.jpeg';
                link.href = dataUrl;
                link.click();
            });
    }

    handleClearForm() {
        this.setState({
            name: '',
            description: '',
            attack: '',
            defense: '',
            stars: '',
            countStars: '',
            image: ''
        });
    }

    handleName(event) {
        this.setState({ name: event.target.value.slice(0,25) });
    }

    handleDescription(event) {
        this.setState({ description: event.target.value.slice(0, 135) });
    }

    handlePower(event) {
        this.setState({ [event.target.name]: event.target.value.slice(0,5) });
    }

    handleStars(event) {
        let stars = '';
        for (let x = 0; x < event.target.value; x++) {
            stars += '⭐';
        }
        this.setState({ countStars: event.target.value, stars: stars });
    }

    handleImage(event) {
        event.preventDefault();

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
            <div style={style}>
                <Typography variant="h4" align={"center"}>Card Simples</Typography>
                <Grid container alignContent={"center"} alignItems={"center"} justify={"center"} spacing={1}>
                    <Grid id="cardGame" item xs>
                        <Stage width="350" height="500">
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
                                    <Text fontSize={20} fill={"#ffffff"} text={this.state.description} />
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
                        <Grid item xs>
                            <Fab variant="extended" onClick={this.handleClearForm} color="light" aria-label="add">
                                Limpar <ClearIcon />
                            </Fab>
                            <Fab variant="extended" onClick={this.downloadCardGame} color="primary" aria-label="add">
                                Baixar <GetAppIcon />
                            </Fab>
                        </Grid>
                    </Grid>
                    <Grid id="form" item xs>
                        <FormControl noValidate autoComplete="off">
                            <Grid container justify="center" alignItems="center">
                                <Grid item xs={6}>
                                    <Field
                                        name={'name'}
                                        title={'Digite o nome'}
                                        type={'text'}
                                        value={this.state.id}
                                        label={'Nome'}
                                        maxLength={27}
                                        handleChange={this.handleName} />
                                    <Field
                                        name={'description'}
                                        title={'Digite uma descrição'}
                                        multiline
                                        rows={5}
                                        type={'text'}
                                        value={this.state.description}
                                        label={'Descrição'}
                                        maxLength={135}
                                        handleChange={this.handleDescription} />
                                    <Field
                                        name={'attack'}
                                        title={'Poder de ataque'}
                                        type={'number'}
                                        value={this.state.attack}
                                        label={'Ataque'}
                                        handleChange={this.handlePower} />
                                    <Field
                                        name={'defense'}
                                        title={'Poder de defesa'}
                                        type={'number'}
                                        value={this.state.defense}
                                        label={'Defesa'}
                                        handleChange={this.handlePower} />
                                    <Field
                                        name={'stars'}
                                        title={'Quantidade de estrelas'}
                                        type={'number'}
                                        value={this.state.countStars}
                                        label={'Estrelas'}
                                        handleChange={this.handleStars} />
                                    <Field
                                        name={'image'}
                                        title={'Imagem do Card'}
                                        type={'file'}
                                        handleChange={this.handleImage} />
                                </Grid>
                            </Grid>
                        </FormControl>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
