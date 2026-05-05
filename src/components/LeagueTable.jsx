
const LeaugeTable = ({data}) => {
  const {flag, name, location} = data;
  const premierLeagueTable = [
  {
    id: 1,
    team: "Liverpool",
    logo: "/images/team1.png",
    d: 6,
    l: 2,
    ga: 21,
    gd: 16,
    pts: 33
  },
  {
    id: 2,
    team: "Man United",
    logo: "/images/team2.png",
    d: 3,
    l: 3,
    ga: 24,
    gd: 9,
    pts: 33
  },
  {
    id: 3,
    team: "Leicester City",
    logo: "/images/team3.png",
    d: 2,
    l: 5,
    ga: 21,
    gd: 10,
    pts: 32
  },
  {
    id: 4,
    team: "Villareal",
    logo: "/images/team4.png",
    d: 8,
    l: 2,
    ga: 10,
    gd: 16,
    pts: 32
  },
  {
    id: 5,
    team: "Villareal",
    logo: "/images/team4.png",
    d: 8,
    l: 2,
    ga: 10,
    gd: 16,
    pts: 32
  }
];
  return (
    <div className="flex flex-col gap-2.5 mb-4">
        <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
                <img src={flag} alt="team-flag" className="w-6 h-6" />
                <h1 className="text-[16px] font-semibold font-[Roboto] text-[#212121]">{name}</h1>
                <p className="text-[12px] text-[#AAAAAA] font-[Roboto] font-normal">{location}</p>
            </div>
            <button>
                <i className="ri-arrow-right-s-line text-[16px] text-[#212121]"></i>
            </button>
        </div>

        <div className="w-full border border-yellow-400 rounded-xl font-[Roboto] text-[12px] shadow-sm">
            <table className="w-full border-collapse">
    
                <thead>
                <tr className="text-[#212121] text-left font-medium border-b">
                    <th className="px-4.25 py-2 ">Team</th>
                    <th className="px-4.25 py-2 text-center">D</th>
                    <th className="px-4.25 py-2 text-center">L</th>
                    <th className="px-4.25 py-2 text-center">Ga</th>
                    <th className="px-4.25 py-2 text-center">Gd</th>
                    <th className="px-4.25 py-2 text-center">Pts</th>
                </tr>
                </thead>

    <tbody>
      {premierLeagueTable.map(({id, team, logo, d, l, ga, gd, pts}) => (
        <tr key={id} className="border-b last:border-none font-normal text-[#212121] font-[Source Sans 3]">
          
          <td className="px-4.25 py-1.5 ">
            <div className="flex items-center gap-2">
              <img src={logo} alt="logo" className="w-4 h-4 object-cover" />
              <span>{team}</span>
            </div>
          </td>

          <td className="text-center ">{d}</td>
          <td className="text-center">{l}</td>
          <td className="text-center">{ga}</td>
          <td className="text-center">{gd}</td>
          <td className="text-center">{pts}</td>
        </tr>
      ))}
    </tbody>

  </table>
</div>
    </div>
  )
}

export default LeaugeTable