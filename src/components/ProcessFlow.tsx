import React, { useRef, useState, useLayoutEffect, useEffect } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { ProcessStep } from '../types';
import { OneLoopMark } from './OneLoopLogo';

export const DEFAULT_STEPS: ProcessStep[] = [
  {
    id: "audit",
    index: "01",
    title: "Audit & Forensics",
    keyword: "Diagnostic",
    description: "We diagnose the exact bottlenecks holding back your revenue — unravelling unit economics, ad waste, conversion leakages, and team friction before building anything."
  },
  {
    id: "build",
    index: "02",
    title: "Build & Deploy",
    keyword: "Engineering",
    description: "We engineer custom, blazing-fast websites and digital products built specifically around customer acquisition, sub-second loads, and verified tracking."
  },
  {
    id: "market",
    index: "03",
    title: "Market & Track",
    keyword: "9x ROAS",
    description: "Full-funnel Google Search, Shopping, and Meta campaigns managed on clean, verified conversion tracking so every dollar reported is trustworthy."
  },
  {
    id: "automate",
    index: "04",
    title: "Automate Operations",
    keyword: "Zero Waste",
    description: "Intelligent workflows, automated lead routing, and self-correcting AI that eliminate repetitive manual work, saving your team hundreds of hours each month."
  },
  {
    id: "scale",
    index: "05",
    title: "Scale & Expand",
    keyword: "Compounding",
    description: "Ongoing month-over-month optimization. As your volume expands across Australia, Dubai, and beyond, our infrastructure keeps margins expanding as you grow."
  }
];

interface ProcessFlowProps {
  steps?: ProcessStep[];
}

interface StepRowProps {
  step: ProcessStep;
  index: number;
  total: number;
  desktopNodeRef: (el: HTMLDivElement | null) => void;
  mobileNodeRef: (el: HTMLDivElement | null) => void;
  scrollYProgress: MotionValue<number>;
  reducedMotion: boolean;
}

