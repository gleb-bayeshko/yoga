'use client'
import { createTheme } from '@mui/material/styles'
import { montserrat } from './fonts/fonts'

let theme = createTheme({
  palette: {
    primary: {
      main: '#503770',
      dark: '#47296d',
      light: '#614388',
      mainContrast: '#964f93',
      superLight: '#f2e8ff',
      main10: 'rgba(80, 55, 112, 0.1)',
      main3: 'rgba(80, 55, 112, 0.03)',
    },
    white: {
      main: '#fff',
      main50: 'rgba(255, 255, 255, 0.5)'
    },
    black: {
      main: '#222',
      main70: 'rgba(34, 34, 34, 0.7)',
      main30: 'rgba(34, 34, 34, 0.3)',
      main3: 'rgba(34, 34, 34, 0.03)',
    },
    danger: { main: '#fa1c1c' },
  },
  shape: {
    borderRadius: {
      extraBig: 48,
      standard: 24,
      small: 16,
      extraSmall: 8,
    }
  },
  typography: { fontFamily: montserrat.style.fontFamily, },
  spacing: 8
})

theme = createTheme(theme, {
  typography: {
    fontFamily: montserrat.style.fontFamily,
    body1: {
      color: theme.palette.black.main,
      fontSize: '20px',
      fontWeight: 400,
    },
    h4: {
      fontSize: '32px',
      fontWeight: 500,
    },
    h2: {
      fontWeight: 700,
      fontSize: '40px',
      color: theme.palette.black.main
    }
  },
  transitions: {
    duration: {
      standard: 300,
      short: 200
    }
  },
  components: {
    MuiMenu: {
      styleOverrides: {
        root: {
          '& .MuiMenuItem-root.Mui-selected': {
            color: theme.palette.primary.main,
            background: 'transparent',
          },
          '& .MuiMenuItem-root': { padding: '8px 16px', },
        },
        paper: {
          borderRadius: theme.shape.borderRadius.standard,
          background: theme.palette.white.main,
          minWidth: 320,
          padding: '24px 0 16px'
        },
        list: { padding: 0 }
      }
    },
    MuiButton: {
      defaultProps: { disableRipple: true, },
      styleOverrides: {
        root: {
          textWrap: 'nowrap',
          fontFamily: theme.typography.fontFamily,
        }
      },
      variants: [
        {
          props: { variant: 'default' },
          style: {
            textTransform: 'none',
            background: theme.palette.black.main3,
            borderRadius: theme.shape.borderRadius.extraSmall,
            color: theme.palette.black.main,
            fontWeight: 600,
            fontSize: '18px',
            padding: '12px 16px',
            height: '46px',

            '&:hover': {
              color: theme.palette.primary.main,
              background: theme.palette.black.main3,
            },

            '&:active': {
              color: theme.palette.primary.light,
              background: theme.palette.black.main3,
            }
          }
        },
        {
          props: { variant: 'brand' },
          style: {
            textTransform: 'none',
            background: theme.palette.primary.main,
            borderRadius: theme.shape.borderRadius.standard,
            color: theme.palette.white.main,
            fontWeight: 600,
            fontSize: '18px',
            padding: '24px 32px',
            height: '70px',

            '&:hover': {
              color: theme.palette.white.main,
              background: theme.palette.primary.light,
            },

            '&:active': {
              color: theme.palette.white.main,
              background: theme.palette.primary.dark,
            },

            '&:disabled': {
              color: theme.palette.white.main,
              background: theme.palette.black.main30,
            },
          }
        },
        {
          props: { variant: 'brandWhite' },
          style: {
            textTransform: 'none',
            background: theme.palette.white.main,
            borderRadius: theme.shape.borderRadius.standard,
            color: theme.palette.black.main,
            fontWeight: 600,
            fontSize: '18px',
            padding: '24px 32px',
            height: '70px',

            '&:hover': {
              color: theme.palette.primary.main,
              background: theme.palette.white.main,
            },

            '&:active': {
              color: theme.palette.primary.main,
              background: theme.palette.primary.superLight,
            },
          }
        },
      ]
    }
  }
})

export default theme