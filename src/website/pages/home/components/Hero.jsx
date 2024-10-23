import { footballHero } from "../../../../assets/images";

const Hero = () => {
  return (
    <div className="bg-bg2 px-2 py-2 md:px-10 md:py-8 md:flex justify-between space-x-20 items-center">
      <div className="">
        <p className="uppercase text-xl text-white">Sign up and get reward</p>
        <h1 className="mt-3 mb-5">
          <span className="uppercase text-6xl font-bold text-white">Up to</span>{" "}
          <span className="uppercase text-6xl font-bold text-success">
            $20,000
          </span>
        </h1>
        <button className="btn-danger">Create account</button>
      </div>
      <div className="">
        <img src={footballHero} alt="" className="w-[550px] h-[400px]" />
      </div>
    </div>
  );
};

export default Hero;
