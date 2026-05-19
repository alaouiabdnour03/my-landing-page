import React from "react";

export const AnimatedBackground = ({ variant = "hero" }) => {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden grain"
    >
      <div className="mesh-bg" />
      <div className="mesh-bg-2" />
      {variant === "hero" && (
        <>
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-brand-bg to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-bg to-transparent" />
        </>
      )}
    </div>
  );
};
