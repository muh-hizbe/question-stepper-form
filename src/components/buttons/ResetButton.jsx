export const ResetButton = ({ onClick }) => {
    const handleClick = () => {
        onClick()
    }
    return (
        <button className="rounded-full text-center px-10 py-3 text-white bg-indigo-500 w-full" onClick={handleClick}>Reset</button>
    )
}