import  { useEffect, useState } from "react";
import circle from "../../assets/circle.svg";

const TextSlider = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-[160px] w-[500px] md:w-[2950px] flex items-center justify-center">
      <div
        className="flex gap-32 transition-transform duration-300"
        style={{ transform: `translateX(${scrollY * -0.5}px)` }}
      >
        <div className="md:flex gap-4 items-center hidden ">
          <span>
            <img src={circle} alt="" className="w-10 h-10" />
          </span>
          <span className="text-4xl font-bold">POPLIDAYS.com</span>
        </div>

        <div className="md:flex gap-4 items-center hidden">
          <span>
            <img src={circle} alt="" className="w-10 h-10" />
          </span>
          <span className="text-4xl font-bold">TELENAV</span>
        </div>

        <div className="md:flex gap-4 items-center hidden">
          <span>
            <img src={circle} alt="" className="w-10 h-10" />
          </span>
          <span className="text-4xl font-bold">TURVO</span>
        </div>

        <div className="md:flex gap-4 items-center hidden">
          <span>
            <img src={circle} alt="" className="w-10 h-10" />
          </span>
          <span className="text-4xl font-bold">PotentialMetric</span>
        </div>

        <div className="md:flex gap-4 items-center hidden">
          <span>
            <img src={circle} alt="" className="w-10 h-10" />
          </span>
          <span className="text-4xl font-bold">POPLIDAYS.com</span>
        </div>

        <div className="flex gap-4 items-center">
          <span>
            <img src={circle} alt="" className="w-10 h-10" />
          </span>
          <span className="text-4xl font-bold">TELENAV</span>
        </div>

        <div className="flex gap-4 items-center">
          <span>
            <img src={circle} alt="" className="w-10 h-10" />
          </span>
          <span className="text-4xl font-bold">TURVO</span>
        </div>

        <div className="md:flex gap-4 items-center hidden">
          <span>
            <img src={circle} alt="" className="w-10 h-10" />
          </span>
          <span className="text-4xl font-bold">PotentialMetric</span>
        </div>
      </div>
    </div>
  );
};

export default TextSlider;
