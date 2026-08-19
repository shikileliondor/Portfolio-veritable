import { useCallback, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { Button } from '../Button'

function PhoneFrame({ image, className = '' }) {
  return (
    <div className={`phone-frame ${className}`}>
      <div className="phone-speaker" aria-hidden="true" />
      <div className="phone-screen">
        <img src={image.src} alt={image.alt} draggable="false" loading="lazy" decoding="async" />
      </div>
    </div>
  )
}

export function PhoneCarousel({ images }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const total = images.length

  const selectPrevious = useCallback(() => {
    setActiveIndex((index) => (index - 1 + total) % total)
  }, [total])

  const selectNext = useCallback(() => {
    setActiveIndex((index) => (index + 1) % total)
  }, [total])

  if (!total) return null

  const previousImage = images[(activeIndex - 1 + total) % total]
  const activeImage = images[activeIndex]
  const nextImage = images[(activeIndex + 1) % total]

  return (
    <div
      className="phone-carousel"
      role="region"
      aria-roledescription="carrousel"
      aria-label="Aperçu d’interfaces mobiles"
      tabIndex="0"
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') selectPrevious()
        if (event.key === 'ArrowRight') selectNext()
      }}
    >
      <div className="phone-carousel-stage">
        <motion.button className="phone-side phone-side--left" type="button" onClick={selectPrevious} aria-label="Voir l’interface précédente">
          <PhoneFrame image={previousImage} />
        </motion.button>

        <AnimatePresence mode="wait">
          <motion.div
            className="phone-active"
            key={activeImage.src}
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -18, scale: 0.96 }}
            transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.16}
            onDragEnd={(_, info) => {
              if (info.offset.x < -45) selectNext()
              if (info.offset.x > 45) selectPrevious()
            }}
          >
            <PhoneFrame image={activeImage} />
          </motion.div>
        </AnimatePresence>

        <motion.button className="phone-side phone-side--right" type="button" onClick={selectNext} aria-label="Voir l’interface suivante">
          <PhoneFrame image={nextImage} />
        </motion.button>
      </div>

      <div className="phone-carousel-controls">
        <Button variant="outline" size="icon" onClick={selectPrevious} aria-label="Interface précédente">
          <ChevronLeft size={19} />
        </Button>
        <span aria-live="polite">{String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
        <Button variant="outline" size="icon" onClick={selectNext} aria-label="Interface suivante">
          <ChevronRight size={19} />
        </Button>
      </div>
    </div>
  )
}
