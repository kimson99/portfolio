import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, DrawSVGPlugin, MotionPathPlugin, ScrollTrigger);

const Timeline = () => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '#svg-stage',
            scrub: true,
            start: 'top center',
            end: 'bottom center',
          },
        })
        .from('.theLine', { drawSVG: 0 }, 0)
        .to('.end', { drawSVG: 1 }, 0)
        .to(
          '.circle',
          {
            motionPath: {
              path: '.theLine',
              align: '.theLine',
              alignOrigin: [0.5, 0.5],
            },
          },
          0
        );
    },
    { scope: ref }
  );
  return (
    <div className="relative" ref={ref}>
      <svg id="svg-stage" viewBox="0 0 1000 3000">
        <path
          className="theLine"
          d="M 276 -64 Q 1333 528 466 1207 Q -425 1878 572 2615"
          fill="none"
          stroke="white"
          strokeWidth="5px"
        />
        <circle className="circle" r="10" fill="white" cx="100" cy="20" />
        <path className="end" />
      </svg>
      <div className="text-white text-base absolute top-[20%] left-[10%]">
        text
      </div>
    </div>
  );
};

export default Timeline;
