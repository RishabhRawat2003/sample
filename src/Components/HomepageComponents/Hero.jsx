import heroimg from "../../assets/hero.png";
import Header from "../Header";

const Hero = () => {
  return (
    <div
      className="w-full h-[596px] relative font-[Poppins]"
      style={{
        backgroundImage: `url(${heroimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full px-4 md:px-20 absolute top-10">
        <Header />
      </div>
      <div className="absolute left-6 md:left-28 top-1/2 -translate-y-1/2 z-10">
        <h1 className="text-3xl md:text-5xl font-bold text-[#5BDCE3] leading-10 md:leading-16">
          Innovative Enterprise Software{" "}
        </h1>
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-10 md:leading-16">
          Development for the Next Generation
        </h1>
      </div>
      <div className="absolute bottom-20 left-6 md:left-28 flex flex-col md:flex-row gap-6 md:gap-0 md:justify-between w-[75%]">
        <h1 className="text-[16px] text-white">
          Imagining the Future{" "}
          <span className="text-[16px] text-[#5BDCE3]">Anew</span>
        </h1>
        <div>
          <button className=" bg-blue-600 text-white px-10 py-2 rounded-[6px] hover:bg-blue-700 transition">
            Let&apos;s Connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
