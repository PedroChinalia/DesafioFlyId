import * as React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useUserContext } from '../context/userContext';
import BtnLogin from './BtnLogin';

export default function Form(){

    const emailRef = useRef();
    const passwordRef = useRef();

    const { signInUser } = useUserContext();

    const onSubmit = (e) =>{
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        if(email && password){
            signInUser(email, password);
        }
    };

    return(
        <>
            <form onSubmit={onSubmit}>
                <Box sx={{width: '100%', height: 270, display: 'grid', justifyContent: 'center', paddingTop: '25px', backgroundColor:'#fafafa'}}>

                    <Typography variant="h4">Entrar</Typography>

                    <Box sx={{width: '100%', height: 100, display: 'grid', alignItems: 'center'}}>
                        
                        <TextField id="login-email" label="Email" type="email" variant="standard" required sx={{ marginBottom: '15px'}} inputRef={emailRef}/>

                        <TextField id="login-password" label="Senha" type="password" variant="standard" required inputRef={passwordRef}/>

                    </Box>

                    <Box sx={{width: '800px', height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        
                        <BtnLogin />
                    
                        <Button 
                            variant="outlined" 
                            sx={{
                                color: '#5B2E91', borderColor: '#5B2E91',
                                '&:hover': {
                                    backgroundColor: 'rgba(91, 46, 145, 0.05)',
                                    borderColor: '#5B2E91'
                                }
                            }}>
                            <Link to="/forgotpassword">
                                Esqueci minha senha
                            </Link>
                        </Button>

                    </Box>
                </Box>
            </form>
        </>
    )
}