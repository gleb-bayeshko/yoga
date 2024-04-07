import PhotoReports from '@/features/Landing/PhotoReports/PhotoReports'
import AboutProject from '../features/Landing/AboutProject/AboutProject'
import Banner from '../features/Landing/Banner/Banner'

export const metadata = {
  title: 'Йога с Хвостиком',
  description: 'Главная страница',
}

const Home = () => {
  return (
    <main>
      <Banner />
      <AboutProject />
      <PhotoReports />
    </main>
  )
}

export default Home
