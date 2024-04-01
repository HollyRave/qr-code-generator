import { createTheme, colors, ThemeProvider } from '@mui/material';
import Layout from './components/layout/Layout';

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
        <Layout />
      </div>
    </ThemeProvider >
  );
}

export default App;
