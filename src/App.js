import './App.css';
import Header from './components/Header';
import { createTheme, colors, ThemeProvider } from '@mui/material';

const customTheme = createTheme({
  palette: {
    primary: {
      main: colors.grey[500]
    }
  }
})


function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div className="App">
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
