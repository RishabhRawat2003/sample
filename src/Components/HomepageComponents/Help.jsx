import downarr from "../../assets/downarr.svg";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import icon4 from "../../assets/icon4.svg";
import icon5 from "../../assets/icon5.svg";
import icon6 from "../../assets/icon6.svg";

const services = [
  { id: 1, title: "AI Solutions", icon: icon1 },
  { id: 2, title: "Data & Analytics", icon: icon2 },
  { id: 3, title: "IoT & Embedded Systems", icon: icon3 },
  { id: 4, title: "Cloud & Modernization services", icon: icon4 },
  { id: 5, title: "Software Engineering", icon: icon5 },
  { id: 6, title: "Innovation Consulting", icon: icon6 },
];

const HowWeCanHelp = () => {
  return (
    <div className="bg-[#0553B0] text-white py-10 px-4 md:px-20 h-auto md:h-[640px]">
      <div className="w-full mx-auto px-6 ">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">How we can help you</h2>
        <div className="space-y-2">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex items-center justify-between border-t border-blue-500 py-4"
            >
              <div className="flex items-center space-x-4">
                <img src={service.icon} alt="" className="w-[33px] h-[33px]" />
              </div>
              <div className="flex items-center justify-start w-[80%] md:w-[30%]  ">
                <div className="w-[80%] flex items-center space-x-4">
                  <span className="text-sm md:text-lg font-medium">{`0${service.id}`}</span>
                  <span className="text-sm md:text-lg font-medium">{service.title}</span>
                </div>
                <div className="w-[10%] md:w-[20%] flex items-center justify-end">
              <img src={downarr} alt="downarr" className="w-[23px] h-[23px]" />

              </div>
              </div>
             
            </div>
          ))}
        </div>
        <div className="mt-4 ">
          <button className="bg-white text-[#0553B0] py-2 px-10 font-medium rounded-[6px] text-[16px] shadow-md hover:bg-gray-100 transition">
            Let’s talk about my project
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowWeCanHelp;