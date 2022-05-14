import { DetailedHTMLProps, FC } from "react";
import logoImage from "../../images/logo.svg";
import logoAltImage from "../../images/logo-alt.svg";

const Logo: FC<
  DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    alt?: boolean;
  }
> = ({ className, alt = false }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img src={alt ? logoAltImage : logoImage} alt="logo" className="w-36" />
    </div>
  );
};

export default Logo;
