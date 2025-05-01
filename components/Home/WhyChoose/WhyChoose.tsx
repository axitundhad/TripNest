import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import WhyChooseCard from "./WhyChooseCard";

const WhyChoose = () => {
  return (
    <div className="pt-16 pb-24">
      {/* section heading */}
      <SectionHeading
        heading="Why Choose Us"
        description="Experience unmatched service, trusted quality, and personalized travel solutions tailored just for you."
      />
      <div className="grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center mt-20">
        {/* why choose card */}
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <WhyChooseCard
            image="/images/c1.svg"
            title="Best Price Guarantee"
            description="Get the lowest rates available — we guarantee the best price for your perfect stay."
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="150"
        >
          <WhyChooseCard
            image="/images/c2.svg"
            title="Easy & Quick Booking"
            description="Book your dream stay in just a few clicks with our fast and hassle-free process."
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <WhyChooseCard
            image="/images/c3.svg"
            title="Customer Care 24/7"
            description="Our dedicated support team is available 24/7 to assist you anytime, anywhere."
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