const StepRow: React.FC<StepRowProps> = ({
  step,
  index,
  total,
  desktopNodeRef,
  mobileNodeRef,
  scrollYProgress,
  reducedMotion
}) => {
  // Local progress window for step i:
  // Derived in scroll order so each step lights up sequentially and reverses cleanly on scroll-up
  const rangeStart = Math.max(0, (index - 0.12) / total);
  const rangeEnd = Math.min(1, (index + 0.6) / total);

  // Animations driven purely by useTransform MotionValues (no React re-renders or setState on scroll)
  const nodeFillOpacity = useTransform(scrollYProgress, [rangeStart, rangeEnd], [0.2, 1]);
  const nodeGlow = useTransform(scrollYProgress, [rangeStart, rangeEnd], [0, 1]);
  const nodeBoxShadow = useTransform(
    nodeGlow,
    [0, 1],
    ['0 0 0px 0px rgba(229, 156, 105, 0)', '0 0 16px 3px rgba(229, 156, 105, 0.7)']
  );
  const nodeDotScale = useTransform(nodeGlow, [0, 1], [0.75, 1.15]);
  const textOpacity = useTransform(scrollYProgress, [rangeStart, rangeEnd], [0.15, 1]);
  const textY = useTransform(scrollYProgress, [rangeStart, rangeEnd], [12, 0]);

  // If reduced motion is active, display fully visible
  const finalOpacity = reducedMotion ? 1 : textOpacity;
  const finalY = reducedMotion ? 0 : textY;
  const finalNodeFill = reducedMotion ? 1 : nodeFillOpacity;
  const finalBoxShadow = reducedMotion ? '0 0 16px 3px rgba(229, 156, 105, 0.7)' : nodeBoxShadow;
  const finalDotScale = reducedMotion ? 1 : nodeDotScale;

  // Horizontal alternation for S-curve geometry on desktop (>=768px):
  // Even steps (0, 2): Node at ~38% (Left card: 32%, Node: 12%, Right: 56%)
  // Odd steps (1, 3): Node at ~62% (Left: 56%, Node: 12%, Right card: 32%)
  // Final step (4): Node at ~50% (Left card: 44%, Node: 12%, Right: 44%)
  const isLast = index === total - 1;
  const isEven = index % 2 === 0;

  return (
    <div className="relative w-full py-16 md:py-24 my-2">
      {/* Desktop Layout (>=768px) */}
      <div className="hidden md:flex items-center w-full max-w-6xl mx-auto px-6">
        {isLast ? (
          <>
            {/* Last Step (05): Node at Center (50%) */}
            <div className="w-[44%] flex justify-end pr-8">
              <motion.div
                style={{ opacity: finalOpacity, y: finalY }}
                className="w-full max-w-md rounded-2xl bg-[#161616] border border-white/5 p-6 shadow-xl hover:border-[#E59C69]/30 transition-colors group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-semibold text-[#E59C69] tracking-widest">
                    {step.index}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E59C69]" />
                </div>
                <div className="flex items-center flex-wrap gap-2 mb-2">
                  <h3 className="text-lg lg:text-xl font-bold text-white tracking-tight">
                    {step.title}
                  </h3>
                  {step.keyword && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#E59C69]/15 text-[#FDC7A1] border border-[#E59C69]/30">
                      {step.keyword}
                    </span>
                  )}
                </div>
                <p className="text-xs lg:text-sm text-gray-400 leading-relaxed font-light">
                  {step.description}
                </p>
              </motion.div>
            </div>

            <div className="w-[12%] flex justify-center items-center">
              <div ref={desktopNodeRef} className="relative flex items-center justify-center">
                <motion.div
                  style={{
                    opacity: finalNodeFill,
                    boxShadow: finalBoxShadow
                  }}
                  className="w-11 h-11 rounded-full bg-[#111111] border-2 border-[#E59C69] flex items-center justify-center z-20 transition-colors"
                >
                  <motion.div
                    style={{
                      scale: finalDotScale,
                      backgroundColor: '#E59C69'
                    }}
                    className="w-3.5 h-3.5 rounded-full"
                  />
                </motion.div>
              </div>
            </div>

            <div className="w-[44%]" />
          </>
        ) : isEven ? (
          <>
            {/* Even Steps (01, 03): Node at ~38% (Left card: 32%, Node: 12%, Right open: 56%) */}
            <div className="w-[32%] flex justify-end pr-6">
              <motion.div
                style={{ opacity: finalOpacity, y: finalY }}
                className="w-full rounded-2xl bg-[#161616] border border-white/5 p-6 shadow-xl hover:border-[#E59C69]/30 transition-colors group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-semibold text-[#E59C69] tracking-widest">
                    {step.index}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E59C69]" />
                </div>
                <div className="flex items-center flex-wrap gap-2 mb-2">
                  <h3 className="text-lg lg:text-xl font-bold text-white tracking-tight">
                    {step.title}
                  </h3>
                  {step.keyword && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#E59C69]/15 text-[#FDC7A1] border border-[#E59C69]/30">
                      {step.keyword}
                    </span>
                  )}
                </div>
                <p className="text-xs lg:text-sm text-gray-400 leading-relaxed font-light">
                  {step.description}
                </p>
              </motion.div>
            </div>

            <div className="w-[12%] flex justify-center items-center">
              <div ref={desktopNodeRef} className="relative flex items-center justify-center">
                <motion.div
                  style={{
                    opacity: finalNodeFill,
                    boxShadow: finalBoxShadow
                  }}
                  className="w-11 h-11 rounded-full bg-[#111111] border-2 border-[#E59C69] flex items-center justify-center z-20 transition-colors"
                >
                  <motion.div
                    style={{
                      scale: finalDotScale,
                      backgroundColor: '#E59C69'
                    }}
                    className="w-3.5 h-3.5 rounded-full"
                  />
                </motion.div>
              </div>
            </div>

            <div className="w-[56%]" />
          </>
        ) : (
          <>
            {/* Odd Steps (02, 04): Node at ~62% (Left open: 56%, Node: 12%, Right card: 32%) */}
            <div className="w-[56%]" />

            <div className="w-[12%] flex justify-center items-center">
              <div ref={desktopNodeRef} className="relative flex items-center justify-center">
                <motion.div
                  style={{
                    opacity: finalNodeFill,
                    boxShadow: finalBoxShadow
                  }}
                  className="w-11 h-11 rounded-full bg-[#111111] border-2 border-[#E59C69] flex items-center justify-center z-20 transition-colors"
                >
                  <motion.div
                    style={{
                      scale: finalDotScale,
                      backgroundColor: '#E59C69'
                    }}
                    className="w-3.5 h-3.5 rounded-full"
                  />
                </motion.div>
              </div>
            </div>

            <div className="w-[32%] flex justify-start pl-6">
              <motion.div
                style={{ opacity: finalOpacity, y: finalY }}
                className="w-full rounded-2xl bg-[#161616] border border-white/5 p-6 shadow-xl hover:border-[#E59C69]/30 transition-colors group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-semibold text-[#E59C69] tracking-widest">
                    {step.index}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E59C69]" />
                </div>
                <div className="flex items-center flex-wrap gap-2 mb-2">
                  <h3 className="text-lg lg:text-xl font-bold text-white tracking-tight">
                    {step.title}
                  </h3>
                  {step.keyword && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#E59C69]/15 text-[#FDC7A1] border border-[#E59C69]/30">
                      {step.keyword}
                    </span>
                  )}
                </div>
                <p className="text-xs lg:text-sm text-gray-400 leading-relaxed font-light">
                  {step.description}
                </p>
              </motion.div>
            </div>
          </>
        )}
      </div>

      {/* Mobile Layout (<768px): Centered Node with Card stacked directly below */}
      <div className="flex flex-col items-center md:hidden px-4 w-full">
        {/* Mobile Node */}
        <div ref={mobileNodeRef} className="relative flex items-center justify-center mb-5 z-20">
          <motion.div
            style={{
              opacity: finalNodeFill,
              boxShadow: finalBoxShadow
            }}
            className="w-10 h-10 rounded-full bg-[#111111] border-2 border-[#E59C69] flex items-center justify-center transition-colors"
          >
            <motion.div
              style={{
                scale: finalDotScale,
                backgroundColor: '#E59C69'
              }}
              className="w-3 h-3 rounded-full"
            />
          </motion.div>
        </div>

        {/* Mobile Card */}
        <motion.div
          style={{ opacity: finalOpacity, y: finalY }}
          className="w-full max-w-sm rounded-2xl bg-[#161616] border border-white/5 p-5 shadow-xl"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono font-semibold text-[#E59C69] tracking-widest">
              {step.index}
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#E59C69]" />
          </div>
          <div className="flex items-center flex-wrap gap-2 mb-2">
            <h3 className="text-base font-bold text-white tracking-tight">
              {step.title}
            </h3>
            {step.keyword && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#E59C69]/15 text-[#FDC7A1] border border-[#E59C69]/30">
                {step.keyword}
              </span>
            )}
          </div>
          <p className="text-xs text-gray-400 leading-relaxed font-light">
            {step.description}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export const ProcessFlow: React.FC<ProcessFlowProps> = ({ steps = DEFAULT_STEPS }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const activePathRef = useRef<SVGPathElement>(null);
  
  const desktopNodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileNodeRefs = useRef<(HTMLDivElement | null)[]>([]);

  desktopNodeRefs.current = steps.map((_, i) => desktopNodeRefs.current[i] || null);
  mobileNodeRefs.current = steps.map((_, i) => mobileNodeRefs.current[i] || null);

  const [pathD, setPathD] = useState<string>('');
  const [pathLength, setPathLength] = useState<number>(0);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);

  // Check for prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Framer Motion useScroll on the whole section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Dynamic strokeDashoffset driving the line as user scrolls
  const strokeDashoffset = useTransform(
    scrollYProgress,
    (progress) => (1 - progress) * (pathLength || 2500)
  );

  // Compute node coordinates from actual DOM layout via useLayoutEffect + ResizeObserver
  const updateCurve = () => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const isDesktop = window.innerWidth >= 768;
    const targetRefs = isDesktop ? desktopNodeRefs.current : mobileNodeRefs.current;

    const coords: { x: number; y: number }[] = [];
    targetRefs.forEach((el) => {
      if (el) {
        const rect = el.getBoundingClientRect();
        // Ensure element is actually rendered/visible
        if (rect.width > 0 && rect.height > 0) {
          coords.push({
            x: rect.left - containerRect.left + rect.width / 2,
            y: rect.top - containerRect.top + rect.height / 2
          });
        }
      }
    });

    if (coords.length < 2) return;

    // Build the continuous S-curve with vertical cubic Bezier tangents
    // Start 60px above node 0
    let d = `M ${coords[0].x} ${Math.max(0, coords[0].y - 60)} `;
    d += `L ${coords[0].x} ${coords[0].y} `;

    for (let i = 0; i < coords.length - 1; i++) {
      const p0 = coords[i];
      const p1 = coords[i + 1];
      const dy = p1.y - p0.y;

      const cp1x = p0.x;
      const cp1y = p0.y + dy * 0.5;
      const cp2x = p1.x;
      const cp2y = p1.y - dy * 0.5;

      d += `C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p1.x} ${p1.y} `;
    }

    // Extend 60px below the last node
    const last = coords[coords.length - 1];
    d += `L ${last.x} ${last.y + 60}`;

    setPathD(d);
  };

  useLayoutEffect(() => {
    updateCurve();

    if (!containerRef.current) return;
    const ro = new ResizeObserver(() => {
      updateCurve();
    });
    ro.observe(containerRef.current);

    let resizeTimer: number;
    const handleResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(updateCurve, 100);
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      window.clearTimeout(resizeTimer);
    };
  }, [steps]);

  // Cache path.getTotalLength() once per layout change (NOT on every scroll frame)
  useLayoutEffect(() => {
    if (activePathRef.current) {
      try {
        const length = activePathRef.current.getTotalLength();
        if (length > 0) {
          setPathLength(length);
        }
      } catch {
        // Fallback for non-rendered SVG
      }
    }
  }, [pathD]);

  return (
    <section
      id="methodology"
      ref={containerRef}
      className="relative w-full bg-black py-24 overflow-hidden border-t border-white/5"
    >
      {/* Header */}
      <div className="relative z-20 text-center max-w-3xl mx-auto px-4 mb-12 md:mb-16">
        <div className="flex items-center justify-center gap-2 mb-3">
          <OneLoopMark className="w-5 h-5 text-[#E59C69]" />
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.28em] text-[#E59C69] font-bold">
            Methodology
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight font-sans">
          The Growth Path
        </h2>
        <p className="text-xs sm:text-sm text-gray-400 mt-3 font-light max-w-xl mx-auto leading-relaxed">
          How we systematically close the gaps between strategy, creative execution, and technical infrastructure.
        </p>
      </div>

      {/* SVG S-Curve Path Layer (Calculated from measured DOM coordinates) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        style={{ width: '100%', height: '100%' }}
      >
        <defs>
          <linearGradient id="copperPathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FDC7A1" />
            <stop offset="35%" stopColor="#E59C69" />
            <stop offset="70%" stopColor="#D88855" />
            <stop offset="100%" stopColor="#CA7A49" />
          </linearGradient>
        </defs>

        {pathD && (
          <>
            {/* Inactive Background Track */}
            <path
              d={pathD}
              fill="none"
              stroke="#222222"
              strokeWidth="3"
              strokeDasharray="6 6"
              strokeLinecap="round"
            />

            {/* Glowing Aura Path (Subtle Minimal Glow) */}
            {!reducedMotion && (
              <motion.path
                d={pathD}
                fill="none"
                stroke="#E59C69"
                strokeWidth="8"
                strokeOpacity="0.3"
                strokeDasharray={pathLength || 2500}
                style={{ strokeDashoffset }}
                strokeLinecap="round"
                className="filter blur-[3px]"
              />
            )}

            {/* Active Front Path */}
            <motion.path
              ref={activePathRef}
              d={pathD}
              fill="none"
              stroke="url(#copperPathGradient)"
              strokeWidth="3.5"
              strokeDasharray={pathLength || 2500}
              style={{
                strokeDashoffset: reducedMotion ? 0 : strokeDashoffset
              }}
              strokeLinecap="round"
            />
          </>
        )}
      </svg>

      {/* Step Rows */}
      <div className="relative z-20 flex flex-col justify-between">
        {steps.map((step, idx) => (
          <StepRow
            key={step.id}
            step={step}
            index={idx}
            total={steps.length}
            desktopNodeRef={(el) => {
              desktopNodeRefs.current[idx] = el;
            }}
            mobileNodeRef={(el) => {
              mobileNodeRefs.current[idx] = el;
            }}
            scrollYProgress={scrollYProgress}
            reducedMotion={reducedMotion}
          />
        ))}
      </div>
    </section>
  );
};

export default ProcessFlow;
