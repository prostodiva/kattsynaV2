import classNames from 'classnames';

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'ternary'
  | 'add'
  | 'arrowLeft'
  | 'arrowRight';
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
            'h-14 px-12 xl:px-66 bg-button-primary font-goorm font-bold text-text-ternary text-2xl uppercase hover:bg-brand-300 hover:text-brand-700':
                variant === 'primary' && !backgroundImage,
            'h-14 px-10 rounded-sm bg-brand-300 text-brand-600 font-bold hover:bg-accent-500 hover:text-white':
                variant === 'secondary' && !active && !backgroundImage,
            'py-6 px-8 bg-surface-card text-white':
                variant === 'secondary' && active && !backgroundImage,
            'py-4 px-6 border bg-danger text-white hover:bg-white hover:text-black':
                variant === 'add' && !backgroundImage,
            'p-4 px-12 bg-transparent':
                variant === 'arrowLeft' || variant === 'arrowRight',
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