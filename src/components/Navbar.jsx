import ProfileImage from '../../public/images/profileImage.png'
const Navbar = () => {
    const navLink = [
        {
            label: 'Live Match',
            isActive: true
        },
        {
            label: 'Scorecard',
            isActive: false
        },
        {
            label: 'Commentary',
            isActive: false
        },
        {
            label: 'Players',
            isActive: false
        },
        {
            label: 'My Matches',
            isActive: false
        },
    ]

  return (
    <nav className="fixed top-0 left-24 right-0 font-[Roboto] text-[#212121] px-8 bg-[#FEF8E8] flex gap-4 items-center justify-between shadow-lg z-100">
        <div>
            <ul className="flex gap-12">
                {
                    navLink.map(({label, isActive}) => {
                        return (
                            <div className='relative' key={label}>
                                <li  className=" capitalize font-[Roboto] font-medium text-[18px] py-5.5">
                                    <a href='#'>{label}</a>
                                </li>
                                {
                                    isActive &&
                                    <div className="h-2 w-17.5 bg-[#F14B51] rounded-b-lg absolute -top-1 right-1/2 translate-x-1/2"></div>
                                }
                            </div>
                        )
                    })
                }
            </ul>
        </div>

        <div className='flex items-center gap-6'>
            <div>
                <div className="border rounded-4xl py-1.5 px-6 focus-within:outline-2 focus-within:border-0 w-100 flex justify-between  gap-2">
                    <input 
                        type="search"
                        className="border-0 focus:outline-0 flex-1  [&::-webkit-search-cancel-button]:hidden [&::-ms-clear]:hidden placeholder:text-[14px] placeholder:font-normal placeholder:text-[#212121] placeholder:font-[Roboto]"
                        placeholder="Search Matches, Players, Stats ..."
                    />
                    <button>
                        <i className="ri-search-line text-[24px] cursor-pointer"></i>
                    </button>
                </div>
            </div>
            <div className="flex gap-7.25 cursor-pointer">
                    <div className="relative">
                        <i className="ri-notification-2-line text-[24px]  "></i>
                        <div className="w-2 h-2 bg-red-500 rounded-full absolute top-1 right-0"></div>
                    </div>
                    <i className="ri-mail-line text-[24px]"></i>
                    <i className="ri-heart-line text-[24px]"></i>
            </div>

            <div className='flex gap-4 items-center'>
                <img src={ProfileImage} alt="profile-image" className='w-10 h-10 border-2 border-[#212121] object-cover rounded-full' />
                <p className='text-[18px] font-[Roboto] text-[#212121] font-medium'>Jane Doe</p>
                <button className='cursor-pointer'>
                    <i className="ri-arrow-down-s-line text-[24px]"></i>
                </button>
            </div>
        </div>
            
    </nav>
  )
}

export default Navbar