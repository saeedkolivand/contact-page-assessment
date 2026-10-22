const Footer = () => {
  return (
    <footer className="bg-[#ced2fe] px-4">
      <div className="mx-auto grid max-w-[1160px] grid-cols-1 gap-8 py-12 lg:grid-cols-[1fr_280px]">
        <h2 className="text-5xl font-light leading-tight text-[#091dfb]">
          Try <strong className="font-bold">OSIGN®</strong> free and without
          obligation – for 60 days
        </h2>

        <div className="flex flex-col items-start gap-6 text-base leading-6 text-[#1a1a1d]">
          <p>
            You can test the <strong>full range of OSIGN®</strong> features free
            of charge and without obligation <strong>for 60 days</strong>.
            During this time, you will already benefit from{" "}
            <strong>all advantages of OSIGN®.</strong>
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-black px-3 py-2 font-bold text-white"
          >
            Start your 60-day trial now <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div className="border-t border-white/40">
        <div className="mx-auto flex max-w-[1160px] flex-wrap items-center gap-4 py-4 text-sm text-[#1a1a1d]">
          <p>
            <strong>And after that? Only €20 net per month</strong>, per user
            for non-profits, NGOs and SMEs (&lt; 3 years)
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-[#091dfb]/30 bg-white/60 px-3 py-1 text-sm font-bold text-[#0717c9]"
          >
            Book free consultation now <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
