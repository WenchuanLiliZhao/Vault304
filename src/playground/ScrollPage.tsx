import React, { useCallback, useEffect, useRef } from "react";

interface ScrollToBottomProps {
  children: React.ReactNode;
  initialScrollPosition?: "top" | "bottom"; // New prop to determine initial scroll position
}

export const ScrollToBottom: React.FC<ScrollToBottomProps> = ({
  children,
  initialScrollPosition = "bottom", // Default to 'bottom'
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scrollToPosition = useCallback(() => {
    const container = containerRef.current;

    if (container) {
      if (initialScrollPosition === "bottom") {
        container.scrollTop = container.scrollHeight;
      } else {
        container.scrollTop = 0;
      }
    }
  }, [initialScrollPosition]);

  useEffect(() => {
    scrollToPosition();
  }, [children, scrollToPosition]);

  return (
    <div
      ref={containerRef}
      style={{
        height: "100vh",
        width: "100vw",
        position: "fixed", // Adjust height as needed
        overflowY: "auto",
        display: 'flex',
        flexDirection: initialScrollPosition === "bottom" ? 'column-reverse' : 'column', // Adjust flex-direction based on initial position
      }}
    >
      {children}
    </div>
  );
};
