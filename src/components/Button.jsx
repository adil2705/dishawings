import React from 'react';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    onClick,
    disabled = false,
    className = '',
    icon: Icon,
    ...props
}) => {
    const baseStyles = 'font-medium rounded-full transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-lavender-500 hover:bg-lavender-600 text-white shadow-lg hover:shadow-xl',
        secondary: 'bg-white hover:bg-lavender-50 text-lavender-600 border-2 border-lavender-300 shadow-md hover:shadow-lg',
        outline: 'bg-transparent border-2 border-charcoal hover:bg-charcoal hover:text-white text-charcoal',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {Icon && <Icon size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} />}
            {children}
        </button>
    );
};

export default Button;
