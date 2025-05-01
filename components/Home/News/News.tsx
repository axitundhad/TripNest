import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import NewsCrad from "./NewsCrad";

const News = () => {
  return (
    <div className="pt-16 pb-16">
      {/* section heading */}
      <SectionHeading
        heading="Exciting Travel News for You"
        description="Stay updated with the latest travel trends, tips, and destination highlights curated just for you."
      />
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-10 mt-20">
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <NewsCrad
            image="/images/n1.jpg"
            title="Top 10 place to visit in Australia"
            date="15 March 2025"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <NewsCrad
            image="/images/n2.jpg"
            title="Top 10 place to visit in Russia"
            date="25 March 2025"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <NewsCrad
            image="/images/n3.jpg"
            title="Top 10 place to visit in New York"
            date="2 March 2025"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <NewsCrad
            image="/images/n4.jpg"
            title="Top 10 place to visit in New Zealand"
            date="5 March 2025"
          />
        </div>
      </div>
    </div>
  );
};

export default News;
