import useMusic, { initialTracks } from './hooks/useMusic'

function App() {
  const [control, track] = useMusic(initialTracks)
  return (
    <div className='App'>
      <div>
        <h1>This is a music player</h1>
        <div>Track: {track.current.title}</div>
        <div>Progress: {track.progress}</div>
        <div>Duration: {track.duration}</div>
        <input
          type='range'
          min='0'
          max={track.duration || 100}
          value={track.progress || 0}
          step='any'
          onChange={e => {
            control.progress.start(Number(e.target.value))
          }}
          onMouseUp={control.progress.end}
        />
        {((track.progress / track.duration || 0) * 100).toFixed(2)}%
        <br />
        <button onClick={control.prev}>Prev</button>
        <button onClick={control.playPause}>
          {track.playing ? 'stop' : 'play'}
        </button>
        <button onClick={control.next}>Next</button>
      </div>
      <hr />
      <div>
        {initialTracks.map((track, i) => (
          <button onClick={() => control.track(i)} key={track.title + i}>
            <figure>
              <img
                src={track.img}
                height={window.innerHeight / 3}
                width={window.innerHeight / 3}
              />
              <figcaption>
                <strong>{track.title}</strong>
                <br />
                <small>{track.artist}</small>
              </figcaption>
            </figure>
          </button>
        ))}
      </div>
    </div>
  )
}

export default App
