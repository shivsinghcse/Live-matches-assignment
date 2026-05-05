import LeftPanel from "./LeftPanel"
import RightPannel from "./RightPannel"

const Main = () => {
  return (
    <div className="absolute top-19 left-24 right-0 py-2 px-6 flex gap-8 -z-1000">
        <LeftPanel />
        <RightPannel/>
        
    </div>
  )
}

export default Main