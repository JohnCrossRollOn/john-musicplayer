import useMusic from './hooks/useMusic'
import { initialTracks } from './assets'
import Reproducer from './components/Reproducer'
import Tracks from './components/Tracks'

function App() {
  const [control, status] = useMusic(initialTracks)

  return (
    <div className='App relative h-screen flex flex-col'>
      <Tracks {...{ control, status }} />
      <Reproducer {...{ control, status }} />
    </div>
  )
}

export default App
