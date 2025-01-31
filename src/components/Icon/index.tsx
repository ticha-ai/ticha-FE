interface IconProps {
  id: string;
  size?: 'md' | 'lg';
  className?: string;
}

const sizeValue = {
  md: 20,
  lg: 24,
};

const Icon = ({ id, size = 'lg', className }: IconProps) => {
  return (
    <svg
      width={sizeValue[size]}
      height={sizeValue[size]}
      className={className}
      fill='none'
    >
      <use href={`/images/svg-sprite.svg#${id}`} />
    </svg>
  );
};

export default Icon;
