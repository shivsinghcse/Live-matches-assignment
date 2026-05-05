
import LeaugeTable from './LeagueTable'
import LiveMatchCard from './LiveMatchCard'
import TrendingCard from './TrendingCard'

const leagueData = [
  {
    id: 1,
    flag: 'images/2.png',
    name: 'Premier League',
    location: 'England'
  },
  {
    id: 2,
    flag: './images/1.png',
    name: 'La Liga',
    location: 'Spain'
  }
]

const LeftPanel = () => {
  return (
    <div className='flex flex-col'>
    <LiveMatchCard />
    {
      leagueData.map((league) => {
        return (
          <LeaugeTable key={league.id} data={league}/>
        )
      })
    }
    <TrendingCard />
    </div>
  )
}

export default LeftPanel