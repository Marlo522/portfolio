import React from 'react'
import { motion, type MotionProps } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface FadeInProps extends MotionProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  duration?: number
  className?: string
}

export function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.6,
  className,
  ...rest
}: FadeInProps) {
  const reduced = useReducedMotion()

  const directionMap = {
    up: { y: 24 },
    down: { y: -24 },
    left: { x: 24 },
    right: { x: -24 },
    none: {},
  }

  return (
    <motion.div
      initial={reduced ? { opacity: 1 } : { opacity: 0, ...directionMap[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: reduced ? 0 : duration, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
