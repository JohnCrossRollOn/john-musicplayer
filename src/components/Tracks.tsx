import { motion, useMotionValue } from 'framer-motion'

import { initialTracks } from '../assets'
import { Control, Status } from '../hooks/useMusic'
import { Play } from './Icons'
import { useEffect, useRef } from 'react'
import { Track } from '../hooks/useMusic'

interface trackProps {
  track: Track
  control: Control
  index: number
  status: Status
}

const TrackCard = ({ track, control, index, status }: trackProps) => {
  const cardRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (status.index === index) {
      cardRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [status.current])
  return (
    <div
      ref={cardRef}
      className={`border border-black select-none w-64 snap-always snap-center transition-transform ${
        status.index === index ? '' : 'm-2'
      }`}
      key={index + track.title}
    >
      <img src={track.img} className='object-cover aspect-square w-64 h-64' />
      <div className='relative flex px-4 py-2 pr-16 w-full h-16'>
        <div className='absolute top-0 right-0 h-12 m-4 z-10 -translate-y-12'>
          <button
            className='p-2 border-b-8 border border-blac  k active:border-b active:mt-[7px] flex justify-center transition-all w-12 bg-white'
            onClick={() => control.track(index)}
          >
            <Play />
          </button>
        </div>
        <div className='overflow-hidden'>
          <p className='break-words'>{track.title}</p>
        </div>
      </div>
    </div>
  )
}

interface props {
  control: Control
  status: Status
}

export default ({ control, status }: props) => {
  return (
    <div
      className='scrollbar-hidden grid grid-flow-col h-[28rem] w-full overflow-x-scroll overflow-y-clip p-4 px-12 gap-4 bg-white snap-x snap-mandatory'
      draggable
    >
      {initialTracks.map((track, index) => (
        <TrackCard key={index} {...{ track, index, control, status }} />
      ))}
    </div>
  )
}
