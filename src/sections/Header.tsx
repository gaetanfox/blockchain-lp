export const HeaderSection = () => {
  return (
    <header className="sticky top-0 bg-zinc-900/50 backdrop-blur-lg">
      <div className="container">
        <div className="flex justify-between items-center h-24 md:h-28">
          <div>
            <img src="/assets/images/logo.svg" alt="Blog logo" />
          </div>
          {/* Header */}
          <div className="flex gap-4 items-center">
            <button className="hidden relative py-2 px-4 text-sm font-extrabold tracking-wide uppercase md:inline-flex bg-fuchsia-500/20 font-heading">
              <div className="absolute inset-0 outline outline-2 -outline-offset-2 outline-fuchsia-500 [mask-image:linear-gradient(225deg,transparent,transparent_10px,black_10px)]"></div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 right-0 text-fuchsia-500"
              >
                <path
                  d="M0 1H12.2667L23 11.7333V24"
                  stroke="currentColor"
                  stroke-width="2"
                ></path>
              </svg>
              <span className="leading-6"> Get Started</span>
            </button>

            {/* HERO*/}
            <div className="relative size-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2">
                <div className="w-5 h-0.5 -translate-y-1 bg-zinc-300"></div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-5 h-0.5 translate-y-1 bg-zinc-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
