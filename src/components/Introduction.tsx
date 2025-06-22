import { BsDownload } from 'react-icons/bs';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import SocialButton from './SocialButton';

const Introduction = () => {
  return (
    <div className="flex flex-col justify-center items-center md:items-start h-full mx-24 -translate-y-[10%] md:-translate-y-[15%]">
      <img
        alt="hanging-light"
        className="w-60"
        src="./antique-pending-light.svg"
      />
      <div className="intro flex flex-col justify-center items-start gap-2 md:text-8xl text-5xl text-slate-200 mt-6">
        <p className="text-2xl">Welcome, I'm</p>
        <p className="text-6xl font-semibold text-shimmer bg-linear-90 from-emerald-500 via-emerald-300 to-emerald-500 ">
          {' '}
          Kim Son
        </p>
        <div className="flex gap-2 text-2xl min-w-72 min-h-8 text-emerald-600">
          <div id="job-title"></div>
          <span id="cursor">|</span>
        </div>
        <div className="text-xl">
          You can reach out to me via{' '}
          <a
            href="https://www.linkedin.com/in/son-ngo-837299225"
            target="_blank"
          >
            <span className="text-emerald-500">LinkedIn</span>
          </a>{' '}
          or{' '}
          <a href="mailto:sonngo81.99@gmail.com">
            <span className="text-emerald-500">Email.</span>
          </a>
        </div>
      </div>

      <div className="intro flex items-center mt-6 gap-4">
        <div className="md:flex text-white">
          <a href="./resume.pdf" download={'ResumeSoftwareEng_NgoKimSon.pdf'}>
            <div
              className="flex items-center cursor-pointer gap-1
                 bg-emerald-900 hover:bg-emerald-800 border-[1px] border-solid border-emerald-700 px-6 py-2 rounded-xl"
            >
              <span className="text-2xl">
                <BsDownload />
              </span>
              <div className="text-xl download-text">Resume</div>
            </div>
          </a>
        </div>

        <div className="flex items-center gap-1">
          <SocialButton
            url={'https://github.com/kimson99'}
            icon={<SiGithub />}
          />
          <SocialButton
            url={'https://www.linkedin.com/in/son-ngo-837299225'}
            icon={<SiLinkedin />}
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
