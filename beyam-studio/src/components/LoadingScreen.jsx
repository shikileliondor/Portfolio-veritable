import { motion } from 'motion/react'
import { HandwritingSvg } from './ui/HandwritingSvg'

export default function LoadingScreen({ onComplete }) {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.015 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex min-h-[320px] w-full items-center justify-center">
        <HandwritingSvg
          text="Beyam"
          width={320}
          height={160}
          fontSize={72}
          strokeWidth={1}
          duration={2.8}
          className="loading-handwriting"
          onComplete={onComplete}
        />
      </div>
    </motion.div>
  )
}
