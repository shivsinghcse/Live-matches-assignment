import chelseaLogo from '../../public/images/FC_Chelsea_Logo.png'
import leicesterLogo from '../../public/images/FC_Leicester_City_Logo.png'


const TrendingCard = () => {
  return (
    <div className="w-96">
            <div className="flex justify-between items-center">
                <h1 className="text-[18px] font-medium font-[Roboto] text-[#212121]">Trending Now</h1>
                <div className="flex gap-4">
                    <button className="cursor-pointer">
                        <i className="ri-arrow-left-line text-[24px] "></i>
                    </button>
                    <button className="cursor-pointer">
                        <i className="ri-arrow-right-line text-[24px] text-[#212121]/40"></i>
                    </button>
                </div>
            </div>
    
            <div className="w-full my-4 border border-[#F3B91A] rounded-xl p-4 flex flex-col gap-3 shadow-sm">
                <div className='flex justify-evenly'>
                    <div className='w-12 h-12'>
                        <img src={chelseaLogo} alt="chelseaLogo" className='w-full' />
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='text-[12px] text-[#212121]/50 font-medium font-[Roboto]'>Premier League</p>
                        <p className='text-[24px] font-extrabold font-[Orbitron]'>1 : 2</p>
                    </div>
                    <div className='w-12 h-12'>
                        <img src={leicesterLogo} alt="leicesterLogo" className='w-full' />
                    </div>
                </div>
    
                <div className='flex justify-around'>
                    <p className='text-[12px] text-[#0d0d0d] font-bold font-[Roboto]'>Chelsea</p>
                    <div className='flex items-center gap-1 justify-center ml-2'>
                        <div className='w-2 h-2 rounded-full bg-[#ff824d]'></div>
                        <p className='text-xs font-medium text-[#212121]/50'>49:30</p>
                    </div>
                    <p className='text-[12px] text-[#0d0d0d] font-bold font-[Roboto]'>Leicester C</p>
                </div>
    
                {/* <div className="flex justify-evenly">
                    <button className="border py-1 px-8 rounded-lg ">1.8</button>
                    <button className="border py-1 px-8 rounded-lg ">2.1</button>
                    <button className="border py-1 px-8 rounded-lg ">1.3</button>
                </div> */}
            </div>
        </div>
  )
}

export default TrendingCard