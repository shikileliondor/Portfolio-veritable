import { motion } from 'motion/react'
import { HandwritingSvg } from './ui/HandwritingSvg'

export default function LoadingScreen({ onComplete }) {
  return (
    <motion.div
      className="loading-screen"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="flex min-h-[320px] w-full items-center justify-center">
        <HandwritingSvg
          text="Beyam"
          width={320}
          height={160}
          fontSize={72}
          strokeWidth={1}
          duration={2.5}
          className="loading-handwriting"
          onComplete={onComplete}
        />
      </div>
    </motion.div>
  )
}
