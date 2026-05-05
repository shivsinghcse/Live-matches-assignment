// ─── THEME COLORS ─────────────────────────────────────────────────────────────
export const darkTheme = {
  sidebar: '#0d1b2a',
  panel:   '#131e2b',
  bg:      '#0a1520',
  card:    '#1a2535',
  text:    '#e2e8f0',
  text2:   '#64748b',
  accent:  '#3b82f6',
  border:  '#1e3048',
};

export const lightTheme = {
  sidebar: '#1a1a2e',
  panel:   '#ffffff',
  bg:      '#f1f5f9',
  card:    '#ffffff',
  text:    '#1e293b',
  text2:   '#64748b',
  accent:  '#f59e0b',
  border:  '#e2e8f0',
};

// ─── SIDEBAR ICONS ────────────────────────────────────────────────────────────
export const sidebarIcons = ['☰', '⚡', '👥', '📊', '⚽', '🏆', '🎯', '📱', '🔔', '⚙️'];

// ─── NAV ITEMS ────────────────────────────────────────────────────────────────
export const navItems = ['Live Match', 'Scorecard', 'Commentary', 'Players', 'My Matches'];

// ─── PREMIER LEAGUE DATA ──────────────────────────────────────────────────────
export const premierLeagueData = [
  { team: 'Liverpool',   dot: '#c8102e', g: 2, l: 2, ga: 21, gd: 14, pts: 32 },
  { team: 'Man United',  dot: '#da291c', g: 2, l: 2, ga: 24, gd: 9,  pts: 23 },
  { team: 'Vilaceal',    dot: '#f5d000', g: 2, l: 7, ga: 5,  gd: 30, pts: 34 },
  { team: 'Vilanol',     dot: '#00529f', g: 1, l: 2, ga: 30, gd: 34, pts: 23 },
];

// ─── LA LIGA DATA ─────────────────────────────────────────────────────────────
export const laLigaData = [
  { team: 'Liverpool',      dot: '#c8102e', g: 4, l: 7, ga: 31, gd: 14, pts: 52 },
  { team: 'Leicester City', dot: '#0053a0', g: 2, l: 7, ga: 14, gd: 20, pts: 31 },
  { team: 'Vilaceal',       dot: '#f5d000', g: 4, l: 7, ga: 30, gd: 34, pts: 23 },
  { team: 'Vilanol',        dot: '#004170', g: 2, l: 2, ga: 10, gd: 11, pts: 25 },
];

// ─── LATEST MATCHES ───────────────────────────────────────────────────────────
export const latestMatches = [
  {
    id: 1,
    home: 'Barcelona',
    away: 'Real Madrid',
    homeBg: 'linear-gradient(135deg,#a50021,#004d98)',
    awayBg: 'linear-gradient(135deg,#fff9c4,#d4af37)',
    awayColor: '#000',
    time: '5:00 PM',
    location: 'Spain',
    liked: true,
    featured: true,
  },
  {
    id: 2,
    home: 'NY Yorka',
    away: 'NY Yorka',
    homeBg: 'linear-gradient(135deg,#1a237e,#283593)',
    awayBg: 'linear-gradient(135deg,#4a148c,#6a1b9a)',
    awayColor: '#fff',
    time: '5:00 PM',
    location: 'London',
    liked: true,
  },
  {
    id: 3,
    home: 'NY Yorka',
    away: 'NY Yorka',
    homeBg: 'linear-gradient(135deg,#b71c1c,#c62828)',
    awayBg: 'linear-gradient(135deg,#e65100,#ef6c00)',
    awayColor: '#fff',
    time: '5:00 PM',
    location: 'London',
    liked: true,
  },
  {
    id: 4,
    home: 'NY Yorka',
    away: 'NY Yorka',
    homeBg: 'linear-gradient(135deg,#1b5e20,#2e7d32)',
    awayBg: 'linear-gradient(135deg,#006064,#00838f)',
    awayColor: '#fff',
    time: '5:00 PM',
    location: 'London',
    liked: true,
  },
  {
    id: 5,
    home: 'NY Yorka',
    away: 'NY Yorka',
    homeBg: 'linear-gradient(135deg,#4a148c,#6a1b9a)',
    awayBg: 'linear-gradient(135deg,#880e4f,#ad1457)',
    awayColor: '#fff',
    time: '5:00 PM',
    location: 'London',
    liked: true,
  },
];
