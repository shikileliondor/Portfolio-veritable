import { motion } from 'motion/react'

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Navigation principale">
        <motion.a
          className="brand"
          href="#accueil"
          aria-label="Beyam Studio, accueil"
          initial={{ opacity: 0, x: -14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: .2, duration: .55, ease: [0.22, 1, 0.36, 1] }}
        >
          BEYAM
        </motion.a>
      </nav>
    </header>
  )
}
