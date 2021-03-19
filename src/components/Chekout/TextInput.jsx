import React from 'react';
import { Grid, TextField, CardContent } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';

const TextInput = ({ name, label, required }) => {
    const { control } = useFormContext();

    return (
        <Grid item>
            <Controller
                as={TextField}
                name={name}
                control={control}
                label={label}
                fullWidth
                required={required}
            />
            <CardContent>

            </CardContent>
        </Grid>
    );
};

export default TextInput;
