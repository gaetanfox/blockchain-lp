import { Circle } from "../components/Circle";
import { CutCornerButton } from "../components/CutCornerButton";
import { Hexagon } from "../components/Hexagon";

export const HeroSection = () => {
  return (
    <section className="py-24 md:py-52 overflow-x-clip">
      <div className="container">
        <p className="font-extrabold tracking-wider text-center uppercase text-zinc-500">
          Introducing Blockforge
        </p>
        <h1 className="mx-auto mt-4 max-w-3xl text-5xl font-black text-center md:text-6xl lg:text-7xl font-heading">
          The future of Blockchain is here
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-xl text-center md:text-2xl text-zinc-400">
          Blockforge is pioneering smart contract integrity with cutting-edge
          data solutions
        </p>
        <div className="flex justify-center mt-10">
          <CutCornerButton className="">Get Started</CutCornerButton>
        </div>
        <div className="flex justify-center mt-24">
          <div className="inline-flex relative z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hexagon className="size-[1100px]" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hexagon className="size-[1800px]" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute left-[200px] -top-[900px]">
                <img
                  src="/assets/images/cube.png"
                  alt="Cube 3D Image"
                  className="size-[140px]"
                />
              </Circle>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute left-[200px] top-[270px]">
                <img
                  src="/assets/images/cuboid.png"
                  alt="Cuboid 3D Image"
                  className="size-[140px]"
                />
              </Circle>
            </div>
            <img
              src="/assets/images/icosahedron.png"
              alt=""
              className="absolute w-[calc(100%+100px)] max-w-none -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 saturate-[10]% brightness-[4%] hue-rotate-240"
            />
            <img
              src="/assets/images/icosahedron.png"
              alt="Icosahedron 3D Image"
              className="w-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
