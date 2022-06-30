import React from 'react';
import Button from '@mui/material/Button';

export default function BtnLogin(){

    return(
        <Button
            variant="contained"
            type="submit" 
            testId = "btn-login"
            sx={{
                marginRight: '65%',
                color: '#fff',
                backgroundColor: '#6bbd30',
                '&:hover': {backgroundColor: '#368c00'}
            }}
            >
            Enviar 
        </Button>
    )
}