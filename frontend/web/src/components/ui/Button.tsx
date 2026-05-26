import classNames from 'classnames';

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'ternary'
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
}


function Button({ children, variant = 'primary', rounded, outline, active, type = 'button', disabled, className, onClick, backgroundImage }: ButtonProps) {
    const buttonClasses = classNames(
        "flex justify-center items-center text-center whitespace-nowrap transition-colors duration-200",
        {
            'h-18 px-12 lg:px-36 xl:px-66 bg-button-primary font-goorm font-medium text-text-ternary text-2xl uppercase hover:bg-brand-300 hover:text-brand-700':
                variant === 'primary' && !backgroundImage,
            'h-12 px-4 bg-button-primary font-goorm font-medium text-text-ternary text-xl uppercase hover:bg-brand-300 hover:text-brand-700':
                variant === 'secondary' && !active && !backgroundImage,
            'py-6 px-8 bg-surface-card text-white':
                variant === 'ternary' && active && !backgroundImage,
            'rounded-xs': rounded,
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
      className={buttonClasses}
      style={backgroundStyle}
      onClick={onClick}
    >
      <span>{children}</span>
    </button>
  );
}

export default Button;