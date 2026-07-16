interface LogoIconProps {
  className?: string
}

export default function LogoIcon({ className = "" }: LogoIconProps) {
  return (
    <img
      src="/logos/harbor-finance-logo.png"
      alt="Harbor Finance"
      className={className}
      draggable={false}
    />
  )
}