import { FC } from "react";

interface PrimaryButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  alt?: boolean;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({
  alt = false,
  className,
  children,
}) => {
  return (
    <button
      className={`min-h-[60px] ${
        alt ? "hover:text-opacity-80" : "hover:bg-primaryLight"
      } ${
        alt ? "bg-white text-primary" : "bg-primary text-white"
      } text-base rounded-[4rem] outline-none px-3 transition-colors
      ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
