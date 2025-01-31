import { ReactNode } from 'react';

import style from '../style.module.css';

interface DefaultButtonProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'gnb';
  isFull?: boolean;
  textSize?: 'sm' | 'md' | 'lg';
  boldText?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
  className?: string;
}

const buttonSizeClassName = {
  sm: style['size-sm'],
  md: style['size-md'],
  lg: style['size-lg'],
  gnb: style['size-gnb'],
};

const buttonTextSizeClassName = {
  sm: style['text-sm'],
  md: style['text-md'],
  lg: style['text-lg'],
};

const DefaultButton = ({
  children,
  size = 'md',
  isFull = true,
  textSize = 'lg',
  boldText = true,
  disabled = false,
  ariaLabel = '',
  type = 'button',
  onClick = () => {},
  className = '',
}: DefaultButtonProps) => {
  return (
    <button
      type={type}
      aria-label={ariaLabel}
      disabled={disabled}
      className={`        
          ${style.button}
          ${buttonSizeClassName[size]}
          ${buttonTextSizeClassName[textSize]}
          ${boldText ? style['text-bold'] : style['text-regular']}
          ${isFull ? style.full : style.fit}
          ${disabled ? style.disabled : ''}
          ${className || ''}
        `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default DefaultButton;
