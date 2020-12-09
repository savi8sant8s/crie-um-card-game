import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
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
            <TextField type={props.type} value={props.value} multiline={props.multiline} label={props.label} onChange={props.handleChange} variant="outlined" />
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
        this.handleAttack = this.handleAttack.bind(this);
        this.handleDefense = this.handleDefense.bind(this);
        this.handleStars = this.handleStars.bind(this);
        this.handleImage = this.handleImage.bind(this);
    }

    downloadCardGame() {
        toJpeg(document.getElementById('cardGame'), { quality: 1})
            .then(function (dataUrl) {
                var link = document.createElement('a');
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
        this.setState({ name: event.target.value });
    }

    handleDescription(event) {
        this.setState({ description: event.target.value });
    }

    handleAttack(event) {
        this.setState({ attack: event.target.value });
    }

    handleDefense(event) {
        this.setState({ defense: event.target.value });
    }

    handleStars(event) {
        let stars = '';
        for (let x = 0; x < event.target.value; x++){
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
                <Grid container alignContent={"center"} alignItems={"center"}>
                    <Grid id="cardGame" item xs={6}>
                        <Stage width="260" height="510">
                            <Layer>
                                <Rect id="background1"
                                    x={10}
                                    y={10}
                                    width={250}
                                    height={500}
                                    fill={"#6699ff"}
                                    cornerRadius={[0, 15, 0, 15]}
                                />
                                <Rect id="name"
                                    x={20}
                                    y={20}
                                    width={230}
                                    height={40}
                                    fill={"#ccddff"}
                                />
                                <Label x={25} y={25}>
                                    <Text fontSize={20} fill={"#3366ff"} text={this.state.name} />
                                </Label>
                                <Rect id="image"
                                    x={20}
                                    y={60}
                                    width={230}
                                    height={200}
                                    fill={"#ffffff"}
                                />
                                <Rect id="stars"
                                    x={20}
                                    y={250}
                                    width={230}
                                    height={40}
                                    fill={"#ccddff"}
                                />
                                <Label x={25} y={255}>
                                    <Text fontSize={20} text={this.state.stars} />
                                </Label>
                                <Rect id="description"
                                    x={20}
                                    y={290}
                                    width={230}
                                    height={150}
                                    fill={"#007acc"}
                                />
                                <Label x={25} y={295}>
                                <Text fontSize={20} fill={"#ffffff"} text={this.state.description} />
                                </Label>
                                <Rect id="attack"
                                    x={20}
                                    y={440}
                                    width={115}
                                    height={60}
                                    fill={"#ff4d94"}/>
                                <Label x={25} y={445}>
                                    <Text fontSize={20} fill={"#ffffff"} text={"Ataque:"} />
                                    <Text fontSize={20} fill={"#ffc34d"} text={`\n ${this.state.attack}`} />
                                </Label>
                                <Rect id="defense"
                                    x={135}
                                    y={440}
                                    width={115}
                                    height={60}
                                    fill={"#ffc34d"}
                                />
                                <Label x={139} y={445}>
                                <Text fontSize={20} fill={"#ffffff"} text={"Defesa:"} />
                                    <Text fontSize={20} fill={"#ff4d94"} text={`\n ${this.state.defense}`} />
                                </Label>
                                <CustomImage image={this.state.image} x={20} y={60} width={230} height={190} />
                            </Layer>
                        </Stage>
                    </Grid>
                    <Grid id="form" item xs={6}>
                        <FormControl noValidate autoComplete="off">
                            <Grid container justify="center" alignItems="center">
                                <Grid item xs={6}>
                                    <Field title={'Digite o nome'} type={'text'} value={this.state.id} label={'Nome'} handleChange={this.handleName} />
                                    <Field title={'Digite uma descrição'} multiline type={'text'} value={this.state.description} label={'Descrição'} handleChange={this.handleDescription} />
                                    <Field title={'Poder de ataque'} type={'number'} value={this.state.attack} label={'Ataque'} handleChange={this.handleAttack} />
                                    <Field title={'Poder de defesa'} type={'number'} value={this.state.defense} label={'Defesa'} handleChange={this.handleDefense} />
                                    <Field title={'Quantidade de estrelas'} type={'number'} value={this.state.countStars} label={'Estrelas'} handleChange={this.handleStars} />
                                    <Field title={'Imagem do Card'} type={'file'} handleChange={this.handleImage} />
                                </Grid>
                                <Grid item xs={6}>
                                    <ButtonGroup variant="contained" color="primary">
                                        <Button onClick={this.handleClearForm}>Limpar</Button>
                                        <Button onClick={this.downloadCardGame}>Baixar</Button>
                                    </ButtonGroup>
                                </Grid>
                            </Grid>
                        </FormControl>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
