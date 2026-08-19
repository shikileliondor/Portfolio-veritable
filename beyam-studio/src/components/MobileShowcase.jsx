import { motion } from 'motion/react'
import PhoneMockupBasic from './ui/phone-mockups-1'

export default function MobileShowcase() {
  return (
    <section id="realisations-mobiles" className="mobile-showcase">
      <motion.div
        className="mobile-showcase-copy"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <p>Réalisations mobiles</p>
        <h2>Des applications conçues pour des usages réels.</h2>
        <span>Gestion budgétaire, culture ivoirienne et orientation : des expériences mobiles claires, utiles et adaptées à leurs utilisateurs.</span>
      </motion.div>
      <motion.div
        className="mobile-showcase-carousel"
        initial={{ opacity: 0, x: 34 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: .25 }}
        transition={{ duration: .72, ease: [0.22, 1, 0.36, 1] }}
      >
        <PhoneMockupBasic />
      </motion.div>
    </section>
  )
}
