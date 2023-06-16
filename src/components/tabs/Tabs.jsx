import { TabItem } from "./TabItem"

export const Tabs = ({ length = 1, current = 0 }) => {
    const TabItems = () => {
        return <>{Array.from(Array(length), (_, idx) => (
            <TabItem key={idx} currentIndex={current} index={idx} isPasted={current > idx} />
        ))}
        </>
    }
    return (
        <div className="flex gap-1">
            {length <= 1 ? null : <TabItems />}
        </div>
    )
}