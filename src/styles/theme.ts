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
            light: '#ECE9EB',
            main: '#776676',
            dark: '#3D253B'
        },
        text: {
            primary: "#FFFFFF",
            secondary: "#E6DECA",
            disabled: "#606060",
        },
        background: {
            default: "#BFDC8C",
            paper: "#EAF3D9",

        },
        
    },
    typography: {
        fontFamily: 'Lexend, sans-serif',
        

    }
});

export default theme;