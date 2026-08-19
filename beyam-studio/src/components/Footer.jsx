import { ArrowUp, Mail } from 'lucide-react'
import { motion } from 'motion/react'
import WhatsAppIcon from './ui/WhatsAppIcon'
import LinkedInIcon from './ui/LinkedInIcon'
import bulbImage from '../assets/ampoule.png'

const whatsappUrl = 'https://wa.me/2250143099959?text=Bonjour%20Beyam%20Studio%2C%20je%20souhaite%20discuter%20d%E2%80%99un%20projet%20avec%20vous.'
const linkedinUrl = 'https://www.linkedin.com/in/yann-morel-effobi-brou-5474782a1/'

const footerLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Expertises', href: '#services' },
  { label: 'Formations', href: '#formations' },
  { label: 'Réalisations', href: '#realisations-mobiles' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <motion.div
        className="footer-main"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: .2 }}
        transition={{ duration: .65, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="footer-brand-block">
          <div className="footer-brand-lockup">
            <img src={bulbImage} alt="" aria-hidden="true" loading="lazy" decoding="async" />
            <a className="footer-brand" href="#accueil" aria-label="Beyam Studio, retour à l’accueil">BEYAM</a>
          </div>
          <p>De l’idée à la production.</p>
          <span>Sites web · Applications mobiles · UI/UX Design</span>
        </div>

        <nav className="footer-navigation" aria-label="Navigation du pied de page">
          <p>Navigation</p>
          <ul>
            {footerLinks.map((link) => (
              <li key={link.href}><a href={link.href}>{link.label}</a></li>
            ))}
          </ul>
        </nav>

        <div className="footer-contact">
          <p>Nous contacter</p>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            <WhatsAppIcon size={18} aria-hidden="true" />
            <span>+225 01 43 09 99 59</span>
          </a>
          <a href="mailto:morelyann10@gmail.com">
            <Mail size={18} aria-hidden="true" />
            <span>morelyann10@gmail.com</span>
          </a>
          <a className="footer-linkedin" href={linkedinUrl} target="_blank" rel="noreferrer">
            <LinkedInIcon size={18} aria-hidden="true" />
            <span>LinkedIn</span>
          </a>
        </div>
      </motion.div>

      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: .14, duration: .5 }}
      >
        <p>© {new Date().getFullYear()} Beyam Studio. Tous droits réservés.</p>
        <a href="#accueil" aria-label="Retourner en haut de la page">Retour en haut <ArrowUp size={17} aria-hidden="true" /></a>
      </motion.div>
    </footer>
  )
}
