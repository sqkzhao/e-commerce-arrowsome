import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import  { Card, CardContent, CardHeader, Typography, Button, Grid } from '@material-ui/core';
import TextInput from './TextInput';
import useStyles from './styles';

const EmailForm = ({ section, email, inputError, setEmailSection, setSection }) => {
    const classes = useStyles();
    const methods = useForm();

    const handleOnClick = () => {
        setSection(1);
    };

    return (
        <>
            {(section === 1) ?
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit((data) => setEmailSection({...data}))}>
                    <Card className={classes.box} elevation={0}>
                        <CardHeader
                            title="1. Your Email"
                            className={classes.header}
                        /> 
                        <CardContent>
                            <TextInput 
                                name="email" 
                                label="Email" 
                                defaultValue={email} 
                                helperText={inputError.email}
                            />
                            <Typography variant="body2" color="textSecondary" component="p">
                                You'll receive receipts and notifications at this email address.
                            </Typography>
                            <Button 
                                className={classes.continueButton} 
                                type="submit" 
                                fullWidth 
                                variant="contained" 
                                color="primary"
                            >
                                Continue
                            </Button>
                        </CardContent>
                    </Card>
                </form>
            </FormProvider> :

            // COLLAPSE COMPLETED FORM
            <Card className={classes.box} elevation={0}>
                <Grid container justify="space-between">
                    <Grid item xs={9} sm={9} md={8} lg={8}>
                        <CardHeader
                            title="1. Your Email"
                            className={classes.header}
                        /> 
                    </Grid>
                    <Grid item xs={3} sm={3} md={2} lg={2} align="right">
                        {(section !== 4) &&
                        <Button 
                            className={classes.editButton} 
                            onClick={handleOnClick} 
                            size="small" 
                            variant="outlined"
                        >
                            Edit
                        </Button>}
                    </Grid>
                </Grid>                                           
                <CardContent>
                    <Typography variant="body1" component="p">
                        {email}
                    </Typography>
                </CardContent>
            </Card>
            }
        </>
    );
};

export default EmailForm;
