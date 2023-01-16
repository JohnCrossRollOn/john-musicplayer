export const Play = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    strokeWidth='1'
    stroke='currentColor'
    fill='none'
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />{' '}
    <path d='M7 4v16l13 -8z' />
  </svg>
)

export const PlayPause = ({ status }: { status: boolean }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    strokeWidth='1'
    stroke='currentColor'
    fill='none'
  >
    {status ? (
      <>
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />{' '}
        <rect x='6' y='5' width='4' height='14' rx='1' />{' '}
        <rect x='14' y='5' width='4' height='14' rx='1' />{' '}
      </>
    ) : (
      <>
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />{' '}
        <path d='M7 4v16l13 -8z' />
      </>
    )}
  </svg>
)

export const Prev = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    strokeWidth='1'
    stroke='currentColor'
    fill='none'
  >
    {' '}
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />{' '}
    <path d='M21 5v14l-8 -7z' /> <path d='M10 5v14l-8 -7z' />{' '}
  </svg>
)
export const Next = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    strokeWidth='1'
    stroke='currentColor'
    fill='none'
  >
    {' '}
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />{' '}
    <path d='M3 5v14l8 -7z' /> <path d='M14 5v14l8 -7z' />{' '}
  </svg>
)
