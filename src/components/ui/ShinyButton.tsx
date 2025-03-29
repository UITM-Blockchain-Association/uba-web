import React from 'react';

interface ShinyButtonProps {
    text: string;
    disabled?: boolean;
    speed?: number;
    className?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}

const ShinyButton: React.FC<ShinyButtonProps> = ({
    text,
    disabled = false,
    speed = 5,
    className = '',
    onClick,
    type = 'button'
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
                group
                relative px-4 py-2 sm:px-6 sm:py-2
                min-w-[120px] sm:min-w-[160px]
                border-[3px] sm:border-[4px] border-black
                [image-rendering:pixelated]
                ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                ${className}
            `}
        >
            {/* Main button body */}
            <div className="
                absolute inset-0 
                bg-[#4a90e2]
                group-hover:bg-[#357abd]
                group-active:translate-y-1
                transition-transform duration-100
            "/>
            
            {/* Light edge */}
            <div className="
                absolute top-0 left-0 right-[3px] sm:right-[4px] h-[3px] sm:h-[4px]
                bg-[#7cb5f5]
            "/>
            <div className="
                absolute top-0 right-0 w-[3px] sm:w-[4px] bottom-[3px] sm:bottom-[4px]
                bg-[#7cb5f5]
            "/>
            
            {/* Shadow edge */}
            <div className="
                absolute bottom-0 left-[3px] sm:left-[4px] right-0 h-[3px] sm:h-[4px]
                bg-[#2d5c8f]
            "/>
            <div className="
                absolute top-[3px] sm:top-[4px] left-0 w-[3px] sm:w-[4px] bottom-0
                bg-[#2d5c8f]
            "/>

            {/* Text */}
            <span className="
                relative 
                text-sm sm:text-base
                font-bold text-white 
                tracking-wider
                drop-shadow-[1px_1px_0px_rgba(0,0,0,0.5)] sm:drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]
            ">
                {text}
            </span>
        </button>
    );
};

export default ShinyButton; 