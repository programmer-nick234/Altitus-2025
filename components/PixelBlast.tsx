'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

type PixelBlastVariant = 'grid' | 'circle' | 'hexagons' | 'triangles' | 'diamonds';

interface PixelBlastProps {
  variant?: PixelBlastVariant;
  pixelSize?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  antialias?: boolean;
  patternScale?: number;
  patternDensity?: number;
  liquid?: boolean;
  liquidStrength?: number;
  liquidRadius?: number;
  liquidWobbleSpeed?: number;
  pixelSizeJitter?: number;
  enableRipples?: boolean;
  rippleIntensityScale?: number;
  rippleThickness?: number;
  rippleSpeed?: number;
  autoPauseOffscreen?: boolean;
  speed?: number;
  transparent?: boolean;
  edgeFade?: number;
}

const SHAPE_MAP: Record<PixelBlastVariant, number> = {
  grid: 0,
  circle: 1,
  hexagons: 2,
  triangles: 3,
  diamonds: 4
};

const MAX_CLICKS = 10;

const PixelBlast: React.FC<PixelBlastProps> = ({
  variant = 'circle',
  pixelSize = 4,
  color = '#457B9D',
  className,
  style,
  antialias = true,
  patternScale = 2.5,
  patternDensity = 1.1,
  liquid = true,
  liquidStrength = 0.08,
  liquidRadius = 1.0,
  liquidWobbleSpeed = 4.0,
  pixelSizeJitter = 0.3,
  enableRipples = true,
  rippleIntensityScale = 1.2,
  rippleThickness = 0.15,
  rippleSpeed = 0.35,
  autoPauseOffscreen = true,
  speed = 0.4,
  transparent = true,
  edgeFade = 0.3
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const visibilityRef = useRef({ visible: true });
  const speedRef = useRef(speed);

  const threeRef = useRef<{
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.OrthographicCamera;
    material: THREE.ShaderMaterial;
    clock: THREE.Clock;
    clickIx: number;
    uniforms: {
      uResolution: { value: THREE.Vector2 };
      uTime: { value: number };
      uColor: { value: THREE.Color };
      uClickPos: { value: THREE.Vector2[] };
      uClickTimes: { value: Float32Array };
      uShapeType: { value: number };
      uPixelSize: { value: number };
      uScale: { value: number };
      uDensity: { value: number };
      uPixelJitter: { value: number };
      uEnableRipples: { value: number };
      uRippleSpeed: { value: number };
      uRippleThickness: { value: number };
      uRippleIntensity: { value: number };
      uEdgeFade: { value: number };
    };
    resizeObserver?: ResizeObserver;
    raf?: number;
    quad?: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>;
  } | null>(null);
  
  const prevConfigRef = useRef<any>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    speedRef.current = speed;

    const cfg = {
      variant, pixelSize, color, antialias, patternScale, patternDensity,
      liquid, liquidStrength, liquidRadius, liquidWobbleSpeed,
      pixelSizeJitter, enableRipples, rippleIntensityScale, rippleThickness,
      rippleSpeed, transparent, edgeFade
    };

    let mustReinit = false;
    if (!threeRef.current) mustReinit = true;
    else if (prevConfigRef.current) {
      for (const k of Object.keys(cfg)) {
        if (prevConfigRef.current[k] !== (cfg as any)[k]) {
          mustReinit = true;
          break;
        }
      }
    }

    if (mustReinit) {
      if (threeRef.current) {
        const t = threeRef.current;
        if (t.raf) cancelAnimationFrame(t.raf);
        if (t.resizeObserver) t.resizeObserver.disconnect();
        if (t.renderer) {
          container.removeChild(t.renderer.domElement);
          t.renderer.dispose();
        }
        threeRef.current = null;
      }

      // Try to create WebGL renderer with error handling
      let renderer: THREE.WebGLRenderer;
      try {
        renderer = new THREE.WebGLRenderer({
          antialias,
          alpha: transparent,
          powerPreference: 'high-performance',
          stencil: false,
          depth: false,
          failIfMajorPerformanceCaveat: false
        });
      } catch (error) {
        console.warn('WebGL context creation failed, falling back to basic rendering:', error);
        // Optionally render a fallback or just return
        return;
      }
      
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(container.offsetWidth, container.offsetHeight);
      
      // Ensure canvas fills the container
      const canvas = renderer.domElement;
      canvas.style.position = 'absolute';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.style.display = 'block';
      
      // Add context loss/restore handlers
      const handleContextLost = (event: Event) => {
        event.preventDefault();
        console.warn('WebGL context lost');
        if (threeRef.current?.raf) {
          cancelAnimationFrame(threeRef.current.raf);
        }
      };
      
      const handleContextRestored = () => {
        console.log('WebGL context restored');
        // Context will be recreated on next render
      };
      
      canvas.addEventListener('webglcontextlost', handleContextLost, false);
      canvas.addEventListener('webglcontextrestored', handleContextRestored, false);
      
      container.appendChild(canvas);

      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      const clock = new THREE.Clock();

      const uniforms = {
        uResolution: { value: new THREE.Vector2(container.offsetWidth, container.offsetHeight) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color(color) },
        uClickPos: { value: Array.from({ length: MAX_CLICKS }, () => new THREE.Vector2(-999, -999)) },
        uClickTimes: { value: new Float32Array(MAX_CLICKS).fill(-999) },
        uShapeType: { value: SHAPE_MAP[variant] ?? 0 },
        uPixelSize: { value: pixelSize },
        uScale: { value: patternScale },
        uDensity: { value: patternDensity },
        uPixelJitter: { value: pixelSizeJitter },
        uEnableRipples: { value: enableRipples ? 1 : 0 },
        uRippleSpeed: { value: rippleSpeed },
        uRippleThickness: { value: rippleThickness },
        uRippleIntensity: { value: rippleIntensityScale },
        uEdgeFade: { value: edgeFade }
      };

      const material = new THREE.ShaderMaterial({
        uniforms,
        vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec2 uResolution;
          uniform float uTime;
          uniform vec3 uColor;
          uniform vec2 uClickPos[${MAX_CLICKS}];
          uniform float uClickTimes[${MAX_CLICKS}];
          uniform int uShapeType;
          uniform float uPixelSize;
          uniform float uScale;
          uniform float uDensity;
          uniform float uPixelJitter;
          uniform float uEnableRipples;
          uniform float uRippleSpeed;
          uniform float uRippleThickness;
          uniform float uRippleIntensity;
          uniform float uEdgeFade;

          varying vec2 vUv;

          float sdCircle(vec2 p, float r) { return length(p) - r; }
          float sdBox(vec2 p, vec2 b) { vec2 d = abs(p) - b; return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0); }

          float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }

          float getPattern(vec2 uv) {
            vec2 p = uv * uScale * uDensity;
            float val = 0.0;

            if (uShapeType == 0) {
              val = step(0.5, fract(p.x)) * step(0.5, fract(p.y));
            } else if (uShapeType == 1) {
              vec2 cell = floor(p);
              vec2 local = fract(p) - 0.5;
              float d = sdCircle(local, 0.3);
              val = smoothstep(0.02, 0.0, d);
            } else if (uShapeType == 2) {
              const float s = 0.866;
              vec2 h = vec2(1.0, s);
              vec2 grid = p / h;
              vec2 id1 = floor(grid);
              vec2 id2 = floor(grid + vec2(0.5, 0.5));
              vec2 p1 = fract(grid) - 0.5;
              vec2 p2 = fract(grid + vec2(0.5, 0.5)) - 0.5;
              float d1 = length(p1);
              float d2 = length(p2);
              val = smoothstep(0.4, 0.35, min(d1, d2));
            } else if (uShapeType == 3) {
              vec2 cell = floor(p);
              vec2 local = fract(p);
              float tri = abs(local.x - local.y);
              val = smoothstep(0.1, 0.0, tri);
            } else {
              vec2 cell = floor(p);
              vec2 local = fract(p) - 0.5;
              float d = abs(local.x) + abs(local.y);
              val = smoothstep(0.6, 0.5, d);
            }

            if (uPixelJitter > 0.0) {
              vec2 cell = floor(p);
              float jitter = hash(cell) * uPixelJitter;
              val *= (1.0 - jitter);
            }

            return val;
          }

          void main() {
            vec2 uv = vUv;
            vec2 pixelUV = (gl_FragCoord.xy / uResolution.xy);

            float pattern = getPattern(uv);
            float alpha = pattern;

            if (uEnableRipples > 0.5) {
              for (int i = 0; i < ${MAX_CLICKS}; i++) {
                if (uClickTimes[i] < -900.0) continue;
                float elapsed = uTime - uClickTimes[i];
                if (elapsed > 3.0) continue;

                vec2 toClick = pixelUV - uClickPos[i];
                float dist = length(toClick);
                float radius = elapsed * uRippleSpeed;
                float ripple = smoothstep(uRippleThickness, 0.0, abs(dist - radius));
                alpha += ripple * uRippleIntensity * (1.0 - elapsed / 3.0);
              }
            }

            if (uEdgeFade > 0.0) {
              vec2 edge = abs(pixelUV - 0.5) * 2.0;
              float edgeDist = max(edge.x, edge.y);
              float fade = smoothstep(1.0, 1.0 - uEdgeFade, edgeDist);
              alpha *= fade;
            }

            // Boost visibility - multiply alpha by 3.0 for stronger presence
            float finalAlpha = alpha * pattern * 3.0;
            finalAlpha = clamp(finalAlpha, 0.0, 1.0);
            
            gl_FragColor = vec4(uColor, finalAlpha);
          }
        `,
        transparent: true,
        depthWrite: false,
        depthTest: false
      });

      const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
      scene.add(quad);

      const resizeObserver = new ResizeObserver(() => {
        const w = container.offsetWidth;
        const h = container.offsetHeight;
        renderer.setSize(w, h);
        uniforms.uResolution.value.set(w, h);
      });
      resizeObserver.observe(container);

      const handleClick = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = 1.0 - (e.clientY - rect.top) / rect.height;
        const ix = threeRef.current?.clickIx ?? 0;
        uniforms.uClickPos.value[ix].set(x, y);
        uniforms.uClickTimes.value[ix] = clock.getElapsedTime();
        if (threeRef.current) threeRef.current.clickIx = (ix + 1) % MAX_CLICKS;
      };
      container.addEventListener('click', handleClick);

      const animate = () => {
        if (!threeRef.current) return;
        if (visibilityRef.current.visible) {
          uniforms.uTime.value = clock.getElapsedTime() * speedRef.current;
          renderer.render(scene, camera);
        }
        threeRef.current.raf = requestAnimationFrame(animate);
      };
      animate();

      threeRef.current = {
        renderer,
        scene,
        camera,
        material,
        clock,
        clickIx: 0,
        uniforms,
        resizeObserver,
        quad
      };
    }

    prevConfigRef.current = cfg;

    return () => {
      if (threeRef.current) {
        const t = threeRef.current;
        if (t.raf) cancelAnimationFrame(t.raf);
        if (t.resizeObserver) t.resizeObserver.disconnect();
        if (t.renderer && container) {
          if (container.contains(t.renderer.domElement)) {
            container.removeChild(t.renderer.domElement);
          }
          t.renderer.dispose();
        }
        threeRef.current = null;
      }
    };
  }, [
    variant, pixelSize, color, antialias, patternScale, patternDensity,
    liquid, liquidStrength, liquidRadius, liquidWobbleSpeed,
    pixelSizeJitter, enableRipples, rippleIntensityScale, rippleThickness,
    rippleSpeed, transparent, edgeFade, speed
  ]);

  useEffect(() => {
    if (!autoPauseOffscreen) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        visibilityRef.current.visible = entry.isIntersecting;
      },
      { threshold: 0 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [autoPauseOffscreen]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'auto',
        ...style
      }}
    />
  );
};

export default PixelBlast;
