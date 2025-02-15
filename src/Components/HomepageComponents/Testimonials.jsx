import { useState } from "react";
import left from "../../assets/left.svg"; // Ensure this path is correct
import right from "../../assets/right.svg"; // Ensure this path is correct
import per1 from "../../assets/per1.svg"; // Ensure this path is correct

const testimonials = [
  {
    id: 1,
    name: "Janshi",
    position: "HD of Process and Technology",
    company: "Potentiametrics, Inc.",
    feedback:
      "The software development provided by Kaumodaki's team was instrumental in propelling the project forward, demonstrating their expertise in the field.",
    image: per1,
  },
  {
    id: 2,
    name: "John Doe",
    position: "CEO",
    company: "Tech Innovators",
    feedback:
      "Working with Kaumodaki's team was an outstanding experience. Their professionalism and technical expertise truly set them apart.",
    image: per1,
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-[#def4ff] p-8 rounded-lg flex justify-center items-center w-full h-auto md:h-[400px] px-4 md:px-20">
      <div className="w-full h-auto md:h-[176px] flex flex-col gap-6">
        {/* Header and Navigation Arrows */}
        <div className="flex justify-between items-center">
          <h2 className="w-[60%] md:w-full text-xl md:text-3xl font-bold text-[#0553b0] mb-6 ">
            What clients say about us
          </h2>
          <div className="flex space-x-4">
            <button onClick={prevTestimonial} className="transition">
              <img src={left} className="w-10 h-10" alt="Previous" />
            </button>
            <button onClick={nextTestimonial} className="transition">
              <img src={right} className="w-10 h-10" alt="Next" />
            </button>
          </div>
        </div>

        {/* Testimonial Content */}
        <div className="w-full md:w-[70%] flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Client Details */}
          <div className="flex items-center space-x-4">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-16 h-16 rounded-full object-cover border border-gray-400"
            />
            <div>
              <h3 className="text-[20px] font-semibold text-[#0553b0]">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-[14px] text-[#0553b0]">
                {testimonials[currentIndex].position}
              </p>
              <p className="text-[18px] text-[#0553b0]">
                {testimonials[currentIndex].company}
              </p>
            </div>
          </div>

          {/* Feedback Text */}
          <p className="text-gray-900 text-center font-medium md:text-left max-w-lg">
            {testimonials[currentIndex].feedback}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;