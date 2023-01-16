import {
  useRef,
  useEffect,
  PointerEvent,
  ReactNode,
  useState,
  useLayoutEffect
} from 'react'
import { motion, useMotionValue, useDragControls } from 'framer-motion'

interface RangeProps {
  wrapClass?: string
  trackClass?: string
  thumbClass?: string
  whileDragStyle?: Object
  onDrag?: Function
  onDragStart?: Function
  onDragEnd?: Function
  value?: number
  children?: ReactNode
}

export default ({
  wrapClass,
  trackClass,
  thumbClass,
  onDrag,
  onDragStart,
  onDragEnd,
  whileDragStyle,
  value,
  children
}: RangeProps) => {
  const [offsetWidth, setoffsetWidth] = useState(0)
  const [offsetLeft, setoffsetLeft] = useState(0)

  const track = useRef<HTMLDivElement>(null)
  const thumb = useRef<HTMLButtonElement>(null)
  const x = useMotionValue(0)
  const controls = useDragControls()

  const moveToPointer = (e: PointerEvent<HTMLDivElement>): void => {
    x.set(e.clientX - offsetWidth - offsetLeft)
    controls.start(e)
    onDragStart?.(positionToValue()) ||
      onDrag?.(positionToValue()) ||
      onDragEnd?.(positionToValue())
  }
  useEffect(() => {
    if (value !== undefined && !Number.isNaN(value))
      x.set(
        value *
          ((track.current?.clientWidth || 0) -
            (thumb.current?.offsetWidth || 0))
      )
  }, [value])
  const positionToValue = (): number => {
    const thumbPos = x.get() | 0
    const trackLength =
      (track.current?.clientWidth || 0) - (thumb.current?.offsetWidth || 0)
    return thumbPos / trackLength
  }
  useLayoutEffect(() => {
    setoffsetWidth(thumb.current?.offsetWidth || 0)
    setoffsetLeft(track.current?.offsetLeft || 0)
  }, [])
  return (
    <div className={wrapClass}>
      <div
        className={trackClass}
        ref={track}
        onPointerDownCapture={moveToPointer}
      >
        <motion.button
          ref={thumb}
          drag='x'
          style={{
            x,
            y: 0
          }}
          onDragStart={() => {
            onDragStart?.(positionToValue())
          }}
          onDrag={() => {
            onDrag?.(positionToValue())
          }}
          onDragEnd={() => {
            onDragEnd?.(positionToValue())
          }}
          whileDrag={whileDragStyle}
          dragMomentum={false}
          dragControls={controls}
          dragElastic={false}
          className={thumbClass}
          dragConstraints={track}
        >
          {children}
        </motion.button>
      </div>
    </div>
  )
}
