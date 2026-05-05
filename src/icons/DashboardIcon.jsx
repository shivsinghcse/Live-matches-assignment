const DashboardIcon = ({size= 24, color='currentColor', className=""}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 28 28" fill="none" className={className}>
            <path
                d="M3.5 15.1667H12.8333V3.5H3.5V15.1667ZM3.5 24.5H12.8333V17.5H3.5V24.5ZM15.1667 24.5H24.5V12.8333H15.1667V24.5ZM15.1667 3.5V10.5H24.5V3.5H15.1667Z"
                fill={color}
            />
        </svg>
    )
}

export default DashboardIcon