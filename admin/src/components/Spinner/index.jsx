import React from "react";

export const Spinner = () => {
  return (
    <>
      <div className="fixed inset-0 z-50 backdrop-blur-sm bg-white/30 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg flex flex-col items-center gap-4 shadow-xl">
          <svg
            className="animate-spin h-16 w-16 text-green-500"
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background Circle (Light Gray) */}
            <circle
              cx="25"
              cy="25"
              r="20"
              stroke="#e5e7eb"
              strokeWidth="5"
              fill="none"
            />

            {/* Foreground Arc (Green Spinner) */}
            <circle
              cx="25"
              cy="25"
              r="20"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray="100"
              strokeDashoffset="75"
              fill="none"
            />
          </svg>
          <p className="text-black text-lg">Adding product...</p>
        </div>
      </div>
    </>
  );
};
