import { FC } from "react";
import Nav from "./Nav/Nav";
import Hero from "./Hero/Hero";
import tabletPattern from "../../images/bg-tablet-pattern.svg";

const Main: FC = () => {
  return (
    <div className="Main relative w-full text-secondary px-3 sm:px-6 lg:px-14 py-8 sm:py-12">
      <div className="absolute -right-12 -top-24 md:-top-12 -z-10">
        <img
          src={tabletPattern}
          alt="tablet_pattern"
          className="2xl:hidden w-[375px] sm:w-[550px]"
        />
      </div>
      <Nav />
      <Hero />
    </div>
  );
};

export default Main;
