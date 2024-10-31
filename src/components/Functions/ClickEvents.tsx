import React, { useRef } from 'react';

interface ToggleClassProps {
  toggle: string;
  children: JSX.Element;
  className?: string;
}

export const ToggleClassBtn: React.FC<ToggleClassProps> = ({ toggle, children, className }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  const toggleClass = () => {
    if (elementRef.current) {
      elementRef.current.classList.toggle(toggle);
    }
  };

  return (
    <div onClick={toggleClass} ref={elementRef} className={className}>
      {children}
    </div>
  );
};