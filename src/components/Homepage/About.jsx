import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="mt-20 bg-base-100">
      <div className="container mx-auto grid grid-cols-2 h-screen">
        <div className="">
          {/* image */}
          <Image
            className="rounded-xl"
            src="/assets/images/about_us/person.jpg"
            height={700}
            width={400}
            alt="car doctor model"
          />
        </div>
        <div className="space-y-4">
          {/* content */}
          <h3 className="text-primary text-xl font-bold">About Us</h3>
          <h2 className="text-5xl max-w-[60%] font-bold text-black">
            We are qualified <br /> & of experience <br /> in this field
          </h2>
          <p className="text-xl max-w-[80%] text-gray-800">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="text-xl max-w-[80%] text-gray-800">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn btn-primary text-lg px-6">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
