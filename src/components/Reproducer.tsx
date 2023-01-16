import Range from './Range'
import { Control, Status } from '../hooks/useMusic'
import { Next, Prev, PlayPause } from './Icons'
import Title from './Title'

interface props {
  control: Control
  status: Status
}

export default ({ control, status }: props) => {
  return (
    <div className='bg-red-500 p-4 border border-black flex flex-col gap-2 h-32 overflow-hidden shadow-lg'>
      <div className='relative flex items-center h-12 w-full '>
        <Title className='absolute text-2xl font-semibold p-1 rounded-md'>
          {status.current.title}
        </Title>
      </div>
      <div className='flex-1 flex gap-4 h-12 z-10'>
        <input
          type='range'
          className='range'
          value={status.progress}
          onChange={(e) => {
            control.progress.start(Number(e.target.value))
          }}
          step='any'
          min={0}
          max={status.duration || 0}
          onMouseUp={() => control.progress.end()}
        />
        <div className='flex h-12'>
          <button
            className='p-2 border-b-8 border border-black active:border-b active:mt-[7px] flex justify-center transition-all w-12 bg-white'
            onMouseDown={control.prev}
          >
            <Prev />
          </button>
          <button
            className={`p-2 border-b-8 border border-black active:border-b active:mt-[7px] transition-all flex justify-center w-24 bg-white ${
              status.playing ? 'border-b-4 mt-1' : ''
            }`}
            onMouseDown={control.playPause}
          >
            <PlayPause status={status.playing} />
          </button>
          <button
            className='p-2 border-b-8 border border-black active:border-b active:mt-[7px] flex justify-center transition-all w-12 bg-white'
            onMouseDown={control.next}
          >
            <Next />
          </button>
        </div>
      </div>
    </div>
  )
}
