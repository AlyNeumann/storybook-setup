
import { red } from '@material-ui/core/colors';
import { cyan } from '@material-ui/core/colors';
import { teal } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

//TODO:
// create a custom theme for this app
export const theme1 = createMuiTheme({
    palette: {
      primary: {
        main: '#79e0e0',
        light: '#adffff',
        dark: '#43aeae'
      },
      secondary: red,
      error: {
        main: red.A400,
      },
      // backgroundColor: {
      //   default: '#aebfbe',
      // },
    },
  });
  
  //TODO: theme two if needed 
  export const theme2 = createMuiTheme({
    palette: {
      primary: {
        main: '#8862a1',
      },
      secondary: {
        main: '#f6144a',
      },
      error: {
        main: red.A400,
      },
      background: {
        default: '#fff',
      },
    },
  });