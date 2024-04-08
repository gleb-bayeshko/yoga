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
      semiLight: '#a779e3',
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
    danger: {
      main: '#fa1c1c',
      mainLight: '#ff6464'
    },
  },
  shape: {
    borderRadius: {
      extraBig: 48,
      standard: 24,
      small: 16,
      extraSmall: 8,
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 900,
      extramd: 1000,
      lg: 1240,
      semixl: 1440,
      xl: 1500,
    },
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
      [theme.breakpoints.down('md')]: { fontSize: '18px' }
    },
    h4: {
      fontSize: '32px',
      fontWeight: 500,
    },
    h2: {
      fontWeight: 700,
      fontSize: '40px',
      color: theme.palette.black.main,
      [theme.breakpoints.down('md')]: { fontSize: '32px' }
    }
  },
  transitions: {
    duration: {
      standard: 300,
      short: 200
    }
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '--TextField-brandBorderColor': theme.palette.black.main30,
          '--TextField-brandBorderHoverColor': theme.palette.primary.light,
          '--TextField-brandBorderFocusedColor': theme.palette.primary.main,

          '& .MuiOutlinedInput-root': {
            '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
            '& .MuiInputBase-input': {
              '& :placeholder': { color: theme.palette.black.main70 } ,
              padding: '13px 16px',
            },

            border: `1px solid ${theme.palette.black.main30}`,
            borderRadius: theme.shape.borderRadius.extraSmall,
            height: '48px',
            color: theme.palette.black.main,

            '&.Mui-focused': {
              border: `1px solid ${theme.palette.primary.main}`,
              '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
            },
            '&:hover:not(.Mui-focused)': { '& .MuiOutlinedInput-notchedOutline': { borderColor: '#ccc', }, },
          },
          '& .MuiInputLabel-outlined': {
            color: '#2e2e2e',
            fontWeight: 'bold',
            '&.Mui-focused': { color: 'secondary.main', },
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          background: theme.palette.black.main3,
          borderRadius: theme.shape.borderRadius.small,

          '&:not(:last-child)': { marginBottom: '24px', },

          '&.Mui-expanded': {
            marginBottom: '24px',
            marginLeft: 0,
          },

          '&:before': { display: 'none' },

          '& .MuiAccordionSummary-root': {
            minHeight: '72px',
            padding: '0 24px',
          },
          '& .MuiAccordionDetails-root': {
            padding: '0 48px 24px 24px',
            fontWeight: 500,
            fontSize: '20px',
          },
          '& .MuiAccordionSummary-content': {
            fontWeight: 700,
            fontSize: '24px',
            lineHeight: '24px',
          },
          '& .MuiAccordionSummary-content.Mui-expanded': { marginBottom: '16px', },

          [theme.breakpoints.down('md')]: {
            '& .MuiAccordionSummary-content': { fontSize: '20px', },
            '& .MuiAccordionDetails-root': { fontSize: '18px', }
          }
        }
      }
    },
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
        {
          props: { variant: 'text' },
          style: {
            textTransform: 'none',
            textWrap: 'nowrap',
            background: 'transparent',
            color: theme.palette.primary.main,
            fontWeight: 500,
            fontSize: '16px',
            padding: '0',
            width: 'min-content',
            minWidth: 0,

            '&:hover': {
              color: theme.palette.primary.mainContrast,
              background: 'transparent',
            },

            '&:active': {
              color: theme.palette.primary.mainContrast,
              background: 'transparent',
            },
          }
        },
        {
          props: { variant: 'outlined' },
          style: {
            textTransform: 'none',
            textWrap: 'nowrap',
            background: 'transparent',
            color: theme.palette.primary.main,
            fontWeight: 400,
            fontSize: '21px',
            padding: '24px',
            height: '73px',
            border: `1px solid ${theme.palette.primary.main}`,
            borderRadius: theme.shape.borderRadius.extraSmall,
            minWidth: 0,

            '&:hover': {
              color: theme.palette.primary.mainContrast,
              borderColor: theme.palette.primary.mainContrast,
              background: 'transparent',
            },

            '&:active': {
              color: theme.palette.primary.mainContrast,
              borderColor: theme.palette.primary.mainContrast,
              background: 'transparent',
            },
          }
        },
      ]
    }
  }
})

export default theme
