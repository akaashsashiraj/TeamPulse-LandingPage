"use client";
import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

export const GoogleGeminiEffect = ({
  pathLengths,
  title,
  description,
  className,
}: {
  pathLengths: any[];
  title?: string;
  description?: string;
  className?: string;
}) => {
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "sticky top-80 h-[80vh] w-full",
        className
      )}
      ref={ref}
    >
      <p className="text-lg md:text-7xl font-bold text-white text-center">
        {title || "Build with Aceternity UI"}
      </p>
      <p className="text-xs md:text-xl font-normal text-white/70 max-w-lg text-center mx-auto mt-8">
        {description || "Scroll this component and see the bottom SVG come to life wow this works!"}
      </p>
      <div className="absolute inset-0 flex items-center justify-center mt-40">
        <div className="h-[890px] w-full">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1440 890"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <motion.path
              d="M0 390 Q 360 290 720 390 T 1440 390"
              stroke="url(#gradient1)"
              strokeWidth="2"
              fill="none"
              style={{
                pathLength: pathLengths[0],
              }}
            />
            <motion.path
              d="M0 410 Q 360 310 720 410 T 1440 410"
              stroke="url(#gradient2)"
              strokeWidth="2"
              fill="none"
              style={{
                pathLength: pathLengths[1],
              }}
            />
            <motion.path
              d="M0 430 Q 360 330 720 430 T 1440 430"
              stroke="url(#gradient3)"
              strokeWidth="2"
              fill="none"
              style={{
                pathLength: pathLengths[2],
              }}
            />
            <motion.path
              d="M0 370 Q 360 470 720 370 T 1440 370"
              stroke="url(#gradient4)"
              strokeWidth="2"
              fill="none"
              style={{
                pathLength: pathLengths[3],
              }}
            />
            <motion.path
              d="M0 350 Q 360 450 720 350 T 1440 350"
              stroke="url(#gradient5)"
              strokeWidth="2"
              fill="none"
              style={{
                pathLength: pathLengths[4],
              }}
            />
            <defs>
              <linearGradient
                id="gradient1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#18CCFC" stopOpacity="0" />
                <stop offset="50%" stopColor="#18CCFC" stopOpacity="1" />
                <stop offset="100%" stopColor="#6344F5" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="gradient2"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#6366F1" stopOpacity="0" />
                <stop offset="50%" stopColor="#6366F1" stopOpacity="1" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="gradient3"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#EC4899" stopOpacity="0" />
                <stop offset="50%" stopColor="#EC4899" stopOpacity="1" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="gradient4"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#14B8A6" stopOpacity="0" />
                <stop offset="50%" stopColor="#14B8A6" stopOpacity="1" />
                <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="gradient5"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#F59E0B" stopOpacity="0" />
                <stop offset="50%" stopColor="#F59E0B" stopOpacity="1" />
                <stop offset="100%" stopColor="#EF4444" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="bg-white rounded-full px-6 py-2 shadow-xl">
              <p className="text-black font-medium text-sm">teampulse.app</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};