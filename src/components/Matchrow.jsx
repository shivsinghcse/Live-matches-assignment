
const Matchrow = ({data}) => {
    const {homeIcon, home, awayIcon, away, time, location, isActive} = data
    
  return (
    <div className={`${isActive? 'bg-[#F3B91A] border-0': 'bg-white border border-[#F3B91A]'} py-3.75 px-12 rounded-[10px] flex items-center justify-between gap-10 shadow-sm`}>
        <div className="flex items-center gap-10 w-[35%]">
            <div className="flex items-center gap-5">
                <img src={homeIcon} alt="home-team" className="w-11.5 h-11.5 rounded-full border border-[#aba9a9] object-cover"/>
                <p className={`${isActive ? 'text-white' : 'text-black'} text-[17px] font-normal font-[Roboto]`}>{home}</p>
            </div>
            <div className={`relative w-px h-14 ${isActive? 'bg-white' : 'bg-black'} `}>
                <div className="absolute top-1/2 -translate-y-1/2  -translate-x-1/2 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs">VS</div>
            </div>
            
            <div className="flex items-center gap-5">
                <img src={awayIcon} alt="away-team" className="border border-[#aba9a9] object-cover rounded-fullw-11.5 h-11.5 rounded-full" />
                <p className={`${isActive ? 'text-white' : 'text-black'} text-[17px] font-normal font-[Roboto]`}>{away}</p>
            </div>
        </div>

        <div className={`flex items-center gap-10 ${isActive ? 'text-white' : 'text-black'}`}>
                <div className='space-x-2'>
                    <i className="ri-time-line text-[22px]"></i>
                    <label className="text-[17px] font-normal font-[Roboto]">{time}</label>
                </div>
                <div className='space-x-2'>
                    <i className="ri-map-pin-line text-[22px]"></i>
                    <label className="text-[17px] font-normal font-[Roboto]">{location}</label>
                </div>
        </div>

        <button>
            <i className="ri-heart-fill text-3xl text-red-600"></i>
        </button>
        <div className={`${isActive ? 'text-white' : 'text-black'}`}>
            
            <button className="flex items-center gap-5">
                <label className="text-[17px] font-normal font-[Roboto]">View Details</label>
                <i className="ri-arrow-right-line text-[24px]"></i>
            </button>
        </div>
    </div>
  )
}

export default Matchrow