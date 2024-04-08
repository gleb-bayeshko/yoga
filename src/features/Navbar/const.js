import SocialInstagram from '../../ui/icons/SocialInstagram'
import SocialTelegram from '../../ui/icons/SocialTelegram'
import SocialVk from '../../ui/icons/SocialVk'

export const cities = [
  'Москва',
  'Санкт-Петербург',
  'Нижний Новгород',
]

export const anchors = {
  aboutProject: 'aboutProject',
  photoReports: 'photoReports',
  upcomingEvents: 'upcomingEvents',
  certificate: 'certificate',
  faq: 'faq',
  subscribe: 'certificate',
}

export const links = [
  {
    id: 1,
    title: 'О нас',
    link: `#${anchors.aboutProject}`
  },
  {
    id: 2,
    title: 'Мероприятия',
    link: `#${anchors.upcomingEvents}`
  },
  {
    id: 3,
    title: 'Фотографии',
    link: `#${anchors.photoReports}`
  },
  {
    id: 4,
    title: 'Сертификат',
    link: `#${anchors.certificate}`
  },
  {
    id: 5,
    title: 'Частые вопросы',
    link: `#${anchors.faq}`
  },
]

export const socials = [
  {
    id: 1,
    link: '#',
    Icon: SocialTelegram,
    title: 'Мы в Телеграм'
  },
  {
    id: 2,
    link: '#',
    Icon: SocialVk,
    title: 'Мы в Вконтакте'
  },
  {
    id: 3,
    link: '#',
    Icon: SocialInstagram,
    title: 'Мы в Нельзяграм*'
  },
]
