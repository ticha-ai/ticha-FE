import { ReactNode } from 'react';

import style from './style.module.css';

interface ButtonProps {
  children: ReactNode;
  color?: 'main' | 'second' | 'gray' | 'transparent';
  size?: 'sm' | 'md' | 'lg' | 'gnb';
  isFull?: boolean;
  textSize?: 'sm' | 'md' | 'lg';
  boldText?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
  rightIcon?: ReactNode;
  className?: string;
}

const buttonSizeClassName = {
  sm: style['size-sm'],
  md: style['size-md'],
  lg: style['size-lg'],
  gnb: style['size-gnb'],
};

const buttonColorClassName = {
  main: style['bg-main-color'],
  second: style['bg-second-color'],
  gray: style['bg-gray-color'],
  transparent: style['bg-transparent-color'],
};

const buttonTextSizeClassName = {
  sm: style['text-sm'],
  md: style['text-md'],
  lg: style['text-lg'],
};

const Button = ({
  children,
  color = 'main',
  size = 'md',
  isFull = true,
  textSize = 'lg',
  boldText = true,
  disabled = false,
  ariaLabel = '',
  type = 'button',
  onClick = () => {},
  rightIcon,
  className,
}: ButtonProps) => {
  return (
    <button
      type={type}
      aria-label={ariaLabel}
      disabled={disabled}
      className={`        
          ${style.button}
          ${buttonSizeClassName[size]}
          ${buttonColorClassName[color]}
          ${buttonTextSizeClassName[textSize]}
          ${boldText ? style['text-bold'] : style['text-regular']}
          ${isFull ? style.full : style.fit}
          ${disabled ? style.disabled : ''}
          ${className || ''}
          ${rightIcon || style.buttonAlign}
        `}
      onClick={onClick}
    >
      {children}
      {rightIcon}
    </button>
  );
};

export default Button;
