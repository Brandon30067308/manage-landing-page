import { Dispatch, FC, Fragment } from "react";
import Modal from "react-modal";
import iconHamburger from "../../../../images/icon-hamburger.svg";
import iconClose from "../../../../images/icon-close.svg";

interface NavMobileProps {
  navOpen: boolean;
  setNavOpen: Dispatch<boolean>;
}

const NavMobile: FC<NavMobileProps> = ({ navOpen, setNavOpen }) => {
  return (
    <Fragment>
      <button
        onClick={() => setNavOpen(!navOpen)}
        className="z-10 outline-none"
      >
        <img src={navOpen ? iconClose : iconHamburger} alt="navbar" />
      </button>
      <Modal
        className="modal-menu max-w-xl"
        isOpen={navOpen}
        onRequestClose={() => setNavOpen(false)}
        shouldCloseOnOverlayClick={true}
        ariaHideApp={false}
      >
        <ul className="flex flex-col justify-center rounded-xl text-center">
          <li
            className="text-[16px] font-medium mb-6 transition-colors
            hover:text-grayishBlue"
          >
            <a href="/">Pricing</a>
          </li>
          <li
            className="text-[16px] font-medium mb-6 transition-colors
            hover:text-grayishBlue"
          >
            <a href="/">Product</a>
          </li>
          <li
            className="text-[16px] font-medium mb-6 transition-colors
            hover:text-grayishBlue"
          >
            <a href="/">About Us</a>
          </li>
          <li
            className="text-[16px] font-medium mb-6 transition-colors
            hover:text-grayishBlue"
          >
            <a href="/">Careers</a>
          </li>
          <li
            className="text-[16px] font-medium transition-colors
            hover:text-grayishBlue"
          >
            <a href="/">Community</a>
          </li>
        </ul>
      </Modal>
    </Fragment>
  );
};

export default NavMobile;
