import { Blocks, MonitorSmartphone, PenTool, Smartphone } from 'lucide-react'
import { motion } from 'motion/react'

const expertises = [
  {
    title: 'Développement web',
    description: 'Sites vitrines, plateformes web et solutions professionnelles rapides, responsives et évolutives.',
    icon: MonitorSmartphone,
  },
  {
    title: 'Applications mobiles',
    description: 'Applications modernes pensées autour des usages réels et adaptées aux besoins des utilisateurs.',
    icon: Smartphone,
  },
  {
    title: 'UI/UX Design',
    description: 'Interfaces claires, intuitives et cohérentes, de la réflexion sur les parcours jusqu’au design final.',
    icon: PenTool,
  },
  {
    title: 'Solutions sur mesure',
    description: 'Produits digitaux conçus pour répondre aux contraintes spécifiques des entreprises et organisations.',
    icon: Blocks,
  },
]

export default function Expertises() {
  return (
    <section id="services" className="expertise-section">
      <motion.div
        className="expertise-section-heading"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <p>Nos expertises</p>
        <h2>Concevoir le bon produit, avec les bons outils.</h2>
      </motion.div>

      <div className="expertise-grid">
        {expertises.map((expertise, index) => {
          const Icon = expertise.icon

          return (
            <motion.article
              className="expertise-card"
              key={expertise.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="expertise-card-icon"><Icon size={24} strokeWidth={1.7} aria-hidden="true" /></div>
              <span>0{index + 1}</span>
              <h3>{expertise.title}</h3>
              <p>{expertise.description}</p>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
