import { FC } from "react";
import breakpoints from "../../breakpoints/breakpoints";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import bgTabletPattern from "../../images/bg-tablet-pattern.svg";

const Services: FC = () => {
  const { width } = useWindowDimensions();

  return (
    <div
      className="relative w-full max-w-[2160px] flex flex-col sm:flex-row justify-between
      items-center px-0 sm:px-6 lg:px-14 py-10 sm:py-12 mx-auto"
    >
      {width >= breakpoints.sm && (
        <div className="absolute z-[-1] -left-[350px] -bottom-[320px]">
          <img
            src={bgTabletPattern}
            alt="tablet_pattern"
            className="2xl:hidden w-[550px]"
          />
        </div>
      )}
      <div className="sm:mr-10 mb-8 sm:mb-0 px-3 sm:px-0">
        <h2 className="max-w-[480px] font-bold text-secondary text-4xl mb-3.5 sm:mb-8">
          What's different about manage?
        </h2>
        <p className="max-w-[420px] text-base leading-7 text-grayishBlue">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div>
        <div className="flex flex-col justify-between items-start mb-10 pl-3 sm:pl-0">
          <div className="flex items-center mb-2 w-full bg-paleRed rounded-l-[4rem] sm:bg-transparent">
            <div
              className="bg-primary min-w-[80px] flex items-center justify-center rounded-[4rem]
            font-medium text-white py-2.5 mr-3 sm:mr-6"
            >
              01
            </div>
            <h3 className="font-bold text-base trakcing-[0.015em] pr-3 sm:pr-0">
              Track company-wide progress
            </h3>
          </div>
          <p
            className="max-w-[420px] text-base leading-7 text-grayishBlue ml-[92px]
          sm:ml-[104px] pr-3 sm:pr-0"
          >
            See how your day-to-day tasks fit into the wider vision. Go from
            tracking progress at the milestone level all the way done to the
            smallest of details. Never lose sight of the bigger picture again.
          </p>
        </div>
        <div className="flex flex-col justify-between items-start mb-10 pl-3 sm:pl-0">
          <div className="flex items-center mb-2 w-full bg-paleRed rounded-l-[4rem] sm:bg-transparent">
            <div
              className="bg-primary min-w-[80px] flex items-center justify-center rounded-[4rem]
            font-medium text-white py-2.5 mr-3 sm:mr-6"
            >
              02
            </div>
            <h3 className="font-bold text-base trakcing-[0.015em] pr-3 sm:pr-0">
              Advanced built-in reports
            </h3>
          </div>
          <p
            className="max-w-[420px] text-base leading-7 text-grayishBlue ml-[92px]
          sm:ml-[104px] pr-3 sm:pr-0"
          >
            Set internal delivery estimates and track progress toward company
            goals. Our customisable dashboard helps you build out the reports
            you need to keep key stakeholders informed.
          </p>
        </div>
        <div className="flex flex-col justify-between items-start pl-3 sm:pl-0">
          <div className="flex items-center mb-2 w-full bg-paleRed rounded-l-[4rem] sm:bg-transparent">
            <div
              className="bg-primary min-w-[80px] flex items-center justify-center rounded-[4rem]
            font-medium text-white py-2.5 mr-3 sm:mr-6"
            >
              03
            </div>
            <h3 className="font-bold text-base trakcing-[0.015em] pr-3 sm:pr-0">
              Everything you need in one place
            </h3>
          </div>
          <p
            className="max-w-[420px] text-base leading-7 text-grayishBlue ml-[92px]
          sm:ml-[104px] pr-3 sm:pr-0"
          >
            Stop jumping from one service to another to communicate, store
            files, track tasks and share documents. Manage offers an all-in-one
            team productivity solution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
