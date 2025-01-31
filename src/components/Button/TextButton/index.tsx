import { ReactNode } from 'react';

import defaultStyle from '../style.module.css';
import TextButtonStyle from './style.module.css';

interface TextButtonProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'gnb';
  textSize?: 'sm' | 'md' | 'lg';
  boldText?: boolean;
  ariaLabel?: string;
  onClick?: () => void;
  className?: string;
}

const buttonSizeClassName = {
  sm: defaultStyle['size-sm'],
  md: defaultStyle['size-md'],
  lg: defaultStyle['size-lg'],
  gnb: defaultStyle['size-gnb'],
};

const buttonTextSizeClassName = {
  sm: defaultStyle['text-sm'],
  md: defaultStyle['text-md'],
  lg: defaultStyle['text-lg'],
};

const TextButton = ({
  children,
  size = 'md',
  textSize = 'md',
  boldText = false,
  ariaLabel = '',
  onClick = () => {},
  className = '',
}: TextButtonProps) => {
  return (
    <button
      type='button'
      className={`
      ${buttonSizeClassName[size]}
      ${buttonTextSizeClassName[textSize]}
      ${boldText ? defaultStyle['text-bold'] : defaultStyle['text-regular']}
      ${size === 'gnb' ? TextButtonStyle['text-gnb'] : TextButtonStyle['text-default']}
      ${className || ''}
  `}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default TextButton;
