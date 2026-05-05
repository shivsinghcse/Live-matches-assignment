const MenuIcon = ({ size = 48, color = "currentColor", bg = "#1D2B3A" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
  >
    {/* Background */}
    <rect width="48" height="48" rx="4" fill={bg} />

    {/* Lines */}
    <path
      d="M10.875 16.5H37.125"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M10.875 24H37.125"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M10.875 31.5H28.375"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default MenuIcon;