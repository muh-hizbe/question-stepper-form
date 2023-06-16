import { MainLayout } from './components/layouts/MainLayout'
import { FormStepper } from './components/forms/FormStepper'
import { questionsData } from './data/question'
import { useEffect, useState } from 'react'
import DonePage from './pages/DonePage'

function App() {
  const TEN_MINUTES = 10 * 60 * 1000
  const [currentDate, setCurrentDate] = useState(new Date().getTime())
  const [inTenMinutes, setInTenMinutes] = useState(currentDate + TEN_MINUTES)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [isDone, setIsDone] = useState(false)

  const handleReset = async () => {
    localStorage.setItem('currentQuestionIndex', 0)
    questionsData?.map(item => (
      localStorage.removeItem(item?.question)
    ))

    setIsDone(() => false)
    const currentTime = new Date().getTime()
    setCurrentQuestionIndex(() => 0)
    setCurrentDate(() => currentTime)
    setInTenMinutes(() => currentTime + TEN_MINUTES)
  }

  const handleDone = () => {
    setIsDone(() => true)
  }

  useEffect(() => {
    const persistCurrentQuestionIndex = localStorage.getItem('currentQuestionIndex')
    if (persistCurrentQuestionIndex) {
      setCurrentQuestionIndex(() => parseInt(persistCurrentQuestionIndex))
    } else {
      localStorage.setItem('currentQuestionIndex', currentQuestionIndex)
    }
  }, [])

  return (
    <MainLayout>
      {!isDone ?
        <FormStepper
          questions={questionsData}
          durationMinutes={inTenMinutes}
          onDone={handleDone}
          currentQuestionIndex={currentQuestionIndex}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
        />
        :
        <DonePage onReset={handleReset} />
      }
    </MainLayout>
  )
}

export default App
