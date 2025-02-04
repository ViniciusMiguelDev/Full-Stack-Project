import React from "react";

interface ButtonProps {
  color?: string;
  label?: string;
  onClick?: (event: any) => void;
  style?: string;
  type: "submit" | "button" | "reset" | undefined;
}
export const Button: React.FC<ButtonProps> = ({
  onClick,
  color,
  label,
  style,
  type
}: ButtonProps) => {
  return (
    <button
      className={`bg-${color}-500 text-white px-4 py-2 rounded-lg hover:bg-${color}-300 hover:text-black ${style}`}
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
};
