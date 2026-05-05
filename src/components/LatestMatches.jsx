import Matchrow from "./Matchrow"

const LiveMatches = () => {
    const matchData = [
        {
            homeIcon: './images/Group1.png',
            home: 'Barcelona',
            awayIcon: './images/Group2.png',
            away: 'Real Mardid',
            time: '5:00 PM',
            location: 'Spain',
            isActive: true
        }, 
        {
            homeIcon: './images/a.png',
            home: 'NV Yorks',
            awayIcon: './images/b.png',
            away: 'NV Yorks',
            time: '5:00 PM',
            location: 'London',
            isActive: false
        }, 
        {
            homeIcon: './images/cc.jpg',
            home: 'NV Yorks',
            awayIcon: './images/Group1.png',
            away: 'NV Yorks',
            time: '5:00 PM',
            location: 'London',
             isActive: false
        }, 
        {
            homeIcon: './images/ee.jpg',
            home: 'NV Yorks',
            awayIcon: './images/ff.jpg',
            away: 'NV Yorks',
            time: '5:00 PM',
            location: 'London',
             isActive: false
        }, 
        {
            homeIcon: './images/ee.jpg',
            home: 'NV Yorks',
            awayIcon: './images/ff.jpg',
            away: 'NV Yorks',
            time: '5:00 PM',
            location: 'London',
             isActive: false
        }
    ]
  return (
    <div>
        <div className="flex justify-between items-center mb-4 pr-2">
            <h1 className="text[18px] font-medium font-[Roboto] text-[#212121]">Latest Matches</h1>
            <div className="flex gap-6 items-center">
                <p className="text[18px] font-normal font-[Roboto] text-[#212121]">Filter :</p>
            <div className="relative inline-block text-[13px] font-[Roboto] font-normal">
                <select className="appearance-none border py-1 px-4 pr-10 border-[#F3B91A] rounded-2xl text-[#F3B91A] bg-white focus:outline-0">
                    <option value="football">Football</option>
                    <option value="cricket">Cricket</option>
                </select>

                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#F3B91A]">
                    <i className="ri-arrow-down-s-line text-[16px]"></i>
                </div>
            </div>

                <div className="relative inline-block text-[13px] font-[Roboto] font-normal">
                <select className="appearance-none border py-1 px-4 pr-10 border-[#F3B91A] rounded-2xl text-[#F3B91A] bg-white focus:outline-0">
                    <option value="anywhere">Anywhere</option>
                    <option value="spain">Spain</option>
                </select>

                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#F3B91A]">
                    <i className="ri-arrow-down-s-line text-[16px]"></i>
                </div>
            </div>
                <button className="font-normal text-[18px] font-[Roboto] cursor-pointer hover:text-[#F3B91A]">View All</button>
            </div>
        </div>

        
        <div className="flex flex-col gap-4">
            {
                matchData.map((match, index) => {
                    return(
                        <Matchrow key={index} data={match}/>
                    )
                })
            }
        </div>
        
    </div>
  )
}

export default LiveMatches