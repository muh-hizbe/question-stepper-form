import { ResetButton } from '../components/buttons/ResetButton'

function DonePage({ onReset }) {

  return (
    <div className='flex flex-col gap-2 flex-grow items-center justify-center'>
      <p className='text-center text-5xl text-violet-400 p-10'>
        You are done!
      </p>
      <ResetButton onClick={onReset} />
    </div>
  )
}

export default DonePage
