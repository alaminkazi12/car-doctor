import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const banners = [
  {
    title: "Affordable Price For Car Servicing",
    subtitle:
      "There are many variations of passages of available, but the majority have suffered alteration in some form",
    next: "#slide2",
    prev: "#slide4",
  },
  {
    title: "Affordable Price For Car Servicing",
    subtitle:
      "There are many variations of passages of available, but the majority have suffered alteration in some form",
    next: "#slide3",
    prev: "#slide1",
  },
  {
    title: "Affordable Price For Car Servicing",
    subtitle:
      "There are many variations of passages of available, but the majority have suffered alteration in some form",
    next: "#slide4",
    prev: "#slide2",
  },
  {
    title: "Affordable Price For Car Servicing",
    subtitle:
      "There are many variations of passages of available, but the majority have suffered alteration in some form",
    next: "#slide1",
    prev: "#slide3",
  },
];

const Banner = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="carousel w-full mt-6">
        {banners.map((banner, idx) => (
          <div
            key={idx}
            id={`slide${idx + 1}`}
            style={{
              backgroundImage: `linear-gradient(90deg, #151515 0%, rgba(21, 21, 21, 0.00) 100%), url(/assets/images/banner/${
                idx + 1
              }.jpg)`,
            }}
            className="carousel-item relative w-full h-[80vh] bg-bottom bg-no-repeat bg-cover rounded-xl flex items-center"
          >
            <div className="max-w-[50%] flex flex-col items-start justify-center ml-12  p-8 rounded-lg">
              <h1 className="text-6xl max-w-[65%] font-bold leading-tight text-white mb-4">
                {banner.title}
              </h1>
              <p className="text-lg max-w-[70%] text-white mb-6">
                {banner.subtitle}
              </p>
              <div className="flex items-center gap-4">
                <button className="btn btn-primary">Discover More</button>
                <button className="btn btn-outline border-2 text-white">
                  Latest Project
                </button>
              </div>
            </div>
            <div className="absolute right-14 bottom-12 flex items-center gap-6">
              <a
                href={banner.prev}
                className="btn btn-circle hover:bg-primary hover:text-white"
              >
                <FaArrowLeft />
              </a>
              <a
                href={banner.next}
                className="btn btn-circle hover:bg-primary hover:text-white"
              >
                <FaArrowRight />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
