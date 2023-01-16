import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface Props {
  className: string
  children: ReactNode
}

export default ({ children, className }: Props) => {
  return (
    <AnimatePresence>
      <motion.div
        className={className}
        key={String(children?.valueOf())}
        initial={{ x: window.innerWidth }}
        animate={{ x: 0 }}
        exit={{ x: -window.innerWidth }}
        transition={{ ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
