import { useEffect } from "react"
import { useCountDown } from "../hooks/useCountDown"
import { _renderNumeric } from "../utils/number"

export const Timer = ({ targetDate, onDone }) => {
    const { minutes, seconds, isDone } = useCountDown(targetDate)

    useEffect(() => {
        if (isDone) {
            onDone()
        }
    }, [isDone])

    return (
        <div className="flex items-center justify-center text-slate-700 font-semibold">
            {isDone ? 'Done Timer' :
                <>
                    {_renderNumeric(minutes)} : {_renderNumeric(seconds)} left
                </>
            }
        </div>
    )
}