import { useId } from 'react'

// Emoji flags (🇨🇦, 🇬🇧, etc.) render as plain two-letter text on Windows browsers
// (Chrome/Firefox/Edge on Windows have no color "flag" glyphs — they fall back to
// showing the regional-indicator letters, e.g. "CA" instead of a Canada flag).
// These inline SVGs render identically on every platform.
export type FlagCode =
  | 'usa' | 'uk' | 'gb' | 'canada' | 'germany' | 'australia' | 'ireland'
  | 'france' | 'uae' | 'brazil' | 'india' | 'georgia'
  | 'newzealand' | 'singapore' | 'italy' | 'japan'

interface FlagIconProps {
  code: FlagCode
  className?: string
  title?: string
}

function FlagShape({ code }: { code: FlagCode }) {
  switch (code) {
    case 'usa':
      return (
        <>
          <rect width="28" height="20" fill="#fff" />
          {[0, 2, 4, 6, 8, 10, 12].map((y) => (
            <rect key={y} y={y} width="28" height="1.54" fill="#B22234" />
          ))}
          <rect width="12" height="10.8" fill="#3C3B6E" />
        </>
      )
    case 'uk':
    case 'gb':
      return (
        <>
          <rect width="28" height="20" fill="#00247D" />
          <path d="M0 0 L28 20 M28 0 L0 20" stroke="#fff" strokeWidth="3.4" />
          <path d="M0 0 L28 20 M28 0 L0 20" stroke="#CF142B" strokeWidth="1.3" />
          <path d="M14 0 V20 M0 10 H28" stroke="#fff" strokeWidth="5.6" />
          <path d="M14 0 V20 M0 10 H28" stroke="#CF142B" strokeWidth="2.3" />
        </>
      )
    case 'canada':
      return (
        <>
          <rect width="28" height="20" fill="#fff" />
          <rect width="7" height="20" fill="#D80621" />
          <rect x="21" width="7" height="20" fill="#D80621" />
          <path d="M14 4 L15.4 7.4 L18.6 6.4 L17.2 9.4 L20 10.4 L17.2 11.6 L18 15 L15 13.6 L14 16.6 L13 13.6 L10 15 L10.8 11.6 L8 10.4 L10.8 9.4 L9.4 6.4 L12.6 7.4 Z" fill="#D80621" />
        </>
      )
    case 'germany':
      return (
        <>
          <rect width="28" height="6.67" y="0" fill="#000" />
          <rect width="28" height="6.67" y="6.67" fill="#DD0000" />
          <rect width="28" height="6.67" y="13.33" fill="#FFCE00" />
        </>
      )
    case 'australia':
      return (
        <>
          <rect width="28" height="20" fill="#00247D" />
          <path d="M0 0 L11 8 M11 0 L0 8" stroke="#fff" strokeWidth="1.6" />
          <path d="M5.5 0 V8 M0 4 H11" stroke="#fff" strokeWidth="2.4" />
          <path d="M5.5 0 V8 M0 4 H11" stroke="#CF142B" strokeWidth="1" />
          {[[20, 4], [23, 9], [19, 13], [24, 15], [16, 6]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={i === 4 ? 0.7 : 1} fill="#fff" />
          ))}
        </>
      )
    case 'ireland':
      return (
        <>
          <rect width="9.33" height="20" fill="#169B62" />
          <rect x="9.33" width="9.33" height="20" fill="#fff" />
          <rect x="18.67" width="9.33" height="20" fill="#FF883E" />
        </>
      )
    case 'france':
      return (
        <>
          <rect width="9.33" height="20" fill="#0055A4" />
          <rect x="9.33" width="9.33" height="20" fill="#fff" />
          <rect x="18.67" width="9.33" height="20" fill="#EF4135" />
        </>
      )
    case 'uae':
      return (
        <>
          <rect width="28" height="6.67" fill="#00732F" />
          <rect y="6.67" width="28" height="6.67" fill="#fff" />
          <rect y="13.33" width="28" height="6.67" fill="#000" />
          <rect width="8" height="20" fill="#FF0000" />
        </>
      )
    case 'brazil':
      return (
        <>
          <rect width="28" height="20" fill="#009C3B" />
          <path d="M14 2 L26 10 L14 18 L2 10 Z" fill="#FFDF00" />
          <circle cx="14" cy="10" r="4.4" fill="#002776" />
        </>
      )
    case 'india':
      return (
        <>
          <rect width="28" height="6.67" fill="#FF9933" />
          <rect y="6.67" width="28" height="6.67" fill="#fff" />
          <rect y="13.33" width="28" height="6.67" fill="#138808" />
          <circle cx="14" cy="10" r="2.2" fill="none" stroke="#000080" strokeWidth="0.4" />
        </>
      )
    case 'georgia':
      return (
        <>
          <rect width="28" height="20" fill="#fff" />
          <rect x="11.5" width="5" height="20" fill="#FF0000" />
          <rect y="7.5" width="28" height="5" fill="#FF0000" />
          <path d="M4 3v4M2 5h4M22 3v4M20 5h4M4 13v4M2 15h4M22 13v4M20 15h4" stroke="#FF0000" strokeWidth="1.2" />
        </>
      )

    case 'newzealand':
      return (
        <>
          <rect width="28" height="20" fill="#00247D" />
          <path d="M0 0L11 8M11 0L0 8" stroke="#fff" strokeWidth="1.6" />
          <path d="M5.5 0V8M0 4H11" stroke="#fff" strokeWidth="2.4" />
          <path d="M5.5 0V8M0 4H11" stroke="#CF142B" strokeWidth="1" />
          <circle cx="19" cy="5" r="1.2" fill="#CC142B" stroke="#fff" strokeWidth=".5" />
          <circle cx="23" cy="9" r="1.2" fill="#CC142B" stroke="#fff" strokeWidth=".5" />
          <circle cx="18" cy="13" r="1.2" fill="#CC142B" stroke="#fff" strokeWidth=".5" />
          <circle cx="24" cy="15" r="1.2" fill="#CC142B" stroke="#fff" strokeWidth=".5" />
        </>
      )

    case 'singapore':
      return (
        <>
          <rect width="28" height="10" fill="#EF3340" />
          <rect y="10" width="28" height="10" fill="#fff" />
          <circle cx="7" cy="5" r="3.3" fill="#fff" />
          <circle cx="8.5" cy="5" r="2.7" fill="#EF3340" />
        </>
      )

    case 'italy':
      return (
        <>
          <rect width="9.33" height="20" fill="#009246" />
          <rect x="9.33" width="9.33" height="20" fill="#fff" />
          <rect x="18.67" width="9.33" height="20" fill="#CE2B37" />
        </>
      )

    case 'japan':
      return (
        <>
          <rect width="28" height="20" fill="#fff" />
          <circle cx="14" cy="10" r="5" fill="#BC002D" />
        </>
      )
    default:
      return <rect width="28" height="20" fill="#ccc" />
  }
}

export default function FlagIcon({ code, className, title }: FlagIconProps) {
  const clipId = useId()
  return (
    <svg
      viewBox="0 0 28 20"
      className={className}
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <clipPath id={clipId}>
        <rect width="28" height="20" rx="2.5" />
      </clipPath>
      <g clipPath={`url(#${clipId})`}>
        <FlagShape code={code} />
      </g>
      <rect width="28" height="20" rx="2.5" fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth="0.6" />
    </svg>
  )
}
