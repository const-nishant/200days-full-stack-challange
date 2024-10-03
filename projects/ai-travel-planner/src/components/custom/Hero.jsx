import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="flex flex-col items-center mx-54 gap-9">
      <h1 className="font-extrabold text-[60px] text-center mt-16">
        <span className="text-[#f56551]">
          Discover Your Next Adventure with AI:
        </span>
        <br />
        Personalized Iteineraries at Your Fingertips
      </h1>
      <p className="text-2xl text-gray-500 text-center">
        Your personal trip planner and travel curator, creating custom
        itineraries tailored to your interests and budget.
      </p>
      <Link to="/create-trip">
        <Button>Get Started, Its Free</Button>
      </Link>
    </div>
  );
}

export default Hero;
