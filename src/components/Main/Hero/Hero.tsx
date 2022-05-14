import { FC } from "react";
import illustrationIntro from "../../../images/illustration-intro.svg";
import PrimaryButton from "../../Layout/PrimaryButton";

const Hero: FC = () => {
  return (
    <div
      className="w-full max-w-[2160px] flex flex-col-reverse sm:flex-row justify-between
      items-center mx-auto pt-7 sm:pt-12"
    >
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left sm:mr-10">
        <h1 className="max-w-xl font-bold text-secondary leading-[1.075] text-6xl mb-6 sm:mb-10 ">
          Bring everyone together to build better products.
        </h1>
        <p className="max-w-[350px] text-base leading-7 text-grayishBlue mb-6 sm:mb-10">
          Manage makes it easy for software teams to plan day-to-day activities
          while keeping the larger team goals in view.
        </p>
        <PrimaryButton className="min-w-[150px] font-bold shadow shadow-primary">
          Get Started
        </PrimaryButton>
      </div>
      <div className="flex items-center justify-center mb-3 sm:mb-0">
        <img
          src={illustrationIntro}
          alt="illustration_intro"
          className="w-[540px]"
        />
      </div>
    </div>
  );
};

export default Hero;
