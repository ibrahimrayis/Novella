
import React, { ReactNode } from "react";

interface MotionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  [key: string]: any;
}

// This is a simple animation component that mimics framer-motion's basic functionality
export const motion = {
  div: ({ children, className, delay = 0, duration = 500, ...props }: MotionProps) => {
    const animationStyle = {
      animationDelay: `${delay}ms`,
      animationDuration: `${duration}ms`,
    };

    return (
      <div 
        className={`animate-fade-in-up ${className || ""}`} 
        style={animationStyle}
        {...props}
      >
        {children}
      </div>
    );
  },
};

export default motion;
