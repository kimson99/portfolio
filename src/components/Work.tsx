const Work = () => {
  return (
    <div id="work" className="flex flex-col items-center justify-around mx-8">
      <h3 className="text-slate-200 font-semibold text-4xl mb-8">Work</h3>
      <ol className="relative border-s border-slate-200 text-slate-200">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-white bg-emerald-500"></div>
          <time className="mb-1 text-sm font-normal leading-none ">
            Nov 2021 - Present
          </time>
          <h3 className="text-lg font-semibold">
            Full stack Developer,{' '}
            <span className="italic font-normal text-base underline">
              <a href="https://atherlabs.com/">Ather Labs (aka SIPHER)</a>
            </span>
          </h3>
          <p className="mb-4 text-base font-normal ">
            Built and maintained scalable backend services that support
            underlying ecosystem of Sipher Odyssey. <br />
            Created ProtoGAIA, a generative AI SaaS platform allowing everyone
            to collaborate in their workflows <br />
            Developed centralized knowledge base for design documents and
            handbooks, enabling quick and accurate information retrieval
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-white bg-emerald-500"></div>
          <time className="mb-1 text-sm font-normal leading-none">
            Feb 2020 - Nov 2021
          </time>
          <h3 className="text-lg font-semibold">
            Application Developer,{' '}
            <span className="italic font-normal text-base underline">
              <a href="https://trungthuy.com/">Trung Thuy Group</a>
            </span>
          </h3>
          <p className="text-base font-normal">
            Automated and simplified contracts and digital signature workflows,
            reducing paperwork and improve efficiency <br />
            Built internal tools for assets management of hotel rooms and leased
            offices.
          </p>
        </li>
      </ol>
    </div>
  );
};

export default Work;
