import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Popper from '@mui/material/Popper';
import KeyIcon from '@mui/icons-material/Key';
import {Link} from 'react-router-dom';

export default function SideBar(){

    //Poper
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return(
        <>
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    borderRight: '100px solid #0000001f'
                }}
            >
                <Box
                    sx={{
                        width: '85%',
                        height: '16%',
                        backgroundColor: '#2b0062',
                        padding: '20px',
                        borderRight: '1px solid #fff'
                    }}
                >
                    <Stack direction="row" spacing={2} sx={{ marginBottom: '10%', display: 'flex', justifyContent: 'center' }}>
                        <Avatar src="/img/user.png" variant="circular" sx={{ height: '40%', width: '40%', marginRight: '6%' }} />
                        <Avatar src="/img/logo.png" variant="rounded" sx={{ height: '28%', width: '28%' }} />
                    </Stack>
                    <Typography sx={{ color: '#6BBD2E', textAlign: 'center', fontSize: '14px' }}>Você precisa realizar o login!</Typography>
                </Box>

                <Box
                    sx={{
                        width: '84.5%',
                        height: '74.5%',
                        backgroundColor: '#fff',
                        padding: '20px',
                        borderRight: '1px solid #0000001f'
                    }}
                >
                    <Button 
                    variant="text" 
                    sx={{ 
                        color: '#000', 
                        width: '100%', 
                        paddingTop: '10px', 
                        paddingBottom: '10px', 
                        display: 'flex', 
                        justifyContent: 'center' 
                    }}
                    aria-describedby={id}
                    onClick={handleClick}
                    >
                        <AccountBoxIcon sx={{ color: 'rgba(0, 0, 0, 0.50)', paddingRight: '5%' }}/>
                        Usuário
                        <KeyboardArrowDownIcon sx={{ color: 'rgba(0, 0, 0, 0.87)', paddingLeft: '20%' }}/>
                    </Button>

                    <Popper id={id} open={open} anchorEl={anchorEl}>
                        <Link to="/">
                            <Button 
                            variant="text"
                            sx={{ color: '#000' }}
                            startIcon={<KeyIcon sx={{ color: 'rgba(0, 0, 0, 0.54)', marginRight: '20px'}}/>}
                            >
                                Entrar
                            </Button>
                        </Link>
                    </Popper>
                </Box>
            </Box>
        </>
    )
}

