import { CalendarDays, Clock3, MonitorPlay } from 'lucide-react'
import { motion } from 'motion/react'
import webTrainingImage from '../assets/formations/for.jpeg'
import flutterTrainingImage from '../assets/formations/formation scher.jpeg'

const trainings = [
  {
    category: 'Développement web & IA',
    title: 'Créer un site web moderne avec l’IA et NestJS',
    description: 'Une session pratique autour de la création d’un site moderne, de l’assistance par l’intelligence artificielle et d’un backend NestJS.',
    date: '27 août 2026',
    time: '20h00',
    image: webTrainingImage,
    imageAlt: 'Affiche de la formation Beyam Studio sur la création d’un site web moderne avec l’IA et NestJS',
  },
  {
    category: 'Développement mobile & web',
    title: 'De l’idée au déploiement avec Flutter et Laravel',
    description: 'Création d’une mini-application Flutter et Laravel assistée par Codex, depuis le concept jusqu’à la mise en ligne.',
    date: '7 août 2026',
    time: '15h00',
    format: 'En ligne',
    image: flutterTrainingImage,
    imageAlt: 'Affiche de la formation Beyam Studio Flutter et Laravel assistée par Codex',
  },
]

export default function Formations() {
  return (
    <section id="formations" className="formations-section">
      <motion.div
        className="formations-heading"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <p>Transmission & pratique</p>
        <h2>Nos formations.</h2>
        <span>
          Des sessions concrètes pour apprendre à concevoir, développer et déployer des produits numériques avec des outils actuels.
        </span>
      </motion.div>

      <div className="formations-grid">
        {trainings.map((training, index) => (
          <motion.article
            className="formation-card"
            key={training.title}
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6, transition: { duration: .24, ease: [0.22, 1, 0.36, 1] } }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <figure className="formation-card-media">
              <img src={training.image} alt={training.imageAlt} loading="lazy" />
            </figure>

            <div className="formation-card-content">
              <p>{training.category}</p>
              <h3>{training.title}</h3>
              <span>{training.description}</span>

              <div className="formation-card-meta" aria-label="Informations sur la session">
                <span><CalendarDays size={17} aria-hidden="true" />{training.date}</span>
                <span><Clock3 size={17} aria-hidden="true" />{training.time}</span>
                {training.format && <span><MonitorPlay size={17} aria-hidden="true" />{training.format}</span>}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
