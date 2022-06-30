import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LanguageIcon from '@mui/icons-material/Language';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Link} from 'react-router-dom';

export default function NavBar(){

    //Botão Idioma
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <>
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
                        Entrar
                    </Button>
                </Link>
            </Box>
        </>
    )
}