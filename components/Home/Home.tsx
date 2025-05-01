"use client";
import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import Destination from "./Destination/Destination";
import Hotel from "./Hotel/Hotel";
import WhyChoose from "./WhyChoose/WhyChoose";
import Review from "./Reviews/Review";
import News from "./News/News";
import Newsletter from "./Newsletter/Newsletter";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);

  return (
    <div className="overflow-hidden">
      {/* <Hero />
      <Destination />
      <Hotel />
      <WhyChoose />
      <Review />
      <News />
      <Newsletter /> */}

      <section id="hero">
        <Hero />
      </section>
      <section id="destination" className="scroll-mt-3">
        <Destination />
      </section>
      <section id="hotel" className="scroll-mt-3">
        <Hotel />
      </section>
      <section id="whychoose" className="scroll-mt-3">
        <WhyChoose />
      </section>
      <section id="review" className="scroll-mt-3">
        <Review />
      </section>
      <section id="news" className="scroll-mt-3">
        <News />
      </section>
      <section id="newsletter" className="scroll-mt-3">
        <Newsletter />
      </section>
    </div>
  );
};

export default Home;
