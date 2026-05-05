import * as Icons from "../icons";


const Sidebar = () => {
    const menu = [
        {name: 'Dashboard', icon: 'DashboardIcon'},
        {name: 'Users', icon: 'UserIcon'},
        {name: 'Charts', icon: 'ChartIcon'},
        {name: 'Football', icon: 'GlobeIcon'},
        {name: 'Soccer-ball', icon: 'EditIcon'},
        {name: 'Shuttelcock', icon: 'Shuttelcock'},
        {name: 'PingPong', icon: 'PingPong'},
        {name: 'CricketBall', icon: 'CricketBall'},
        {name: 'TennisBall', icon: 'TennisBall'},
        {name: 'BasketBall', icon: 'BasketBall'},
    ]

    return (
        <div className="fixed top-0 left-0 w-25 bg-[#F3B91A]/10 h-screen flex flex-col items-center">
            <div className="h-18 border-b border-[#0D0D0D] flex items-center justify-center px-6">
                <Icons.MenuIcon bg={'#F3B91A'} color="white"/>
            </div>

            <div className="flex flex-col items-center justify-between flex-1 py-6 ">
                <div className="space-y-8">
                    {
                        menu.map((item) => {
                            const Icon = Icons[item.icon];

                            return (
                                <div key={item.name} className="relative cursor-pointer">
                                    <Icon size={24} className={`${item.name === 'Football'? 'text-[#F14B51]' : ''} hover:text-[#F14B51]`}/>
                                    {
                                        item.name === 'Football' &&
                                        <div className="h-1.5 w-11.25 -mx-9 bg-[#F14B51] rotate-90 absolute top-1/2 -translate-1/2 left-0"></div>
                                    }
                                </div>    
                            )                        
                        })
                    }
                </div>
            
                <div className="px-6">
                    <button className="text-center bg-[#F3B91A] w-12.5 h-12.5 rounded-full hover:cursor-pointer transition active:scale-95">
                        <i className="ri-add-line text-[28px] text-white font-medium "></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar