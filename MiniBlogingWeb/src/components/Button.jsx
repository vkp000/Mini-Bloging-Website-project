import React from 'react';

export default function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = "",
    isProcessing = false, // Prop to track loading state
    ...props
}) {
    return (
        <button
            type={type}
            className={`px-4 py-2 rounded-lg flex items-center justify-center ${bgColor} ${textColor} ${className} ${isProcessing ? 'cursor-wait' : 'hover:bg-blue-900'}`}
            {...props}
            disabled={isProcessing} // Disable the button during processing
        >
            {isProcessing ? (
                // Spinner or loading animation
                <div className="w-5 h-5 border-4 border-t-transparent border-blue-500 rounded-full animate-[spin_1s_ease-in-out_infinite]"></div>
            ) : (
                children
            )}
        </button>
    );
}
