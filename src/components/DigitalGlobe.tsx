import { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const RADIUS = 1.55
const DEG = Math.PI / 180

function latLonToVec3(lat: number, lon: number, radius: number) {
  const phi = (90 - lat) * DEG
  const theta = (lon + 180) * DEG
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  )
}

// Coarse continent approximation used only to decide dot density,
// not a precise map — this keeps the globe procedural (no external texture).
function isLand(lat: number, lon: number) {
  // North America
  if (lat > 15 && lat < 75 && lon > -170 && lon < -50) {
    if (lat < 32 && lon > -100) return false
    return true
  }
  // Central America land bridge
  if (lat > 7 && lat < 20 && lon > -95 && lon < -77) return true
  // South America
  if (lat > -56 && lat < 12 && lon > -82 && lon < -35) return true
  // Europe
  if (lat > 36 && lat < 71 && lon > -10 && lon < 40) return true
  // Africa
  if (lat > -35 && lat < 37 && lon > -18 && lon < 52) {
    if (lat > 28 && lon < -6) return false
    return true
  }
  // Asia (broad)
  if (lat > 5 && lat < 77 && lon >= 40 && lon < 180) {
    if (lat < 10 && lon > 150) return false
    return true
  }
  // India subcontinent (extra density)
  if (lat > 6 && lat < 32 && lon > 68 && lon < 90) return true
  // South East Asia islands (sparse)
  if (lat > -10 && lat < 20 && lon > 95 && lon < 140 && Math.random() > 0.55) return true
  // Australia
  if (lat > -44 && lat < -10 && lon > 112 && lon < 154) return true
  // New Zealand
  if (lat > -47 && lat < -34 && lon > 166 && lon < 179) return true
  // Japan sliver
  if (lat > 30 && lat < 46 && lon > 129 && lon < 146 && Math.random() > 0.3) return true
  // UK/Ireland sliver
  if (lat > 49 && lat < 61 && lon > -11 && lon < 2) return true
  return false
}

function makeDotTexture() {
  const size = 64
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')!
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  gradient.addColorStop(0, 'rgba(255,255,255,1)')
  gradient.addColorStop(0.5, 'rgba(210,235,255,0.7)')
  gradient.addColorStop(1, 'rgba(210,235,255,0)')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, size, size)
  const texture = new THREE.CanvasTexture(canvas)
  texture.needsUpdate = true
  return texture
}

function ContinentDots() {
  const dotTexture = useMemo(() => makeDotTexture(), [])

  const positions = useMemo(() => {
    const pts: number[] = []
    const step = 1.15 // degrees — density of the sampling grid (finer = denser halftone)
    for (let lat = -80; lat <= 80; lat += step) {
      // fewer samples near poles to keep density visually even
      const lonStep = step / Math.max(0.2, Math.cos(lat * DEG))
      for (let lon = -180; lon < 180; lon += lonStep) {
        if (isLand(lat, lon)) {
          // near-zero jitter keeps the neat grid/halftone look from the reference
          const jitterLat = lat + (Math.random() - 0.5) * step * 0.15
          const jitterLon = lon + (Math.random() - 0.5) * lonStep * 0.15
          const v = latLonToVec3(jitterLat, jitterLon, RADIUS)
          pts.push(v.x, v.y, v.z)
        }
      }
    }
    return new Float32Array(pts)
  }, [])

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.024}
        map={dotTexture}
        transparent
        opacity={0.98}
        color="#7fd7ff"
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  )
}

function GraticuleLines() {
  const lines = useMemo(() => {
    const group: { points: THREE.Vector3[] }[] = []

    // latitude rings
    for (let lat = -60; lat <= 60; lat += 30) {
      const pts: THREE.Vector3[] = []
      for (let lon = -180; lon <= 180; lon += 4) {
        pts.push(latLonToVec3(lat, lon, RADIUS * 1.002))
      }
      group.push({ points: pts })
    }

    // longitude rings
    for (let lon = -180; lon < 180; lon += 30) {
      const pts: THREE.Vector3[] = []
      for (let lat = -90; lat <= 90; lat += 4) {
        pts.push(latLonToVec3(lat, lon, RADIUS * 1.002))
      }
      group.push({ points: pts })
    }

    return group
  }, [])

  return (
    <group>
      {lines.map((line, i) => {
        const geometry = new THREE.BufferGeometry().setFromPoints(line.points)
        return (
          <primitive
            key={i}
            object={new THREE.Line(
              geometry,
              new THREE.LineBasicMaterial({
                color: '#4da3ff',
                transparent: true,
                opacity: 0.16,
              })
            )}
          />
        )
      })}
    </group>
  )
}

// pairs of indices into HUB_CITIES to connect with glowing surface arcs
const ARC_PAIRS: [number, number][] = [
  [0, 1], [0, 2], [0, 6], [0, 7], [0, 8], [0, 9],
  [1, 2], [1, 4], [1, 11], [2, 4], [4, 6], [6, 7], [9, 10],
]

