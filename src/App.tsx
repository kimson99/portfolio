import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import TextPlugin from 'gsap/TextPlugin';
import { useRef } from 'react';
import './App.css';
import About from './components/About';
import Divider from './components/Divider';
import Footer from './components/Footer';
import Introduction from './components/Introduction';
import ToolBox from './components/Toolbox';
import Work from './components/Work';

gsap.registerPlugin(SplitText, TextPlugin);

function App() {
  const introScopeRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.intro',
        {
          autoAlpha: 0,
        },
        { autoAlpha: 1, duration: 1, ease: 'bounce.inOut' }
      );

      gsap.fromTo(
        '#cursor',
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 0.5,
          repeat: Infinity,
          yoyo: true,
          ease: 'power3.out',
        }
      );

      gsap.timeline().to('#job-title', {
        text: {
          value: '< Full stack developer />',
        },
        duration: 5,
        delay: 1,
      });
    },
    { scope: introScopeRef }
  );

  return (
    <>
      <div className="fixed h-20 w-[96%] left-0 right-0 m-[0_auto] px-4 mt-4 md:px-12 py-4 box-border bg-neutral-950 rounded-4xl z-10 text-white font-semibold flex md:justify-end justify-center items-center gap-20">
        <div className="cursor-pointer">
          <a href="#home" className="">
            Home
          </a>
        </div>
        <div className="cursor-pointer">
          <a href="#about-me" className="">
            About
          </a>
        </div>
        <div className="cursor-pointer">
          {' '}
          <a href="#work" className="">
            Work
          </a>
        </div>
      </div>

      <div
        ref={introScopeRef}
        id="home"
        className="flex flex-col md:flex-row items-center justify-center w-full min-h-[90vh]"
      >
        <Introduction />
      </div>

      <Divider className="mb-14" />
      <About />

      <Divider className="my-14" />
      <Work />

      <Divider className="my-14" />
      <ToolBox />

      <Footer />
    </>
  );
}

export default App;
