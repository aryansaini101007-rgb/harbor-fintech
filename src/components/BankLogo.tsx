import { useState } from 'react'
import { Landmark } from 'lucide-react'

interface BankLogoProps {
  initials: string
  color: string
  textColor?: string
  size?: number
  showIcon?: boolean
  domain?: string
  name?: string
  /** Official logo asset path (e.g. /logos/bank-sbi.png). Takes priority over live favicon lookup. */
  logo?: string
}

// Renders a bank's real logo inside a white badge.
// Priority order:
//   1. Official licensed logo asset from /public/logos (passed as `logo`) — used
//      for full brand compliance and guaranteed consistent quality.
//   2. Live favicon lookup from the bank's own domain (fetched via a logo-lookup
//      API) — used as a graceful fallback when no local asset is available.
//   3. Brand-colored initials badge — final fallback so nothing ever breaks,
//      even offline or if both image sources fail.
export default function BankLogo({ initials, color, textColor = '#ffffff', size = 40, showIcon = false, domain, name, logo }: BankLogoProps) {
  const [localFailed, setLocalFailed] = useState(false)
  const [remoteFailed, setRemoteFailed] = useState(false)

  const badgeStyle = {
    width: size,
    height: size,
    boxShadow: `0 6px 16px ${color}40, inset 0 1px 0 rgba(255,255,255,0.6)`,
    border: '2px solid rgba(255,255,255,0.9)',
  }

  if (logo && !localFailed) {
    return (
      <span
        className="relative rounded-full flex items-center justify-center shrink-0 bg-white overflow-hidden"
        style={badgeStyle}
      >
        <img
          src={logo}
          alt={name ?? initials}
          title={name ?? initials}
          loading="lazy"
          onError={() => setLocalFailed(true)}
          className="object-contain"
          style={{ width: size * 0.8, height: size * 0.8 }}
        />
      </span>
    )
  }

  if (domain && !remoteFailed) {
    return (
      <span
        className="relative rounded-full flex items-center justify-center shrink-0 bg-white overflow-hidden"
        style={badgeStyle}
      >
        <img
          src={`https://logo.clearbit.com/${domain}?size=128`}
          alt={name ?? initials}
          title={name ?? initials}
          loading="lazy"
          onError={() => setRemoteFailed(true)}
          className="object-contain"
          style={{ width: size * 0.72, height: size * 0.72 }}
        />
      </span>
    )
  }

  return (
    <span
      className="relative rounded-full flex items-center justify-center shrink-0 font-bold"
      style={{
        width: size,
        height: size,
        background: `linear-gradient(155deg, ${color}, ${color}cc)`,
        color: textColor,
        fontSize: size * 0.3,
        letterSpacing: '-0.01em',
        boxShadow: `0 6px 16px ${color}55, inset 0 1px 0 rgba(255,255,255,0.35)`,
        border: '2px solid rgba(255,255,255,0.9)',
      }}
      title={name ?? initials}
    >
      {showIcon ? <Landmark style={{ width: size * 0.42, height: size * 0.42 }} /> : initials}
    </span>
  )
}
