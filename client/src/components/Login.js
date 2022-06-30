import NavBar from '../components/NavBar';
import Form from '../components/Form';
import SideBar from '../components/SideBar';
import Box from '@mui/material/Box';

export default function Login(){
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
                <Form /> 
            </Box> 
        </Box>
            
        </>
    )
}