import { motion } from 'motion/react'

const lines = [
  ['Nous', 'accompagnons', 'entreprises', 'et'],
  ['entrepreneurs', 'dans', 'la', 'création'],
  ['de', 'sites', 'web', 'et', 'd’applications'],
  ['mobiles', 'et', 'solutions', 'sur', 'mesure.'],
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.065,
    },
  },
}

const wordVariants = {
  hidden: { opacity: 0, y: '110%' },
  visible: {
    opacity: 1,
    y: '0%',
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Intro() {
  return (
    <section id="a-propos" className="intro-section">
      <motion.h2
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.45 }}
      >
        {lines.map((line, lineIndex) => (
          <span className="intro-line" key={lineIndex}>
            {line.map((item, itemIndex) => (
              <span className="reveal-mask" key={`${item}-${itemIndex}`}>
                <motion.span className="reveal-word" variants={wordVariants}>{item}</motion.span>
              </span>
            ))}
          </span>
        ))}
      </motion.h2>
    </section>
  )
}
