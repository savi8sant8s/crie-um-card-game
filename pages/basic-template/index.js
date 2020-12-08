import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

//Componentes criados
import Name from './content-steps/name';
import Description from './content-steps/description';
import Stars from './content-steps/stars';
import Power from './content-steps/power';
import Image from './content-steps/image';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

export default function CreateCardGame() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = ['Nome', 'Descrição', 'Estrelas', 'Poderes', 'Imagem'];
    let list;

    const getStepContent = (stepIndex) => {
        return {
            0: <Name />,
            1: <Description />,
            2: <Stars />, 
            3: <Power />,
            4: <Image />
    
        }[stepIndex];
    }

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={1} m={2}>
                <Grid item xs={3}>
                    <Typography variant="h6">O CARD AQUI</Typography>
                    {list}
                </Grid>
                <Grid item xs={9}>
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <div>
                        {activeStep === steps.length ? (
                            <div>
                                <Typography className={classes.instructions}>Fim. Gere seu Card Game agora</Typography>
                                <Button onClick={handleReset}>Criar outro Card Game</Button>
                            </div>
                        ) : (
                                <div name="description">
                                    {getStepContent(activeStep)}
                                    <div name="handleButtons">
                                        <Button
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                            className={classes.backButton}>Voltar</Button>
                                        <Button variant="contained" color="primary" onClick={handleNext}>
                                            {activeStep === steps.length - 1 ? 'Finalizar' : 'Prosseguir'}
                                        </Button>
                                    </div>
                                </div>
                            )}
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}