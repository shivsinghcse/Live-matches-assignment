import HeroBanner from "./HeroBanner"
import LatestMatches from "./LatestMatches"

const RightPannel = () => {
  return (
     <div className="flex flex-col gap-4 w-full">
      <HeroBanner />
      <LatestMatches />
     </div>
  )
}

export default RightPannel