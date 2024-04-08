import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import Footer from '@/features/Footer/Footer'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Navbar from '../features/Navbar/Navbar'
import StyledComponentsRegistry from '../lib/registry'
import { montserrat } from '../styles/fonts/fonts'
import theme from '../styles/theme'
import './globals.css'
import 'swiper/css'

export default function RootLayout({ children }) {
  return (
    <>
      <CssBaseline />
      <html lang="en">
        <body className={montserrat.className}>
          <StyledComponentsRegistry>
            <AppRouterCacheProvider>
              <ThemeProvider theme={theme}>
                <Navbar />
                {children}
                <Footer />
              </ThemeProvider>
            </AppRouterCacheProvider>
          </StyledComponentsRegistry>
        </body>
      </html>
    </>
  )
}
