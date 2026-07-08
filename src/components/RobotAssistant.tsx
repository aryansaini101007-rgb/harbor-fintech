import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Premium & High-Expression Friendly Robot
function FriendlyRobot() {
 const robotGroup = useRef<THREE.Group>(null);
const headGroup = useRef<THREE.Group>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Smooth breathing/floating animation
    if (robotGroup.current) {
      robotGroup.current.position.y = Math.sin(time * 1.8) * 0.03 - 0.05; // Lifted up to prevent sinking
    }
    
    // Gentle dynamic head bobbing
    if (headGroup.current) {
      headGroup.current.rotation.x = Math.sin(time * 1.2) * 0.025;
      headGroup.current.rotation.y = Math.cos(time * 0.8) * 0.035;
    }
  });

  return (
    // Decreased the scale from 0.78 to 0.65 for a perfect, well-proportioned fit
    <group ref={robotGroup} position={[0, -0.05, 0]} scale={[0.52, 0.52, 0.52]}>
      
      {/* --- GLOWING PEDESTAL BASE --- */}
      <mesh position={[0, -0.85, 0]}>
        <cylinderGeometry args={[0.5, 0.52, 0.06, 32]} />
        <meshStandardMaterial color="#90CAF9" metalness={0.2} roughness={0.3} />
      </mesh>
      <mesh position={[0, -0.82, 0]}>
        <cylinderGeometry args={[0.46, 0.46, 0.02, 32]} />
        <meshStandardMaterial color="#00E5FF" emissive="#00E5FF" emissiveIntensity={1.5} />
      </mesh>

      {/* --- SHORT FEET --- */}
      <mesh position={[-0.15, -0.78, 0]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#0D47A1" roughness={0.2} />
      </mesh>
      <mesh position={[0.15, -0.78, 0]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#0D47A1" roughness={0.2} />
      </mesh>

      {/* --- CHUBBY ROUND BODY --- */}
      <mesh position={[0, -0.4, 0]} scale={[1, 0.95, 1]}>
        <sphereGeometry args={[0.38, 32, 32]} />
        <meshStandardMaterial color="#ffffff" metalness={0.05} roughness={0.15} />
      </mesh>

      {/* Blue Power Core Belly Button */}
      <mesh position={[0, -0.4, 0.32]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.04, 32]} />
        <meshStandardMaterial color="#00E5FF" emissive="#00E5FF" emissiveIntensity={1.5} />
      </mesh>
      <mesh position={[0, -0.4, 0.31]}>
        <torusGeometry args={[0.11, 0.015, 8, 32]} />
        <meshStandardMaterial color="#29B6F6" roughness={0.4} />
      </mesh>

      {/* --- BLUE SHOULDER JOINTS & WHITE ARMS --- */}
      {/* Left Arm */}
      <group position={[-0.42, -0.35, 0]}>
        <mesh>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial color="#29B6F6" />
        </mesh>
        <mesh position={[-0.08, -0.12, 0]} rotation={[0, 0, 0.4]}>
          <capsuleGeometry args={[0.045, 0.12, 16, 16]} />
          <meshStandardMaterial color="#ffffff" roughness={0.2} />
        </mesh>
      </group>
      
      {/* Right Arm */}
      <group position={[0.42, -0.35, 0]}>
        <mesh>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial color="#29B6F6" />
        </mesh>
        <mesh position={[0.08, -0.12, 0]} rotation={[0, 0, -0.4]}>
          <capsuleGeometry args={[0.045, 0.12, 16, 16]} />
          <meshStandardMaterial color="#ffffff" roughness={0.2} />
        </mesh>
      </group>

      {/* --- PREMIUM EXPRESSIVE HEAD --- */}
      <group ref={headGroup} position={[0, 0.2, 0]}>
        {/* White Main Helmet Base */}
        <mesh scale={[1.15, 0.98, 1.05]}>
          <sphereGeometry args={[0.46, 32, 32]} />
          <meshStandardMaterial color="#ffffff" metalness={0.05} roughness={0.1} />
        </mesh>

        {/* Top Accent Patch */}
        <mesh position={[0, 0.42, 0]} scale={[1.02, 1.02, 1.02]}>
          <sphereGeometry args={[0.18, 16, 16, 0, Math.PI * 2, 0, Math.PI / 3]} />
          <meshStandardMaterial color="#4FC3F7" roughness={0.2} />
        </mesh>

        {/* Glossy Obsidian Visor Face Screen */}
        <mesh position={[0, 0.02, 0.08]} scale={[1.025, 0.88, 1.02]}>
          <sphereGeometry args={[0.42, 32, 32, 0, Math.PI * 2, 0, Math.PI / 1.7]} />
          <meshStandardMaterial color="#060b13" roughness={0.05} metalness={0.7} />
        </mesh>

        {/* --- HIGH-GLOW NEON EXPRESSIONS --- */}
        {/* Left Eye */}
        <mesh position={[-0.14, 0.06, 0.47]} rotation={[0, -0.2, 0]}>
          <torusGeometry args={[0.04, 0.012, 12, 24]} />
          <meshStandardMaterial color="#00E5FF" emissive="#00E5FF" emissiveIntensity={2.5} />
        </mesh>
        
        {/* Right Eye */}
        <mesh position={[0.14, 0.06, 0.47]} rotation={[0, 0.2, 0]}>
          <torusGeometry args={[0.04, 0.012, 12, 24]} />
          <meshStandardMaterial color="#00E5FF" emissive="#00E5FF" emissiveIntensity={2.5} />
        </mesh>

        {/* Happy Smile Arc */}
        <mesh position={[0, -0.07, 0.49]} rotation={[0, 0, Math.PI]}>
          <torusGeometry args={[0.05, 0.01, 8, 24, Math.PI]} />
          <meshStandardMaterial color="#00E5FF" emissive="#00E5FF" emissiveIntensity={2.5} />
        </mesh>

        {/* --- BLUE HEADPHONES & EAR ANTENNAE --- */}
        {/* Left Ear Setup */}
        <group position={[-0.52, 0.02, 0]} rotation={[0, 0, 0.08]}>
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.11, 0.13, 0.07, 32]} />
            <meshStandardMaterial color="#29B6F6" roughness={0.2} />
          </mesh>
          <mesh position={[0, 0.18, 0]}>
            <cylinderGeometry args={[0.015, 0.015, 0.22, 16]} />
            <meshStandardMaterial color="#29B6F6" />
          </mesh>
          <mesh position={[0, 0.29, 0]}>
            <sphereGeometry args={[0.03]} />
            <meshStandardMaterial color="#00E5FF" emissive="#00E5FF" emissiveIntensity={1} />
          </mesh>
        </group>

        {/* Right Ear Setup */}
        <group position={[0.52, 0.02, 0]} rotation={[0, 0, -0.08]}>
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.11, 0.13, 0.07, 32]} />
            <meshStandardMaterial color="#29B6F6" roughness={0.2} />
          </mesh>
          <mesh position={[0, 0.18, 0]}>
            <cylinderGeometry args={[0.015, 0.015, 0.22, 16]} />
            <meshStandardMaterial color="#29B6F6" />
          </mesh>
          <mesh position={[0, 0.29, 0]}>
            <sphereGeometry args={[0.03]} />
            <meshStandardMaterial color="#00E5FF" emissive="#00E5FF" emissiveIntensity={1} />
          </mesh>
        </group>
      </group>
    </group>
  );
}

