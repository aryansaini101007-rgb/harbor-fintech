interface LogoIconProps {
  className?: string
  primaryColor?: string
  accentColor?: string
}

export default function LogoIcon({ className }: LogoIconProps) {
  return (
    <img 
      src="/logos/company-logo-header.png" 
      alt="Harbor Finance Logo"
      className={className}
      style={{
        width: '100%',
        height: 'auto',
        maxWidth: '200px',
        display: 'block'
      }}
    />
  )
}