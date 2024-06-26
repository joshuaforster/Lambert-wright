import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'tertiary' | 'tertiary-black';
  children: React.ReactNode;
  onClick?: () => void; // Make onClick optional
  to?: string; // Optional path for navigation
  className?: string;
  type?: 'button' | 'submit' | 'reset'; // Add type attribute
}

const Button: React.FC<ButtonProps> = ({ variant, children, onClick, to, className = "", type = 'button' }) => {
  // Add margin top and bottom with Tailwind CSS classes
  const baseStyles = "px-4 py-2 mt-4 mb-4 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantStyles = variant === 'primary'
    ? "bg-lightBlue text-white hover:bg-[#138db8] focus:ring-[#138db8]"
    : variant === 'secondary'
    ? "bg-customBlue text-white hover:bg-[#4f5151] focus:ring-[#4f5151]"
    : variant === 'tertiary'
    ? "bg-transparent border border-white text-white hover:bg-white hover:text-gray-900 focus:ring-white shadow-md"
    : "bg-transparent border border-black text-black hover:bg-black hover:text-white focus:ring-black"; // Tertiary-black button styles with shadow
  const buttonClasses = `${baseStyles} ${variantStyles} ${className}`;

  // Conditionally render a Link or a button based on the presence of 'to' prop
  return to ? (
    <Link to={to} className={buttonClasses}>
      {children}
    </Link>
  ) : (
    <button className={buttonClasses} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;

