import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function ForgotPassword(){
    return(
        <>
        <Box
            sx={{
                width: '100vw',
                height: '100vh',
                display: 'flex'
            }}
        >
            <Box
                sx={{
                    width: '15vw',
                    height: '100vh',
                }}
            >
                <SideBar />
            </Box>

            <Box
                sx={{
                    width: '100vw',
                    height: '100vh',
                    backgroundColor:'#fafafa'
                }}
            >
                <NavBar/>

                <Box
                    sx={{
                        width: '80vw',
                        height: '8vh',
                        display: 'grid',
                        backgroundColor:'#fafafa'
                    }}
                >
                    <Typography variant="h4" sx={{marginTop: '1.5%', marginLeft:'7%', marginBottom:'1%'}}>
                        Esqueci minha senha
                    </Typography>

                    <Typography sx={{marginLeft:'7%', marginBottom:'1.5%'}}>
                        Forneça seu email atual para receber as instruções de mudança de senha
                    </Typography>

                    <TextField 
                        id="forgotps-email" 
                        label="Email" 
                        variant="standard" 
                        required
                        sx={{
                            marginLeft:'7%',
                            marginBottom: '1%',
                            width: '40%'
                        }}
                    />

                    <Button 
                        variant="contained" 
                        sx={{
                            backgroundColor: '#6bbd30', 
                            '&:hover': {backgroundColor: '#368c00'},
                            marginLeft: '7%',
                            width: '6%'
                        }}
                    >
                        Enviar
                    </Button>

                </Box>

            </Box> 
        </Box>
            
        </>
    )
}