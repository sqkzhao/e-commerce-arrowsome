import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { Grid, TextField, ThemeProvider } from '@material-ui/core';
import { colortheme } from '../../../lib/colortheme';

const TextInput = ({ name, label, defaultValue, helperText }) => {
    const { control } = useFormContext();

    return (
        <Grid item>
            <ThemeProvider theme={colortheme}>
                <Controller
                    as={TextField}
                    name={name}
                    control={control}
                    label={label}
                    margin="normal"
                    size="small" 
                    variant="outlined"
                    fullWidth
                    required
                    defaultValue={defaultValue ? defaultValue: ''}
                    helperText={helperText}
                    error={helperText ? true : false }
                />
            </ThemeProvider>
        </Grid>
    );
};

export default TextInput;
