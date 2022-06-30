import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LanguageIcon from '@mui/icons-material/Language';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Link} from 'react-router-dom'
import { useUserContext } from '../context/userContext';

export default function Home(){

    //Botão Idioma
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    //Logout
    const {logoutUser} = useUserContext();

    return(
        <>
        <Box
            sx={{
                width: '100vw',
                height: '100vh',
                backgroundColor: '#fafafa'
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    height: 75,
                    backgroundColor: '#5B2E91',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'right'
                }}
            >
                <Typography sx={{color: '#fff', marginRight: '40%'}} variant="h3">fly.id</Typography>

                <div>
                    <Button
                        id="demo-positioned-button"
                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        startIcon={<LanguageIcon />}
                        sx={{
                            color:'#fff', 
                            marginRight: '10px'
                        }}
                    >
                        PT-BR
                    </Button>
                    <Menu
                        id="demo-positioned-menu"
                        aria-labelledby="demo-positioned-button"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Português (BR)</MenuItem>
                        <MenuItem onClick={handleClose}>English (GB)</MenuItem>
                        <MenuItem onClick={handleClose}>English (US)</MenuItem>
                        <MenuItem onClick={handleClose}>Español (ES)</MenuItem>
                    </Menu>
                </div>

                <Link to="/">
                    <Button variant="text" sx={{color:'#fff', marginRight: '30px'}}>
                        Sair
                    </Button>
                </Link>
            </Box>
            
            <Box 
                sx={{
                    width: '70%', 
                    height: 270, 
                    display: 'column', 
                    justifyContent: 'left', 
                    paddingTop: '40px', 
                    backgroundColor:'#fafafa', 
                    paddingLeft:'30%'
                }}
            >

                <Typography variant="h4" sx={{marginBottom:'1%'}}>Home</Typography>

                <Typography sx={{marginBottom:'1.5%'}}>Você está logado, seja bem-vindo!</Typography>
                
                <Button variant="contained" color="error" onClick={logoutUser}>
                    Sair    
                </Button>

            </Box>
        </Box>
            
        </>
    )
}