import { ExternalLink } from 'lucide-react'
import { motion } from 'motion/react'
import schoolDashboardImage from '../assets/image web/WhatsApp Image 2026-08-19 at 11.34.35.jpeg'

const projects = [
  {
    type: 'Site web',
    name: 'IvoirCuisson.ci',
    url: 'https://ivoircuisson.ci',
  },
  {
    type: 'Application web',
    name: 'Gestion scolaire',
    description: 'Une application de gestion scolaire conçue pour les écoles primaires et les lycées.',
    image: schoolDashboardImage,
  },
]

export default function WebShowcase() {
  return (
    <section id="realisations" className="web-showcase">
      <motion.div
        className="web-showcase-heading"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: .35 }}
        transition={{ duration: .65, ease: [0.22, 1, 0.36, 1] }}
      >
        <p>Sites & applications web</p>
        <h2>Des plateformes conçues pour fonctionner au quotidien.</h2>
      </motion.div>

      <div className="web-project-grid">
        {projects.map((project, index) => (
          <motion.article
            className="web-project-card"
            key={project.name}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: index * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="browser-preview">
              <div className="browser-bar" aria-hidden="true">
                <span /><span /><span />
                <div>{project.url ?? 'application-scolaire.local'}</div>
              </div>

              {project.image ? (
                <img
                  className="browser-project-image"
                  src={project.image}
                  alt="Tableau de bord de l’application de gestion scolaire"
                  loading="lazy"
                />
              ) : project.url ? (
                <iframe
                  src={project.url}
                  title={`Aperçu de ${project.name}`}
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin"
                  tabIndex="-1"
                />
              ) : null}
            </div>

            <div className="web-project-info">
              <div>
                <span>{project.type}</span>
                <h3>{project.name}</h3>
                {project.description && <p>{project.description}</p>}
              </div>
              {project.url && (
                <a href={project.url} target="_blank" rel="noreferrer" aria-label={`Visiter ${project.name}`}>
                  <ExternalLink size={21} />
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>

      <motion.p
        className="confidentiality-note"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        Nous réalisons également des projets dans plusieurs autres domaines.
        Certains ne sont pas présentés ici afin de respecter leur confidentialité.
      </motion.p>
    </section>
  )
}
