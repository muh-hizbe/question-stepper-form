import { useState } from "react"
import { questionsData } from "../../data/question"
import { NextButton } from "../buttons/NextButton"
import { FinishButton } from "../buttons/FinishButton"

export const QuestionCard = ({ label = "Q", question, answers = [], index, onNext, onFinish, persistAnswer }) => {
    const [selectedAnswer, setSelectedAnswer] = useState(persistAnswer || null)

    const handleChange = (e) => {
        setSelectedAnswer(() => e?.target?.value)
        localStorage.setItem(question, e?.target?.value)
    }

    const handleNext = () => {
        onNext()
    }

    const handleFinish = () => {
        localStorage.setItem(question, selectedAnswer)
        onFinish()
    }

    return (
        <div className="flex flex-col md:flex-row gap-5 w-full relative h-full">
            <div className="w-full md:w-1/2">
                <div className="rounded-lg p-5 bg-white flex flex-col gap-2">
                    <h1 className="text-4xl font-semibold text-slate-400">{label}</h1>
                    <p className="text-xl text-slate-600">
                        {question}
                    </p>
                    <div className="flex flex-col gap-1">
                        {answers?.length < 1 ? null : answers?.map((answer, idx) => (
                            <div key={idx} className="flex accent-purple-500 items-center gap-1">
                                <input type="radio" id={answer} value={answer} checked={selectedAnswer === answer} onChange={handleChange}
                                    className="cursor-pointer"
                                />
                                <label htmlFor={answer}>
                                    <div className="flex items-center text-xl text-slate-500">
                                        {answer}
                                    </div>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full md:w-1/2 absolute md:relative md:mt-5 bottom-5">
                {(index < (questionsData?.length - 1)) ?
                    <NextButton onClick={handleNext} isDisabled={!selectedAnswer} />
                    :
                    <FinishButton onClick={handleFinish} isDisabled={!selectedAnswer} />
                }
            </div>
        </div>
    )
}