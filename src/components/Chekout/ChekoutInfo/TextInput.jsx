import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { Grid, TextField } from '@material-ui/core';

const TextInput = ({ name, label, defaultValue }) => {
    const { control } = useFormContext();

    return (
        <Grid item>
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
                defaultValue={defaultValue}
            />
        </Grid>
    );
};

export default TextInput;
