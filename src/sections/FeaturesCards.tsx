export const FeaturesCardsSections = () => {
  return (
    <section className="py-24">
      <div className="container">
        <h2 className="text-4xl font-black text-center font-heading">
          Discover the future of blockchain with Blockforge
        </h2>
        <div className="mt-36">
          <div>
            <div className="relative z-0 p-8 max-w-xs">
              <div className="absolute top-1.5 right-1.5 bg-fuchsia-500 rounded-xl size-28 -z-10"></div>
              <div className="absolute inset-0 bg-zinc-800 -z-10 rounded-2xl [mask-image:linear-gradient(228deg,transparent,transparent_40px,black_40px)]"></div>
              <div className="flex justify-center -mt-28">
                <div className="inline-flex relative">
                  <div className="absolute h-4 w-full top-[calc(100%+16px)] bg-zinc-950/70 rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)]"></div>
                  <img
                    src="/assets/images/pill.png"
                    alt="Pill image"
                    className="size-40"
                  />
                </div>
              </div>
              <h3 className="mt-12 text-3xl font-black font-heading">
                Revolutionary Blockchain API
              </h3>
              <p className="mt-4 text-lg text-zinc-400">
                Effortlessly integrate and manage blockchain data with out
                cutting-edge API, designed for seamless connectivity.
              </p>
              <div className="flex justify-between mt-12">
                <button className="text-sm font-extrabold tracking-wider text-fuchsia-500 uppercase font-heading">
                  Learn more
                </button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-8 text-zinc-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="inline-flex gap-4 p-2.5 rounded-full bg-zinc-950">
            {[...new Array(4)].fill(0).map((_, i) => (
              <div
                key={i}
                className="rounded-full cursor-pointer size-2.5 bg-zinc-500"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
