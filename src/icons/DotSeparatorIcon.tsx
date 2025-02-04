interface DotSeparatorIconProps {
    style?: { display: string }
}

export const DotSeparatorIcon = ({style}: DotSeparatorIconProps) => (
    <svg style={style} xmlns="http://www.w3.org/2000/svg" width="3" height="4" viewBox="0 0 3 4" fill="currentColor">
        <circle cx="1.5" cy="2" r="1.5" fill="white" fillOpacity="0.15"/>
    </svg>
)
