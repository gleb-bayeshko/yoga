import Certificate from '@/features/Landing/Certificate/Certificate'
import Faq from '@/features/Landing/Faq/Faq'
import PhotoReports from '@/features/Landing/PhotoReports/PhotoReports'
import Subscribe from '@/features/Landing/Subscribe/Subscribe'
import UpcomingEvents from '@/features/Landing/UpcomingEvents/UpcomingEvents'
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
      <UpcomingEvents />
      <Certificate />
      <Faq />
      <Subscribe />
    </main>
  )
}

export default Home
