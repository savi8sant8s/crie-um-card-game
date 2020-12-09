import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Stage, Layer, Rect, Label, Text } from "react-konva";

const style = {
    padding: "1rem",
};

const Field = (props) => {
    return (
        <div className="field">
            <Typography variant="subtitle2" color="initial">{props.title}</Typography>
            <TextField type={props.type} value={props.value} label={props.label} onChange={props.handleChange} variant="outlined" />
        </div>
    )
}

const Stars = (props) => {
    return (
        <div className="stars">
            <Typography variant="subtitle2" color="initial">Adicione estrelas</Typography>
            <RadioGroup value={props.value} onChange={props.handleChange}>
                <FormControlLabel value={'⭐'} control={<Radio />} label='⭐' />
                <FormControlLabel value={'⭐⭐'} control={<Radio />} label='⭐⭐' />
                <FormControlLabel value={'⭐⭐⭐'} control={<Radio />} label='⭐⭐⭐' />
                <FormControlLabel value={'⭐⭐⭐⭐'} control={<Radio />} label='⭐⭐⭐⭐' />
                <FormControlLabel value={'⭐⭐⭐⭐⭐'} control={<Radio />} label='⭐⭐⭐⭐⭐' />
            </RadioGroup>
        </div>
    )
}

export default class SimpleCardGame extends React.Component {

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
        this.handleConfirm = this.handleConfirm.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleAttack = this.handleAttack.bind(this);
        this.handleDefense = this.handleDefense.bind(this);
        this.handleStars = this.handleStars.bind(this);
        this.handleImage = this.handleImage.bind(this);
    }

    handleConfirm() {
        alert("Sucesso");
    }

    handleClearForm() {
        this.setState({
            name: '',
            description: '',
            attack: '',
            defense: '',
            stars: '',
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
        this.setState({ stars: event.target.value });
    }

    handleImage(event) {
        this.setState({ image: event.target.value });
    }

    render() {
        return (
            <div style={style}>
                <Grid container spacing={1}>
                    <Grid name="cardGame" item xs={3}>
                        <Stage width="500" height="800">
                            <Layer>
                                <Rect name="background1"
                                    x={10}
                                    y={10}
                                    width={250}
                                    height={500}
                                    fill="black"
                                />
                                <Rect name="background2"
                                    x={20}
                                    y={20}
                                    width={230}
                                    height={480}
                                    fill="blue"
                                />
                                <Rect name="name"
                                    x={20}
                                    y={20}
                                    width={230}
                                    height={40}
                                    fill="lightBlue"
                                />
                                <Label x={22} y={22}>
                                    <Text text={this.state.name} />
                                </Label>
                                <Rect name="image"
                                    x={20}
                                    y={60}
                                    width={230}
                                    height={200}
                                    fill="yellow"
                                />
                                <Label x={22} y={62}>
                                    <Text text="Imagem do Card Game" />
                                </Label>
                                <Rect name="stars"
                                    x={20}
                                    y={250}
                                    width={230}
                                    height={40}
                                    fill="white"
                                />
                                <Label x={22} y={252}>
                                    <Text text={this.state.stars} />
                                </Label>
                                <Rect name="description"
                                    x={20}
                                    y={290}
                                    width={230}
                                    height={150}
                                    fill="red"
                                />
                                <Label x={22} y={292}>
                                    <Text text={this.state.description} />
                                </Label>
                                <Rect name="attack"
                                    x={20}
                                    y={440}
                                    width={115}
                                    height={60}
                                    fill="green"></Rect>
                                <Label x={22} y={442}>
                                    <Text text={`Ataque: ${this.state.attack}`} />
                                </Label>
                                <Rect name="defense"
                                    x={135}
                                    y={440}
                                    width={115}
                                    height={60}
                                    fill="pink"
                                />
                                <Label x={137} y={442}>
                                    <Text text={`Defesa: ${this.state.defense}`} />
                                </Label>
                            </Layer>
                        </Stage>
                    </Grid>
                    <Grid name="editForm" item xs={9}>
                        <FormControl noValidate autoComplete="off">
                            <Grid container justify="center" alignItems="center">
                                <Grid item xs={6}>
                                    <Field title={'Digite o nome'} type={'text'} value={this.state.name} label={'Nome'} handleChange={this.handleName} />
                                    <Field title={'Digite uma descrição'} type={'text'} value={this.state.description} label={'Descrição'} handleChange={this.handleDescription} />
                                    <Field title={'Poder de ataque'} type={'number'} value={this.state.attack} label={'Ataque'} handleChange={this.handleAttack} />
                                    <Field title={'Poder de defesa'} type={'number'} value={this.state.defense} label={'Defesa'} handleChange={this.handleDefense} />
                                    <Field title={'Imagem do Card Game'} type={'file'} value={this.state.image} handleChange={this.handleImage} />
                                </Grid>
                                <Grid item xs={6}>
                                    <Stars value={this.state.stars} handleChange={this.handleStars} />
                                    <ButtonGroup variant="contained" color="primary">
                                        <Button onClick={this.handleClearForm}>Limpar</Button>
                                        <Button onClick={this.handleConfirm}>Confirmar</Button>
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
