// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#E6B8AF', // Dusty Rose - a soft, elegant pink
      light: '#FFD9C2', // Light Peach - for accents and highlights
      dark: '#A68E87',  // Taupe - for contrast and grounding
      contrastText: '#fff', // White text for good readability on primary color
    },
    secondary: {
      main: '#77ACA2', // Seafoam Green - a calming and sophisticated secondary color
      light: '#B2BEB5',
      dark: '#5A807A',
      contrastText: '#fff',
    },
    background: {
      default: '#F8F8F8', // Very light gray for overall background
      paper: '#FFFFFF',  // White for paper-based elements
    },
    text: {
      primary: '#333333', // Dark gray for main text
      secondary: '#555555', // Slightly lighter gray for less important text
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
      textTransform: 'none', // Prevent buttons from being all uppercase
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#E6B8AF', // Primary color for AppBar
          color: '#fff', // White text on AppBar
          boxShadow: '0px 2px 4px rgba(0,0,0,0.1)', // Subtle shadow
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: '64px', // Adjust toolbar height if needed
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Rounded buttons
          padding: '8px 16px',
        },
        containedPrimary: {
          backgroundColor: '#E6B8AF',
          '&:hover': {
            backgroundColor: '#A68E87', // Darker shade on hover
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
          borderRadius: '12px', // Rounded corners for Paper
        },
        elevation3: {
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)', // Softer shadow
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
            color: '#77ACA2', // Seafoam Green - a calming and sophisticated secondary color
            '&.Mui-checked': {
              color: '#77ACA2',
            },
          },
        },
      },
  },
});

export default theme;