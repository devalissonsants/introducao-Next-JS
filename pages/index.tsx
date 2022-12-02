import  SignIn  from "./login"
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: "#ffffff"
    },
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
    <SignIn />   
    </ThemeProvider>
  )
}
