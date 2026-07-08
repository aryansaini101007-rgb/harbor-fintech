import { Suspense, useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import * as THREE from 'three'

const TEXTURES = [
  'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg',
  'https://unpkg.com/three-globe/example/img/earth-topology.png',
  'https://unpkg.com/three-globe/example/img/earth-clouds.png',
]

const NORMAL_SCALE = new THREE.Vector2(0.9, 0.9)
const SPECULAR_COLOR = new THREE.Color('#222222')

function EarthMesh() {
  const groupRef = useRef<THREE.Group>(null)
  const [colorMap, normalMap, cloudsMap] = useLoader(TextureLoader, TEXTURES)

  colorMap.colorSpace = THREE.SRGBColorSpace
  cloudsMap.colorSpace = THREE.SRGBColorSpace

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1
    }
  })

  return (
    <group ref={groupRef} rotation={[0.15, -0.6, 0]}>
      <mesh>
        <sphereGeometry args={[1.85, 64, 64]} />
        <meshPhongMaterial
          map={colorMap}
          normalMap={normalMap}
          normalScale={NORMAL_SCALE}
          specular={SPECULAR_COLOR}
          shininess={18}
        />
      </mesh>

      <mesh scale={1.012}>
        <sphereGeometry args={[1.85, 64, 64]} />
        <meshPhongMaterial
          map={cloudsMap}
          transparent
          opacity={0.38}
          depthWrite={false}
        />
      </mesh>

      <mesh scale={1.06}>
        <sphereGeometry args={[1.85, 48, 48]} />
        <meshBasicMaterial
          color="#5eb8ff"
          transparent
          opacity={0.14}
          side={THREE.BackSide}
        />
      </mesh>

      <mesh scale={1.12}>
        <sphereGeometry args={[1.85, 32, 32]} />
        <meshBasicMaterial
          color="#3d8fff"
          transparent
          opacity={0.06}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  )
}

export default function EarthGlobe() {
  return (
    <div className="earth-canvas-wrap">
      <Canvas
        camera={{ position: [0, 0.25, 4.6], fov: 40 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        dpr={[1, 1.5]}
        style={{ background: 'transparent' }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0)
        }}
      >
        <ambientLight intensity={0.35} />
        <directionalLight position={[5, 2, 5]} intensity={1.6} />
        <directionalLight position={[-4, -1, -3]} intensity={0.25} color="#6688ff" />
        <pointLight position={[0, 0, 6]} intensity={0.4} color="#88bbff" />
        <Suspense fallback={null}>
          <EarthMesh />
        </Suspense>
      </Canvas>
    </div>
  )
}
