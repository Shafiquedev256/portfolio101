// components/TypewriterEffect.tsx
"use client";

import dynamic from "next/dynamic";
import React from "react";

// Disable SSR since typewriter-effect needs `window`
const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

export const TypewriterEffect: React.FC = () => {
  return (
    <div className='text-xl  text-center text-white'>
      <Typewriter
        options={{
          strings: [
            "Reactjs Developer",
            "MERN Stack Developer",
            "Frontend Developer",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};
