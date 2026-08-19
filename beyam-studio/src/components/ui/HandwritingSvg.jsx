import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { cn } from '../../lib/utils'

const DEFAULT_FONT_URL =
  'https://raw.githubusercontent.com/google/fonts/main/ofl/indieflower/IndieFlower-Regular.ttf'

export function HandwritingSvg({
  path: pathProp,
  text,
  fontUrl = DEFAULT_FONT_URL,
  className,
  strokeClassName,
  duration = 2,
  delay = 0.5,
  strokeWidth = 2,
  width = 100,
  height = 100,
  fontSize = 48,
  ease = 'easeInOut',
  onComplete,
}) {
  const [path, setPath] = useState(pathProp ?? null)
  const [viewBox, setViewBox] = useState(`0 0 ${width} ${height}`)
  const [loading, setLoading] = useState(!!text && !pathProp)

  useEffect(() => {
    if (!text || pathProp) {
      return
    }
    let cancelled = false
    Promise.all([
      fetch(fontUrl).then((res) => {
        if (!res.ok) throw new Error('Impossible de charger la police manuscrite')
        return res.arrayBuffer()
      }),
      import('opentype.js'),
    ])
      .then(([buffer, opentype]) => {
        if (cancelled) {
          return
        }
        const font = opentype.parse(buffer)
        const p = font.getPath(text, 0, fontSize, fontSize)
        const bbox = p.getBoundingBox()
        const pad = 5
        const vx = Math.floor(bbox.x1) - pad
        const vy = Math.floor(bbox.y1) - pad
        const vw = Math.ceil(bbox.x2 - bbox.x1) + pad * 2
        const vh = Math.ceil(bbox.y2 - bbox.y1) + pad * 2
        setViewBox(`${vx} ${vy} ${vw} ${vh}`)
        setPath(p.toPathData(2))
      })
      .catch(() => {
        if (!cancelled) {
          setPath(null)
        }
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false)
        }
      })
    return () => {
      cancelled = true
    }
  }, [text, fontUrl, pathProp, fontSize, width, height])

  if (loading) {
    return (
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className={cn('text-muted-foreground', className)} aria-hidden={true}>
        <title>Handwriting SVG loading</title>
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize={14}>Loading…</text>
      </svg>
    )
  }

  const d = path ?? ''
  if (!d) {
    return (
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className={cn('text-muted-foreground', className)} aria-hidden={true}>
        <title>Handwriting SVG</title>
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize={12}>{text ? 'Invalid font' : 'Provide path or text'}</text>
      </svg>
    )
  }

  const svgViewBox = pathProp ? `0 0 ${width} ${height}` : viewBox

  return (
    <svg width={width} height={height} viewBox={svgViewBox} className={cn('text-rose-500', className)} aria-hidden={true}>
      <title>Handwriting SVG</title>
      <motion.path
        d={d}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={strokeClassName}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay, duration, ease }}
        onAnimationComplete={onComplete}
      />
    </svg>
  )
}

export default HandwritingSvg
