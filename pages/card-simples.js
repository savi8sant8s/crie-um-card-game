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
import { Stage, Layer, Rect, Label, Text, Image } from "react-konva";
import { toJpeg } from 'html-to-image';

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

class URLImage extends React.Component {
    state = {
      image: null
    };

    componentDidMount() {
      this.loadImage();
    }

    componentDidUpdate(oldProps) {
      if (oldProps.src !== this.props.src) {
        this.loadImage();
      }
    }

    componentWillUnmount() {
      this.image.removeEventListener('load', this.handleLoad);
    }

    loadImage() {
      this.image = new window.Image();
      this.image.src = this.props.src;
      this.image.crossOrigin = '*';
      this.image.addEventListener('load', this.handleLoad);
    }

    handleLoad = () => {
      this.setState({
        image: this.image
      });
    };

    render() {
      return (
        <Image
          x={this.props.x}
          y={this.props.y}
          width={this.props.width}
          height={this.props.height}
          image={this.state.image}
          ref={node => {
            this.imageNode = node;
          }}
        />
      );
    }
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
                                    fill="black"
                                />
                                <Rect id="background2"
                                    x={20}
                                    y={20}
                                    width={230}
                                    height={480}
                                    fill="blue"
                                />
                                <Rect id="name"
                                    x={20}
                                    y={20}
                                    width={230}
                                    height={40}
                                    fill="lightBlue"
                                />
                                <Label x={22} y={22}>
                                    <Text text={this.state.name} />
                                </Label>
                                <Rect id="image"
                                    x={20}
                                    y={60}
                                    width={230}
                                    height={200}
                                    fill="yellow"
                                />
                                <Rect id="stars"
                                    x={20}
                                    y={250}
                                    width={230}
                                    height={40}
                                    fill="white"
                                />
                                <Label x={22} y={252}>
                                    <Text text={this.state.stars} />
                                </Label>
                                <Rect id="description"
                                    x={20}
                                    y={290}
                                    width={230}
                                    height={150}
                                    fill="red"
                                />
                                <Label x={22} y={292}>
                                    <Text text={this.state.description} />
                                </Label>
                                <Rect id="attack"
                                    x={20}
                                    y={440}
                                    width={115}
                                    height={60}
                                    fill="green"></Rect>
                                <Label x={22} y={442}>
                                    <Text text={`Ataque: ${this.state.attack}`} />
                                </Label>
                                <Rect id="defense"
                                    x={135}
                                    y={440}
                                    width={115}
                                    height={60}
                                    fill="pink"
                                />
                                <Label x={137} y={442}>
                                    <Text text={`Defesa: ${this.state.defense}`} />
                                </Label>
                                <URLImage src={this.state.image} x={20} y={60} width={230} height={190} />
                            </Layer>
                        </Stage>
                    </Grid>
                    <Grid id="editForm" item xs={6}>
                        <FormControl noValidate autoComplete="off">
                            <Grid container justify="center" alignItems="center">
                                <Grid item xs={6}>
                                    <Field title={'Digite o nome'} type={'text'} value={this.state.id} label={'Nome'} handleChange={this.handleName} />
                                    <Field title={'Digite uma descrição'} type={'text'} value={this.state.description} label={'Descrição'} handleChange={this.handleDescription} />
                                    <Field title={'Poder de ataque'} type={'number'} value={this.state.attack} label={'Ataque'} handleChange={this.handleAttack} />
                                    <Field title={'Poder de defesa'} type={'number'} value={this.state.defense} label={'Defesa'} handleChange={this.handleDefense} />
                                    <Field title={'Imagem do Card'} type={'url'} value={this.state.image} label={'URL da imagem'} handleChange={this.handleImage} />
                                </Grid>
                                <Grid item xs={6}>
                                    <Stars value={this.state.stars} handleChange={this.handleStars} />
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
