import createTheme from '@mui/icons-material'
import ThemeProvider from '@mui/material'
import Button from '@mui/material/Button'

const Theme = createTheme({
  palette:{
    primary:{
      main: '#000'
    },
    secondary:{
      main:'#fff'
    }
  },
  shade:{
    borderRadius: 24
  }
})

export default Theme
