import { createTheme } from '@mui/material/styles';
import '@fontsource/lexend';


const theme = createTheme({
    palette: {
        primary: {
            light: '#95C540',
            main: '#427F3B',
            dark: '#1F3736'
        },
        secondary: {
            light: '#523B40',
            main: '#3D253B',
        },
        
    },
    typography: {
        fontFamily: 'Lexend, sans-serif',

    }
});

export default theme;