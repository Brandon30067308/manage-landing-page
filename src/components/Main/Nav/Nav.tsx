import { FC, Fragment, useState } from "react";
import Logo from "../../Logo/Logo";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import breakpoints from "../../../breakpoints/breakpoints";
import NavMobile from "./NavMobile/NavMobile";
import PrimaryButton from "../../Layout/PrimaryButton";

const Nav: FC = () => {
  const { width } = useWindowDimensions();
  const [navOpen, setNavOpen] = useState<boolean>(false);

  return (
    <nav className="w-full max-w-[2160px] flex justify-between items-center mx-auto pb-7 sm:pb-12">
      <Logo className="mr-6" />
      {width >= breakpoints.lg ? (
        <Fragment>
          <div>
            <ul className="flex items-center justify-center">
              <li
                className="font-medium text-base mr-6 transition-colors
                hover:text-grayishBlue"
              >
                <a href="/">Pricing</a>
              </li>
              <li
                className="font-medium text-base mr-6 transition-colors
                hover:text-grayishBlue"
              >
                <a href="/">Product</a>
              </li>
              <li
                className="font-medium text-base mr-6 transition-colors
                hover:text-grayishBlue"
              >
                <a href="/">About</a> Us
              </li>
              <li
                className="font-medium text-base mr-6 transition-colors
                hover:text-grayishBlue"
              >
                <a href="/">Careers</a>
              </li>
              <li
                className="font-medium text-base mr-6 transition-colors
                hover:text-grayishBlue"
              >
                <a href="/">Community</a>
              </li>
            </ul>
          </div>
          <PrimaryButton className="min-w-[145px] font-medium shadow shadow-primary">
            Get Started
          </PrimaryButton>
        </Fragment>
      ) : (
        <NavMobile navOpen={navOpen} setNavOpen={setNavOpen} />
      )}
    </nav>
  );
};

export default Nav;
