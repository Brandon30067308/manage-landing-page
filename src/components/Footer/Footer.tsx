import {
  faFacebookSquare,
  faInstagram,
  faPinterest,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import breakpoints from "../../breakpoints/breakpoints";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import PrimaryButton from "../Layout/PrimaryButton";
import Logo from "../Logo/Logo";

const Footer: FC = () => {
  const { width } = useWindowDimensions();

  return (
    <footer className="footer relative w-full flex flex-col items-center justify-end pt-10 sm:pt-12">
      {/* top - simplify section */}
      <div
        className="bg-simplifySectionMobile sm:bg-simplifySectionDesktop bg-cover bg-no-repeat
        w-full bg-primary flex items-center justify-center py-20 px-3
        md:px-6 lg:px-14"
      >
        <div className="max-w-[2160px] w-full flex flex-col sm:flex-row items-center justify-between">
          {/* left */}
          <h2
            className="max-w-lg font-bold text-lightGray text-center sm:text-left tracking-wide
          text-4xl mb-4 sm:mb-0"
          >
            Simplify how your team works today.
          </h2>
          {/* right */}
          <PrimaryButton
            alt={true}
            className="min-w-[145px] min-h-[60px] font-bold text-primary"
          >
            Get Started
          </PrimaryButton>
        </div>
      </div>
      {/* bottom */}
      <div className="min-h-[3vh] w-full bg-darkBlue py-12 sm:py-20 px-3 md:px-6 lg:px-14">
        <div
          className="w-full max-w-[2160px] flex flex-wrap sm:flex-row flex-col-reverse
          items-center justify-between mx-auto"
        >
          {/* left */}
          <div
            className="w-full sm:w-fit sm:min-h-[125px] flex flex-col-reverse sm:flex-col justify-between
          items-center sm:items-start sm:mr-8 mb-8"
          >
            <Logo alt={true} />
            {/* social links */}
            <div className="w-full max-w-[350px] justify-between flex mb-10 sm:mb-0">
              <a className="footer-link mr-4" href="/">
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  className="text-[26px] sm:text-[22px] text-white"
                />
              </a>
              <a className="footer-link mr-4" href="/">
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="text-[26px] sm:text-[22px] text-white"
                />
              </a>
              <a className="footer-link mr-4" href="/">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-[26px] sm:text-[22px] text-white"
                />
              </a>
              <a className="footer-link mr-4" href="/">
                <FontAwesomeIcon
                  icon={faPinterest}
                  className="text-[26px] sm:text-[22px] text-white"
                />
              </a>
              <a href="/" className="footer-link">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-[26px] sm:text-[22px] text-white"
                />
              </a>
            </div>
          </div>
          <div className="flex flex-1 justify-around w-full sm:w-fit sm:mr-8 mb-14">
            <div className="flex flex-col mr-0 sm:mr-12">
              <a
                className="footer-link font-medium text-lightGray tracking-wide text-base mb-3"
                href="/"
              >
                Home
              </a>
              <a
                className="footer-link font-medium text-lightGray tracking-wide text-base mb-3"
                href="/"
              >
                Pricing
              </a>
              <a
                className="footer-link font-medium text-lightGray tracking-wide text-base mb-3"
                href="/"
              >
                Products
              </a>
              <a
                className="footer-link font-medium text-lightGray tracking-wide text-base"
                href="/"
              >
                About Us
              </a>
            </div>
            <div className="flex flex-col">
              <a
                className="footer-link font-medium text-lightGray tracking-wide text-base mb-3"
                href="/"
              >
                Careers
              </a>
              <a
                className="footer-link font-medium text-lightGray tracking-wide text-base mb-3"
                href="/"
              >
                Community
              </a>
              <a
                className="footer-link font-medium text-lightGray tracking-wide text-base"
                href="/"
              >
                Privacy Support
              </a>
            </div>
          </div>
          <div className="w-full sm:w-fit sm:min-h-[125px] flex flex-col justify-between items-end mb-14">
            <form className="w-full sm:w-fit font-medium flex items-center justify-center">
              <input
                type="text"
                placeholder="Updates in your inbox..."
                className="min-h-[50px] flex-[.7] rounded-[4rem] text-sm outline-none
                px-3.5 py-3 mr-2.5 sm:mr-4"
              />
              <PrimaryButton className="!min-h-[50px] min-w-[85px] text-sm tracking-wide">
                Go
              </PrimaryButton>
            </form>
            {width >= breakpoints.sm && (
              <p className="font-medium text-sm text-grayishBlue tracking-wide">
                Copyright 2022. All Rights Reserved
              </p>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
