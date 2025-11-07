'use client';

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';
import SpotlightCard from './SpotlightCard';
import Image from 'next/image';
import { Play } from 'lucide-react';
import './Masonry.css';

interface MasonryItem {
  id: string;
  img: string;
  title: string;
  event: string;
  type: 'photo' | 'video';
  height: number;
  category?: string;
  onClick?: () => void;
}

interface MasonryProps {
  items: MasonryItem[];
  ease?: string;
  duration?: number;
  stagger?: number;
  animateFrom?: 'top' | 'bottom' | 'left' | 'right' | 'center' | 'random';
  scaleOnHover?: boolean;
  hoverScale?: number;
  blurToFocus?: boolean;
}

const useMedia = (queries: string[], values: number[], defaultValue: number) => {
  const get = () => {
    // Check if window is defined (client-side)
    if (typeof window === 'undefined') return defaultValue;
    return values[queries.findIndex(q => window.matchMedia(q).matches)] ?? defaultValue;
  };
  
  const [value, setValue] = useState(defaultValue); // Start with default for SSR

  useEffect(() => {
    // Set correct value on mount
    setValue(get());
    
    const handler = () => setValue(get());
    queries.forEach(q => window.matchMedia(q).addEventListener('change', handler));
    return () => queries.forEach(q => window.matchMedia(q).removeEventListener('change', handler));
  }, [queries, values, defaultValue]);

  return value;
};

const useMeasure = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return [ref, size] as const;
};

const preloadImages = async (urls: string[]) => {
  await Promise.all(
    urls.map(
      src =>
        new Promise(resolve => {
          const img = new window.Image();
          img.src = src;
          img.onload = img.onerror = () => resolve(null);
        })
    )
  );
};

const Masonry = ({
  items,
  ease = 'power3.out',
  duration = 0.6,
  stagger = 0.05,
  animateFrom = 'bottom',
  scaleOnHover = true,
  hoverScale = 0.98,
  blurToFocus = true,
}: MasonryProps) => {
  const columns = useMedia(
    ['(min-width:1500px)', '(min-width:1000px)', '(min-width:600px)', '(min-width:400px)'],
    [4, 3, 2, 1],
    1
  );

  const [containerRef, { width }] = useMeasure();
  const [imagesReady, setImagesReady] = useState(false);

  const getInitialPosition = (item: any) => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return { x: item.x, y: item.y };

    let direction = animateFrom;

    if (animateFrom === 'random') {
      const directions = ['top', 'bottom', 'left', 'right'] as const;
      direction = directions[Math.floor(Math.random() * directions.length)];
    }

    switch (direction) {
      case 'top':
        return { x: item.x, y: -200 };
      case 'bottom':
        return { x: item.x, y: window.innerHeight + 200 };
      case 'left':
        return { x: -200, y: item.y };
      case 'right':
        return { x: window.innerWidth + 200, y: item.y };
      case 'center':
        return {
          x: containerRect.width / 2 - item.w / 2,
          y: containerRect.height / 2 - item.h / 2
        };
      default:
        return { x: item.x, y: item.y + 100 };
    }
  };

  useEffect(() => {
    preloadImages(items.map(i => i.img)).then(() => setImagesReady(true));
  }, [items]);

  const grid = useMemo(() => {
    if (!width) return { items: [], containerHeight: 0 };

    const colHeights = new Array(columns).fill(0);
    const columnWidth = width / columns;
    const gap = 16; // 1rem gap

    const gridItems = items.map(child => {
      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = col * (columnWidth + gap);
      const height = child.height;
      const y = colHeights[col];

      colHeights[col] += height + gap;

      return { ...child, x, y, w: columnWidth, h: height };
    });

    // Calculate total container height with extra padding
    const maxHeight = Math.max(...colHeights);
    
    return { items: gridItems, containerHeight: maxHeight + 40 };
  }, [columns, items, width]);

  const hasMounted = useRef(false);

  useLayoutEffect(() => {
    if (!imagesReady) return;

    grid.items.forEach((item, index) => {
      const selector = `[data-key="${item.id}"]`;
      const animationProps = {
        x: item.x,
        y: item.y,
        width: item.w,
        height: item.h
      };

      if (!hasMounted.current) {
        const initialPos = getInitialPosition(item);
        const initialState = {
          opacity: 0,
          x: initialPos.x,
          y: initialPos.y,
          width: item.w,
          height: item.h,
          ...(blurToFocus && { filter: 'blur(10px)' })
        };

        gsap.fromTo(selector, initialState, {
          opacity: 1,
          ...animationProps,
          ...(blurToFocus && { filter: 'blur(0px)' }),
          duration: 0.8,
          ease: 'power3.out',
          delay: index * stagger
        });
      } else {
        gsap.to(selector, {
          ...animationProps,
          duration: duration,
          ease: ease,
          overwrite: 'auto'
        });
      }
    });

    hasMounted.current = true;
  }, [grid, imagesReady, stagger, animateFrom, blurToFocus, duration, ease]);

  const handleMouseEnter = (item: any) => {
    const selector = `[data-key="${item.id}"]`;

    if (scaleOnHover) {
      gsap.to(selector, {
        scale: hoverScale,
        duration: 0.3,
        ease: 'power2.out'
      });
    }
  };

  const handleMouseLeave = (item: any) => {
    const selector = `[data-key="${item.id}"]`;

    if (scaleOnHover) {
      gsap.to(selector, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    }
  };

  // Spotlight colors array matching Altius theme
  const spotlightColors = [
    'rgba(230, 57, 70, 0.2)',
    'rgba(69, 123, 157, 0.2)',
    'rgba(230, 57, 70, 0.25)',
    'rgba(29, 53, 87, 0.2)',
  ];

  return (
    <div ref={containerRef} className="masonry-container" style={{ height: grid.containerHeight }}>
      {grid.items.map((item, index) => (
        <div
          key={item.id}
          data-key={item.id}
          className="masonry-item"
          onClick={item.onClick}
          onMouseEnter={() => handleMouseEnter(item)}
          onMouseLeave={() => handleMouseLeave(item)}
        >
          <SpotlightCard
            className="masonry-spotlight-card p-0 overflow-hidden h-full w-full"
            spotlightColor={spotlightColors[index % spotlightColors.length]}
          >
            <div className="masonry-item-content">
              {/* Image/Video */}
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Video Play Icon Overlay */}
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-2xl">
                      <Play className="text-[#E63946] ml-1" size={28} fill="#E63946" />
                    </div>
                  </div>
                )}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Content Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                  {/* Type Badge */}
                  <div className="absolute top-3 right-3">
                    <div className="px-2.5 py-1 bg-black/60 backdrop-blur-md rounded-full flex items-center gap-1.5 border border-white/10">
                      {item.type === 'video' ? (
                        <>
                          <Play size={12} className="text-[#E63946]" fill="#E63946" />
                          <span className="text-white text-xs inter-semibold">Video</span>
                        </>
                      ) : (
                        <>
                          <div className="w-2 h-2 bg-[#457B9D] rounded-sm" />
                          <span className="text-white text-xs inter-semibold">Photo</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Title and Event */}
                  <h3 className="text-base md:text-lg font-bold text-white goldman-bold mb-1 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-300 inter-regular line-clamp-1">
                    {item.event}
                  </p>
                  
                  {/* Category Badge */}
                  {item.category && (
                    <div className="mt-2">
                      <span className="px-2 py-1 bg-[#457B9D]/20 text-[#457B9D] rounded-full text-xs inter-semibold">
                        {item.category}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>
      ))}
    </div>
  );
};

export default Masonry;
