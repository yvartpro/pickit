// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F5A090',
      light: '#FFD9C2',
      dark: '#A68E87', 
      contrastText: '#fff',
    },
    secondary: {
      main: '#77ACA2', 
      light: '#B2BEB5',
      dark: '#5A807A',
      contrastText: '#fff',
    },
    background: {
      default: '#F8F8F8', 
      paper: '#FFFFFF', 
    },
    text: {
      primary: '#333333', 
      secondary: '#555555', 
    },
    error: {
      main: '#d32f2f',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h6: {
      fontWeight: 600,
      fontSize: '1.25rem',
    },
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#F5A090',
          color: '#fff',
          boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: '64px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '5px',
          padding: '8px 16px',
        },
        containedPrimary: {
          backgroundColor: '#F5A090',
          '&:hover': {
            backgroundColor: '#A68E87',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: '16px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '5px',
        },
        elevation3: {
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)',
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: 'none',
          '& .MuiDataGrid-cell': {
            borderBottom: '1px solid #F0F0F0',
          },
        },
      },
    },
    MuiCheckbox: {
        styleOverrides: {
          root: {
            color: '#77ACA2',
            '&.Mui-checked': {
              color: '#77ACA2',
            },
          },
        },
      },
  },
});

export default theme;