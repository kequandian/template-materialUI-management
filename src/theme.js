import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#e10050',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f0f2f5',
    },
  },
});

export default theme;
