import playerPhoto from '../../public/images/player.png'
const HeroBanner = () => {
  return (
    <div className='relative w-full h-83.75 bg-[#F3B91A] rounded overflow-hidden shadow-sm'>
        <img 
            src="./images/path56.png" 
            alt="team-logo"
            className='absolute left-10 top-1/2 -translate-y-1/2 w-[240.85px] rotate-15 '
         />

         <img 
            src="./images/Rectangle.png" 
            alt="team-logo"
            className='absolute right-0 bottom-0 h-83 w-102.25'
         />

         <img 
            src={playerPhoto} 
            alt="team-logo"
            className='absolute left-1 bottom-0 top-6 w-[224.22px]'
         />

         <div className='absolute right-24 bottom-8 space-y-4'>
            <div>
                <h1 className='text-[29.33px] font-medium text-white font-[Poppins]'>Up To $50 </h1>
                <h1 className='text-[32.27px] font-medium text-white font-[Poppins]'>Free Matched</h1>
            </div>
            <button className=' bg-white py-2.75 px-13.75 rounded-[100px] space-x-2 text-[#F3B91A] flex items-center hover:cursor-pointer active:scale-95 transition'>
                <label className='font-medium text-[18px] font-[Roboto]'>Join Now</label>
                <i className='ri-arrow-right-s-line text-[24px]'></i>
            </button>
         </div>

         <div className="relative text-white ml-70 mt-16">
            <h1 className="text-[40px] font-extrabold font-[Roboto] text-white">BARCELONA</h1>

            <div className="absolute left-46">
                <img src="./images/Vector 3.png" alt="vector" className='-mt-3 ml-2.5'/>
                <img src="./images/Vector 1.png" alt="vector" className='-mt-11 ml-5.5'/>
                <img src="./images/Vector 2.png" alt="vector" className='-mt-11 ml-20'/>
            </div>

 
            <h2 className="absolute left-49 top-16 text-[40px] font-extrabold font-[Roboto] text-white">
                REAL MADRID
            </h2>

  
            <div className="flex items-center gap-3 mt-20 ml-28">
                <img src="/images/Group1.png" className="w-9 h-9" />
                <span className='font-medium text-[14px] text-white font-[Roboto]'>vs</span>
                <img src="/images/Group2.png" className="w-9 h-9" />
            </div>

  
            <div className="flex gap-6 mt-5 ml-22">
                <div className='space-x-2'>
                    <i className="ri-time-line text-[24px]"></i>
                    <label className='text-[17px] font-medium font-[Roboto]'>5:00 PM</label>
                </div>
                <div className='space-x-2'>
                    <i className="ri-map-pin-line text-[24px]"></i>
                    <label className='text-[17px] font-medium font-[Roboto]'>Spain</label>
                </div>
            </div>
</div>

    </div>
  )
}

export default HeroBanner