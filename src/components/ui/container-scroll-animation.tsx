"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, type MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const rotate = useTransform(scrollYProgress, [0, 1], [8, 0]);
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const fade = useTransform(scrollYProgress, [0, 0.9], [1, 0.78]);

  const smoothScale = useSpring(scale, { stiffness: 120, damping: 22, mass: 0.35 });
  const smoothRotate = useSpring(rotate, { stiffness: 120, damping: 22, mass: 0.35 });
  const smoothTranslate = useSpring(translate, { stiffness: 120, damping: 24, mass: 0.4 });
  const smoothFade = useSpring(fade, { stiffness: 120, damping: 24, mass: 0.4 });

  return (
    <div
      className="min-h-[110vh] flex items-center justify-center relative w-full"
      ref={containerRef}
    >
      <div
        className="py-10 sm:py-20 w-full relative"
        style={{
          perspective: "1300px",
        } as React.CSSProperties}
      >
        <Header translate={smoothTranslate} titleComponent={titleComponent} />
        <Card rotate={smoothRotate} translate={translate} scale={smoothScale} opacity={smoothFade}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  if (!titleComponent) return null;
  return (
    <motion.div
      style={{
        y: translate,
      }}
      className="max-w-5xl mx-auto text-center mb-10 md:mb-14"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  children,
  translate,
  scale,
  opacity,
}: {
  rotate: MotionValue<number>;
  children: React.ReactNode;
  translate: MotionValue<number>;
  scale: MotionValue<number>;
  opacity: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        y: translate,
        scale,
        opacity,
      }}
      className="rounded-[28px] md:rounded-[32px] w-full max-w-6xl mx-auto h-[26rem] md:h-[34rem] shadow-[0_40px_120px_rgba(43,45,80,0.18)]"
    >
      <div className="relative h-full w-full overflow-hidden rounded-[24px] md:rounded-[28px] bg-gradient-to-b from-white via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 flex items-center justify-center border border-white/60 dark:border-slate-800">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/6 via-transparent to-transparent dark:from-white/5" />
        {children}
      </div>
    </motion.div>
  );
};