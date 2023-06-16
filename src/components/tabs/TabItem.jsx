export const TabItem = ({ index, currentIndex, isPasted = false }) => {
    return (
        <div className={`h-2 w-full rounded-lg ${currentIndex === index ? 'bg-indigo-400' : (isPasted ? 'bg-indigo-200' : 'bg-white')}`}></div>
    )
}