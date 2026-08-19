import { PhoneCarousel } from './phone-mockups-1-utils/phone-carousel'
import beyamImage from '../../assets/image mobile/beyam.jpg'
import ivoireQuizImage from '../../assets/image mobile/ivoirquiz.jpeg'
import orienteMoiImage from '../../assets/orientmoi.jpeg'

const exampleImages = [
  {
    src: beyamImage,
    alt: 'Tableau de bord de l’application mobile Beyam',
  },
  {
    src: ivoireQuizImage,
    alt: 'Écran d’accueil de l’application mobile IvoireQuiz',
  },
  {
    src: orienteMoiImage,
    alt: 'Écran d’accueil de l’application mobile Oriente Moi',
  },
]

export default function PhoneMockupBasic() {
  return <PhoneCarousel images={exampleImages} />
}
