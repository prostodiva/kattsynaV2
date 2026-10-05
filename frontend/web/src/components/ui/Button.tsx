import classNames from 'classnames';

type ButtonVariant = 'primary' | 'secondary' | 'ternary' | 'black' | 'white';
type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  rounded?: boolean;
  outline?: boolean;
  active?: boolean;
  type?: ButtonType;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  backgroundImage?: string;
  ariaLabel?: string;
}

function Button({
  children,
  variant = 'primary',
  rounded,
  outline,
  active,
  type = 'button',
  disabled,
  className,
  onClick,
  backgroundImage,
  ariaLabel,
}: ButtonProps) {
  const buttonClasses = classNames(
    'flex justify-center items-center text-center whitespace-nowrap transition-colors duration-200',
    {
      'h-18 xl:h-12 2xl:h-18 px-20 md:px-68 lg:px-36 xl:px-40 2xl:px-48 bg-button-primary font-goorm font-normal text-text-ternary text-2xl xl:text-xl 2xl:text-2xl uppercase hover:bg-brand-300 hover:text-brand-700':
        variant === 'primary' && !backgroundImage,
      'h-10 2xl:h-14 px-12 md:px-16 xl:px-12 bg-button-primary font-goorm font-medium text-text-ternary text-sm 2xl:text-xl uppercase hover:bg-brand-300 hover:text-brand-700':
        variant === 'secondary' && !active && !backgroundImage,
      'py-6 px-8 bg-surface-card text-white':
        variant === 'ternary' && active && !backgroundImage,
        'w-full md:w-auto font-goorm font-medium uppercase text-text-secondary bg-surface-section rounded-sm px-10 py-4 text-sm md:text-base 2xl:text-xl transition-colors duration-200 hover:bg-brand-nav':
        variant === 'black',
      'w-full md:w-auto font-goorm font-medium uppercase text-text-ternary bg-white rounded-sm px-10 py-4 text-sm md:text-base 2xl:text-xl transition-colors duration-200 hover:bg-white/90':
        variant === 'white',
      'rounded-sm': rounded,
      'bg-white': outline && !backgroundImage,
      'opacity-50 cursor-not-allowed': disabled,
    },
    className
  );

  const backgroundStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }
    : {};

  return (
    <button
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
      className={buttonClasses}
      style={backgroundStyle}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
