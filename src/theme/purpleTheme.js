import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const purpleTheme = createTheme({
	palette:{
		primary:{
			main: '#262254'
		},
		secondary:{
			main: '#543884'
		},
		error: {
			main: red.A400
		}
	},
	breakpoints: {
    values: {
      xs: 0,   // Extra small devices (portrait phones, less than 576px)
      sm: 600, // Small devices (landscape phones, 576px and up)
      md: 960, // Medium devices (tablets, 768px and up)
      lg: 1280,// Large devices (desktops, 992px and up)
      xl: 1920 // Extra large devices (large desktops, 1200px and up)
    }
  },
  components: {
    MuiImageList: {
      styleOverrides: {
        root: {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          overflow: 'auto'
        },
        
      },
      defaultProps: {
        cols: 4,
        rowHeight: 200,
        gap: 16
      },
      variants: [
        {
          props: { cols: 1 },
          style: { '--image-list-col-width': '100%' }
        },
        {
          props: { cols: 2 },
          style: { '--image-list-col-width': 'calc(50% - 8px)' }
        },
        {
          props: { cols: 3 },
          style: { '--image-list-col-width': 'calc(33.3333% - 10px)' }
        },
        {
          props: { cols: 4 },
          style: { '--image-list-col-width': 'calc(25% - 10px)' }
        }
      ]
    }
  }
})