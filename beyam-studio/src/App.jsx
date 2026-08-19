import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Expertises from './components/Expertises'
import Formations from './components/Formations'
import MobileShowcase from './components/MobileShowcase'
import WebShowcase from './components/WebShowcase'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingMenu from './components/ui/liquid-morph-floating-menu'
import applicationsImage from './assets/editorial/applications.jpg'
import ideaImage from './assets/editorial/idea.jpg'
import mobileImage from './assets/editorial/mobile-design.jpg'
import platformImage from './assets/editorial/platform.jpg'
import productionImage from './assets/editorial/production.jpg'
import uxImage from './assets/editorial/ux.jpg'
import webImage from './assets/editorial/web.jpg'
import './App.css'

const editorialImages = [
  { src: ideaImage, alt: 'Une idée digitale qui prend forme', className: 'tile-1' },
  { src: webImage, alt: 'Conception d’une expérience web', className: 'tile-2' },
  { src: uxImage, alt: 'Création d’interfaces utiles', className: 'tile-3' },
  { src: mobileImage, alt: 'Design d’application mobile', className: 'tile-4' },
  { src: applicationsImage, alt: 'Applications mobiles Beyam Studio', className: 'tile-5' },
  { src: productionImage, alt: 'Produit digital prêt pour la production', className: 'tile-6' },
  { src: platformImage, alt: 'Plateforme digitale évolutive', className: 'tile-7' },
]

const heroTextVariants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.08, staggerChildren: 0.09 } },
}

const heroLineVariants = {
  hidden: { opacity: 0, y: '105%' },
  visible: {
    opacity: 1,
    y: '0%',
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
}

const floatingMenuItems = [
  { label: 'Accueil', target: 'accueil' },
  { label: 'Services & réalisations', target: 'services' },
  { label: 'Formations', target: 'formations' },
  { label: 'À propos', target: 'a-propos' },
  { label: 'Contact', target: 'contact' },
].map((item) => ({
  label: item.label,
  onClick: () => document.getElementById(item.target)?.scrollIntoView({ behavior: 'smooth' }),
}))

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fallbackTimer = window.setTimeout(() => setIsLoading(false), 6000)
    return () => window.clearTimeout(fallbackTimer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45 }}>
            <Navbar />
            <FloatingMenu items={floatingMenuItems} />
            <main id="accueil" className="editorial-hero">
              <section className="hero-statement">
                <motion.h1 variants={heroTextVariants} initial="hidden" animate="visible">
                  {['Nous développons', 'des sites web et', 'applications mobiles', 'pensés pour durer.'].map((line) => (
                    <span className="hero-line-mask" key={line}>
                      <motion.span className="hero-line" variants={heroLineVariants}>{line}</motion.span>
                    </span>
                  ))}
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .5, duration: .55 }}>
                  Développement web · Applications mobiles · UI/UX Design
                </motion.p>
              </section>

              <section className="hero-gallery" aria-label="Expertises web et mobile de Beyam Studio">
                <div className="editorial-grid">
                  {editorialImages.map((image, index) => (
                    <motion.figure
                      key={image.src}
                      className={image.className}
                      initial={{ opacity: 0, y: 28 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.12 + index * 0.075, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <img src={image.src} alt={image.alt} loading={index > 1 ? 'lazy' : 'eager'} fetchPriority={index === 0 ? 'high' : 'auto'} decoding="async" />
                    </motion.figure>
                  ))}
                </div>
              </section>
            </main>
            <Intro />
            <Expertises />
            <Formations />
            <MobileShowcase />
            <WebShowcase />
            <Contact />
            <Footer />
      </motion.div>
    </>
  )
}

export default App
