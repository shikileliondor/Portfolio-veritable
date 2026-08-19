import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'

const ease = [0.22, 1, 0.36, 1]

function MenuButton({ label, onClick, isOpen, index }) {
  const [hovered, setHovered] = useState(false)
  const animatingRef = useRef(false)
  const pendingLeaveRef = useRef(false)
  const timeoutRef = useRef(null)
  const chars = label.split('')
  const lockDuration = 30 * chars.length + 300

  useEffect(() => () => window.clearTimeout(timeoutRef.current), [])

  const handleEnter = useCallback(() => {
    pendingLeaveRef.current = false
    if (hovered) return

    setHovered(true)
    animatingRef.current = true
    timeoutRef.current = window.setTimeout(() => {
      animatingRef.current = false
      if (pendingLeaveRef.current) {
        pendingLeaveRef.current = false
        setHovered(false)
      }
    }, lockDuration)
  }, [hovered, lockDuration])

  const handleLeave = useCallback(() => {
    if (animatingRef.current) {
      pendingLeaveRef.current = true
    } else {
      setHovered(false)
    }
  }, [])

  return (
    <motion.button
      type="button"
      tabIndex={isOpen ? 0 : -1}
      onClick={onClick}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="overflow-hidden border-0 bg-transparent p-0 text-[22px] uppercase leading-none text-[#f7f1ed] sm:text-[24px]"
      style={{
        fontFamily: "'Trobika', 'Bebas Neue', Arial, sans-serif",
        letterSpacing: '-0.03em',
        height: '1em',
      }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      transition={{
        duration: 0.4,
        delay: isOpen ? 0.4 + 0.08 * index : 0,
        ease,
      }}
    >
      <span className="flex justify-center">
        {chars.map((char, charIndex) => (
          <span key={`${char}-${charIndex}`} className="inline-block overflow-hidden" style={{ height: '1em' }}>
            <span
              className="flex flex-col"
              style={{
                transitionProperty: 'transform',
                transitionDuration: hovered ? '800ms' : '0ms',
                transitionDelay: hovered ? `${30 * charIndex}ms` : '0ms',
                transform: hovered ? 'translateY(-50%)' : 'translateY(0%)',
                transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            >
              <span className="block" style={{ height: '1em', lineHeight: '1em' }}>{char === ' ' ? '\u00A0' : char}</span>
              <span className="block" style={{ height: '1em', lineHeight: '1em' }} aria-hidden="true">{char === ' ' ? '\u00A0' : char}</span>
            </span>
          </span>
        ))}
      </span>
    </motion.button>
  )
}

export default function FloatingMenu({ items }) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef(null)
  const menuItems = items ?? [
    { label: 'Accueil' },
    { label: 'Réalisations' },
    { label: 'Contact' },
  ]
  const openHeight = 116 + menuItems.length * 48

  useEffect(() => {
    if (!isOpen) return undefined

    const closeOnOutsideClick = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('mousedown', closeOnOutsideClick)
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('mousedown', closeOnOutsideClick)
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [isOpen])

  return (
    <motion.div
      ref={containerRef}
      className="floating-menu-position fixed z-[100]"
      style={{ pointerEvents: 'auto' }}
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease }}
    >
      <motion.div
        className="floating-menu-shell relative flex max-w-[calc(100vw-24px)] flex-col overflow-hidden"
        style={{
          maxHeight: 'calc(100svh - 32px)',
          fontFamily: "'Aeonik TRIAL', Inter, sans-serif",
          letterSpacing: '-0.02em',
        }}
        animate={{
          width: isOpen ? 280 : 150,
          height: isOpen ? openHeight : 48,
          borderRadius: isOpen ? 32 : 72,
          scale: 1,
        }}
        whileHover={isOpen ? undefined : { scale: 1.05 }}
        transition={{
          duration: 0.8,
          ease,
          height: { duration: isOpen ? 0.8 : 0.15 },
          scale: { duration: 0.25, ease },
        }}
      >
        <motion.div
          className="absolute inset-0"
          animate={{ backgroundColor: '#FFE862', borderColor: isOpen ? '#FFE862' : '#d1bb3b' }}
          transition={{ duration: isOpen ? 0.1 : 0.3, ease }}
          style={{ borderWidth: 1, borderStyle: 'solid', borderRadius: 'inherit' }}
        />

        <motion.div
          className="absolute left-1/2 bg-[#242424]"
          style={{ width: '200%', height: '200%', borderRadius: '50%', x: '-50%' }}
          animate={{ bottom: isOpen ? '-20%' : '-200%' }}
          transition={{ duration: 0.8, ease, delay: isOpen ? 0.1 : 0 }}
        />

        <div
          id="floating-menu-panel"
          className="relative z-10 min-h-0 flex-col items-center justify-center gap-6 overflow-y-auto py-4"
          style={{
            display: isOpen ? 'flex' : 'none',
            pointerEvents: isOpen ? 'auto' : 'none',
            opacity: isOpen ? 1 : 0,
            flex: isOpen ? 1 : 0,
          }}
          aria-hidden={!isOpen}
        >
          {menuItems.map((item, index) => (
            <MenuButton
              key={item.label}
              label={item.label}
              onClick={() => {
                item.onClick?.()
                setIsOpen(false)
              }}
              isOpen={isOpen}
              index={index}
            />
          ))}
        </div>

        <motion.button
          type="button"
          className="relative z-10 flex w-full shrink-0 cursor-pointer items-center justify-between border-0 bg-transparent"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isOpen}
          aria-controls="floating-menu-panel"
          animate={{
            paddingLeft: isOpen ? 24 : 20,
            paddingRight: isOpen ? 24 : 20,
            paddingBottom: isOpen ? 24 : 0,
            height: 48,
            color: isOpen ? '#f7f1ed' : '#242424',
          }}
          transition={{ duration: 0.8, ease }}
        >
          <span className="relative z-20 block text-[14px] font-semibold leading-none opacity-100 sm:text-[18px]">
            Menu
          </span>

          <span className="relative flex h-6 w-6 items-center justify-center" aria-hidden="true">
            <motion.span
              className="absolute block h-[2px] w-[18px] rounded-full"
              style={{ backgroundColor: 'currentColor' }}
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 0 : -3,
              }}
              transition={{ duration: 0.4, ease }}
            />
            <motion.span
              className="absolute block h-[2px] w-[18px] rounded-full"
              style={{ backgroundColor: 'currentColor' }}
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? 0 : 3,
              }}
              transition={{ duration: 0.4, ease }}
            />
          </span>
        </motion.button>
      </motion.div>
    </motion.div>
  )
}
