import { QuestionCard } from "../cards/QuestionCard"
import { Tabs } from "../tabs/Tabs"
import { _renderNumeric } from "../../utils/number"
import { Timer } from "../Timer"
import { useEffect, useState } from "react"

export const FormStepper = ({ questions, durationMinutes, onDone, currentQuestionIndex, setCurrentQuestionIndex }) => {
  const [persistAnswer, setPersistAnswer] = useState(null)

  const handleNextButton = () => {
    setCurrentQuestionIndex((current) => current + 1)
    localStorage.setItem('currentQuestionIndex', currentQuestionIndex + 1)
  }

  const handleDone = () => {
    onDone()
  }

  const handleFinishButton = () => {
    handleDone()
  }

  const QuestionsSection = () => {
    return <QuestionCard
      question={questions[currentQuestionIndex]?.question}
      answers={questions[currentQuestionIndex]?.answers}
      label={`Q${currentQuestionIndex + 1}`}
      onNext={handleNextButton}
      onFinish={handleFinishButton}
      index={currentQuestionIndex}
      persistAnswer={persistAnswer}
    />
  }

  useEffect(() => {
    const persistenceAnswer = localStorage.getItem(questions[currentQuestionIndex]?.question)
    if (persistenceAnswer) {
      setPersistAnswer(() => persistenceAnswer)
    } else {
      setPersistAnswer(() => null)
    }
  }, [currentQuestionIndex])

  return (
    <div className="flex flex-col gap-5 w-full relative">
      <div className="mt-5">
        <Tabs length={questions?.length} current={currentQuestionIndex} />
      </div>
      <Timer targetDate={durationMinutes} onDone={handleDone} />
      <div className="h-full">
        <QuestionsSection />
      </div>
    </div>
  )
}