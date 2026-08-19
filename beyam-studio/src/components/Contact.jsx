import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight, Mail, X } from 'lucide-react'
import WhatsAppIcon from './ui/WhatsAppIcon'
import LinkedInIcon from './ui/LinkedInIcon'

const whatsappNumber = '2250143099959'
const whatsappMessage = encodeURIComponent('Bonjour Beyam Studio, je souhaite discuter d’un projet avec vous.')
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
const emailAddress = 'morelyann10@gmail.com'
const linkedinUrl = 'https://www.linkedin.com/in/yann-morel-effobi-brou-5474782a1/'

const channelContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: .08 } },
}

const channelVariants = {
  hidden: { opacity: 0, x: 22 },
  visible: { opacity: 1, x: 0, transition: { duration: .52, ease: [0.22, 1, 0.36, 1] } },
}

function WhatsAppPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const popupRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    const closeOnOutsideClick = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) setIsOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    document.addEventListener('mousedown', closeOnOutsideClick)
    return () => {
      window.removeEventListener('keydown', closeOnEscape)
      document.removeEventListener('mousedown', closeOnOutsideClick)
    }
  }, [isOpen])

  return (
    <div ref={popupRef} className="whatsapp-widget">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="whatsapp-popup"
            initial={{ opacity: 0, y: 16, scale: .96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: .97 }}
            transition={{ duration: .28, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-label="Contacter Beyam Studio sur WhatsApp"
          >
            <div className="whatsapp-popup-header">
              <div><WhatsAppIcon size={20} aria-hidden="true" /><span>WhatsApp</span></div>
              <button type="button" onClick={() => setIsOpen(false)} aria-label="Fermer le popup WhatsApp"><X size={18} /></button>
            </div>
            <div className="whatsapp-popup-body">
              <p>Bonjour 👋</p>
              <span>Présentez-nous votre idée et échangeons directement sur votre projet.</span>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" onClick={() => setIsOpen(false)}>
                Démarrer la discussion <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="whatsapp-trigger"
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        whileHover={{ scale: 1.06, transition: { delay: 0, duration: .2 } }}
        whileTap={{ scale: .96 }}
        initial={{ opacity: 0, scale: .82 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: .8, duration: .45, ease: [0.22, 1, 0.36, 1] }}
        aria-label={isOpen ? 'Fermer le contact WhatsApp' : 'Contacter Beyam Studio sur WhatsApp'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <WhatsAppIcon size={26} aria-hidden="true" />}
      </motion.button>
    </div>
  )
}

export default function Contact() {
  return (
    <>
      <section id="contact" className="contact-section">
        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: .35 }}
          transition={{ duration: .65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p>Parlons de votre projet</p>
          <h2>Une idée en tête ?<br />Transformons-la en produit.</h2>
        </motion.div>

        <motion.div
          className="contact-channels"
          variants={channelContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: .35 }}
        >
          <motion.a variants={channelVariants} className="contact-channel" href={whatsappUrl} target="_blank" rel="noreferrer">
            <WhatsAppIcon className="whatsapp-brand-icon" size={25} aria-hidden="true" />
            <div><span>WhatsApp</span><strong>+225 01 43 09 99 59</strong></div>
            <ArrowUpRight size={20} aria-hidden="true" />
          </motion.a>

          <motion.a variants={channelVariants} className="contact-channel" href={`mailto:${emailAddress}`}>
            <Mail size={25} aria-hidden="true" />
            <div><span>Email</span><strong>{emailAddress}</strong></div>
            <ArrowUpRight size={20} aria-hidden="true" />
          </motion.a>

          <motion.a variants={channelVariants} className="contact-channel" href={linkedinUrl} target="_blank" rel="noreferrer">
            <LinkedInIcon size={25} aria-hidden="true" />
            <div><span>LinkedIn</span><strong>Yann-Morel Effobi Brou</strong></div>
            <ArrowUpRight size={20} aria-hidden="true" />
          </motion.a>
        </motion.div>
      </section>

      <WhatsAppPopup />
    </>
  )
}
