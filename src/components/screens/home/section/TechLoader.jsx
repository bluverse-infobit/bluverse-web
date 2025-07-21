import React from "react";

export function TechLoader() {
  return (
    <div className="relative flex items-center justify-center h-60 w-60">
      {/* Outer Ring */}
      <div className="absolute inset-0 rounded-full border-4 border-gradient animate-spin-slow" />

      {/* Middle Pulsing Ring */}
      <div className="absolute inset-4 rounded-full border-2 border-gradient2 animate-pulse-slow" />

      {/* Tech Chip */}
      <div className="relative z-10 h-16 w-16 rounded-xl bg-gradient-to-br from-[#7f5af0] to-[#3d9cff] flex items-center justify-center shadow-2xl animate-float">
        <div className="h-6 w-6 rounded-full bg-white/80 shadow-inner" />
      </div>
    </div>
  );
}
