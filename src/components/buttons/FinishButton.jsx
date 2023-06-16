export const FinishButton = ({ onClick, isDisabled = true }) => {
    const handleClick = () => {
        if (!isDisabled) {
            onClick()
        }
    }
    return (
        <button disabled={isDisabled} className={`rounded-full text-center px-10 py-3 text-white w-full ${isDisabled ? 'bg-violet-300 cursor-not-allowed' : 'bg-violet-500'}`} onClick={handleClick}>Finish</button>
    )
}