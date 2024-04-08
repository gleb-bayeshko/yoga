import { Inter, Montserrat, Montserrat_Alternates } from 'next/font/google'
import localFont from 'next/font/local'

export const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], display: 'block' })
export const montserratAlternates = Montserrat_Alternates({ subsets: ['latin', 'cyrillic'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], display: 'block' })
export const inter = Inter({ subsets: ['latin', 'cyrillic'], display: 'block' })
export const valisca = localFont({
  src: './valisca/Valisca.ttf',
  display: 'block',
})
