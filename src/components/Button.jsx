import React from 'react';

const Button = ({ title, id, rightIcon, leftIcon, containerClass }) => {
  return (
    <button 
      id={id} 
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 text-black ${containerClass}`}
    >
      <div className="flex items-center">
        {leftIcon && <span className="mr-2">{leftIcon}</span>} {/* Left Icon */}
        <span className="relative font-general text-sm font-bold uppercase">{title}</span>
        {rightIcon && <span className="ml-2">{rightIcon}</span>} {/* Right Icon */}
      </div>
    </button>
  );
}

export default Button;
