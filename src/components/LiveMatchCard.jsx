import chelseaLogo from '../../public/images/FC_Chelsea_Logo.png'
import leicesterLogo from '../../public/images/FC_Leicester_City_Logo.png'


const LiveMatchCard = () => {
  return (
    <div className="w-96 flex flex-col gap-3 mb-4">
        <div className="flex justify-between items-center">
            <h1 className="text-[22px] font-medium font-[Roboto] text-[#212121]">Live Matches</h1>
            <div className="flex gap-4">
                <button className="cursor-pointer">
                    <i className="ri-arrow-left-line text-[24px]"></i>
                </button>
                <button className="cursor-pointer">
                    <i className="ri-arrow-right-line text-[24px] text-[#F14B51]"></i>
                </button>
            </div>
        </div>

        <div className="w-full border border-[#F3B91A] shadow-sm rounded-xl p-4 flex flex-col gap-2">
            <div className='flex justify-evenly'>
                <div className='w-12 h-12 '>
                    <img src={chelseaLogo} alt="chelseaLogo" className='w-full' />
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <p className='text-[12px] text-[#212121]/50 font-medium font-[Roboto]'>Premier League</p>
                    <p className='text-[24px] font-extrabold font-[Orbitron]'>1 : 2</p>
                </div>
                <div className='w-12 h-12 '>
                    <img src={leicesterLogo} alt="leicesterLogo" className='w-full'/>
                </div>
            </div>

            <div className='flex items-center gap-1 justify-center'>
                <div className='w-2 h-2 rounded-full bg-[#ff824d]'></div>
                <p className='text-xs font-medium text-[#212121]/50'>49:30</p>
            </div>

            <div className="flex justify-evenly">
                <button className="border border-[#0D0D0D] h-8.5 w-20.75 rounded-md bg-white ">1.8</button>
                <button className="border border-[#0D0D0D] w-20.75  rounded-md bg-white ">2.1</button>
                <button className="border border-[#0D0D0D] w-20.75  rounded-md bg-white ">1.3</button>
            </div>
        </div>
    </div>

  )
}

export default LiveMatchCard