function SurfaceArcs() {
  const materialRef = useRef<THREE.LineBasicMaterial[]>([])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    materialRef.current.forEach((mat, i) => {
      if (mat) mat.opacity = 0.18 + (Math.sin(t * 0.6 + i * 1.3) + 1) * 0.14
    })
  })

  const arcs = useMemo(() => {
    return ARC_PAIRS.map(([a, b]) => {
      const from = latLonToVec3(HUB_CITIES[a].lat, HUB_CITIES[a].lon, RADIUS)
      const to = latLonToVec3(HUB_CITIES[b].lat, HUB_CITIES[b].lon, RADIUS)
      const mid = from.clone().add(to).multiplyScalar(0.5)
      // push the midpoint outward so the arc bulges above the surface
      mid.setLength(RADIUS * 1.28)
      const curve = new THREE.QuadraticBezierCurve3(from, mid, to)
      const points = curve.getPoints(32)
      return new THREE.BufferGeometry().setFromPoints(points)
    })
  }, [])

  return (
    <group>
      {arcs.map((geometry, i) => (
        <primitive
          key={i}
          object={
            new THREE.Line(
              geometry,
              (() => {
                const mat = new THREE.LineBasicMaterial({
                  color: '#70c8ff',
                  transparent: true,
                  opacity: 0.24,
                })
                materialRef.current[i] = mat
                return mat
              })()
            )
          }
        />
      ))}
    </group>
  )
}

const HUB_CITIES: { lat: number; lon: number }[] = [
  { lat: 28.6, lon: 77.2 }, // India
  { lat: 40.7, lon: -74.0 }, // USA
  { lat: 51.5, lon: -0.1 }, // UK
  { lat: -33.9, lon: 151.2 }, // Australia
  { lat: 52.5, lon: 13.4 }, // Germany
  { lat: 48.8, lon: 2.3 }, // France
  { lat: 35.7, lon: 139.7 }, // Japan
  { lat: 1.3, lon: 103.8 }, // Singapore
  { lat: 25.2, lon: 55.3 }, // UAE
  { lat: -36.8, lon: 174.8 }, // New Zealand
  { lat: 53.3, lon: -6.3 }, // Ireland
  { lat: 43.7, lon: -79.4 }, // Canada
]

function NetworkNodes() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    const t = clock.getElapsedTime()
    groupRef.current.children.forEach((child, i) => {
      const s = 1 + Math.sin(t * 1.4 + i) * 0.28
      child.scale.setScalar(s)
    })
  })

  return (
    <group ref={groupRef}>
      {HUB_CITIES.map((city, i) => {
        const pos = latLonToVec3(city.lat, city.lon, RADIUS * 1.01)
        return (
          <mesh key={i} position={pos}>
            <sphereGeometry args={[0.028, 12, 12]} />
            <meshBasicMaterial color="#6ee7ff" transparent opacity={0.9} />
          </mesh>
        )
      })}
    </group>
  )
}

function GlobeGroup() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((_, delta) => {
    if (groupRef.current) {
      // ~42s per full rotation — slow and almost unnoticeable
      groupRef.current.rotation.y += delta * ((2 * Math.PI) / 42)
    }
  })

  return (
    <group ref={groupRef} rotation={[0.1, -2.3, 0]}>
      {/* faint translucent sphere body */}
      <mesh>
        <sphereGeometry args={[RADIUS, 48, 48]} />
        <meshBasicMaterial
          color="#075ee8"
          transparent
          opacity={0.38}
          depthWrite={false}
        />
      </mesh>

      <ContinentDots />
      <GraticuleLines />
      <SurfaceArcs />
      <NetworkNodes />

      {/* inner atmosphere glow */}
      <mesh scale={1.05}>
        <sphereGeometry args={[RADIUS, 32, 32]} />
        <meshBasicMaterial
          color="#148cff"
          transparent
          opacity={0.34}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>

      {/* outer soft bloom */}
      <mesh scale={1.16}>
        <sphereGeometry args={[RADIUS, 32, 32]} />
        <meshBasicMaterial
          color="#2563ff"
          transparent
          opacity={0.16}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>

      <mesh scale={1.32}>
        <sphereGeometry args={[RADIUS, 24, 24]} />
        <meshBasicMaterial
          color="#5bc8ff"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>
    </group>
  )
}
function MobileFrameLimiter({ enabled }: { enabled: boolean }) {
  const { invalidate } = useThree()

  useEffect(() => {
    if (!enabled) return

    let frameId: number
    let lastTime = 0
    const frameInterval = 1000 / 30

    const loop = (time: number) => {
      if (time - lastTime >= frameInterval) {
        lastTime = time
        invalidate()
      }

      frameId = requestAnimationFrame(loop)
    }

    frameId = requestAnimationFrame(loop)

    return () => cancelAnimationFrame(frameId)
  }, [enabled, invalidate])

  return null
}

export default function DigitalGlobe() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(max-width: 600px)')

    const updateDevice = () => {
      setIsMobile(media.matches)
    }

    updateDevice()
    media.addEventListener('change', updateDevice)

    return () => {
      media.removeEventListener('change', updateDevice)
    }
  }, [])

  return (
    <div className="dg-globe-canvas">
      <Canvas
      frameloop={isMobile ? 'demand' : 'always'}
        camera={{ position: [0, 0.1, 6.15], fov: 38 }}
        gl={{
          antialias: !isMobile,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        dpr={isMobile ? 1 : [1, 1.5]}
        style={{ background: 'transparent' }}
        onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
      >
        <MobileFrameLimiter enabled={isMobile} />
        <ambientLight intensity={0.7} />
        <GlobeGroup />
      </Canvas>
    </div>
  )
}
