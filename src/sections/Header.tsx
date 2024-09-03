import { CutCornerButton } from "../components/CutCornerButton";

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
            <CutCornerButton className="hidden md:inline-flex">
              Get Started
            </CutCornerButton>
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
