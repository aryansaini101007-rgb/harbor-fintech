import { useState } from 'react'

interface AvatarProps {
  seed: number
  name: string
  size?: number
  className?: string
  ringClassName?: string
}

// Uses pravatar.cc (a free placeholder-photo service made for exactly this use
// case) so the UI shows real-looking student photos instead of "A/B/C/D"
// letter badges. If the image ever fails to load (e.g. offline), it falls
// back to the initials badge automatically — nothing breaks.
// To use your own real student photos instead, swap the `src` below for
// e.g. `/students/${seed}.jpg` and drop the files in /public/students.
export default function Avatar({ seed, name, size = 36, className = '', ringClassName = 'border-white dark:border-[#14173a]' }: AvatarProps) {
  const [failed, setFailed] = useState(false)
  const initials = name
    .split(' ')
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase()

  if (failed) {
    return (
      <span
        className={`rounded-full border-2 ${ringClassName} flex items-center justify-center text-white text-xs font-semibold shrink-0 ${className}`}
        style={{ width: size, height: size, background: 'linear-gradient(155deg, #4338CA, #6d4aff)' }}
        title={name}
      >
        {initials}
      </span>
    )
  }

  return (
    <img
      src={`/people/${seed}.png`}
      alt={name}
      title={name}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`rounded-full border-2 object-cover shrink-0 ${ringClassName} ${className}`}
      style={{ width: size, height: size }}
    />
  )
}