export default function RobotAssistantUI() {
  return (
    // Fixed wrapper holding everything seamlessly together
    <div className="harfi-assistant fixed bottom-1 right-4 w-48 h-[275px] z-50 pointer-events-auto flex flex-col items-center justify-end select-none">
      
      {/* --- CLOUD DIALOGUE BOX COMPONENT --- */}
      {/* Reduced bottom margin to mb-1 to bring it directly closer to the robot's head */}
      <div className="relative mb-1 w-44 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-2xl border border-sky-100 shadow-md text-center flex flex-col justify-center animate-bounce [animation-duration:3s]">
        <p className="text-gray-800 text-[12px] font-medium leading-tight">
          Hey, I am <span className="font-bold text-gray-900">HarFI</span>
        </p>
        <p className="text-gray-800 text-[11px] font-semibold tracking-wide mt-0.5">
          Your AI Assistant
        </p>
        <p className="text-purple-600 text-[11px] font-semibold tracking-wide mt-0.5">
          Coming Soon...
        </p>
        
        {/* Tail element mimicking a cute stylized speech bubble notch */}
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white/90 border-r border-b border-sky-100 rotate-45"></div>
      </div>

      {/* --- ROBOT CANVAS VIEWPORT --- */}
      {/* Slightly shifted down to line up the head perfectly with the dialog notch */}
      <div className="w-full h-44 filter drop-shadow-xl -mt-2">
        <Canvas 
          camera={{ position: [0, 0, 1.8], fov: 45 }}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        >
          <ambientLight intensity={0.8} />
          <directionalLight position={[2, 4, 3]} intensity={1.5} />
          <directionalLight position={[-2, 1, 2]} intensity={0.5} color="#B3E5FC" />
          <pointLight position={[0, 0, 2]} intensity={0.4} />

          <FriendlyRobot />

          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 2.3}
            maxAzimuthAngle={Math.PI / 6}
            minAzimuthAngle={-Math.PI / 6}
          />
        </Canvas>
      </div>

    </div>
  );
}