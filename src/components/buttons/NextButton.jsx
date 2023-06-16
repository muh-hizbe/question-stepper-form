export const NextButton = ({ onClick, isDisabled = true }) => {
    const handleClick = () => {
        if (!isDisabled) {
            onClick()            
        }
    }
    return (
        <button disabled={isDisabled} className={`rounded-full text-center px-10 py-3 text-white w-full ${isDisabled ? 'bg-indigo-200 cursor-not-allowed' : 'bg-indigo-500'}`} onClick={handleClick}>Next</button>
    )
}