import React, { useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, useSpring } from "framer-motion";

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Use spring for smoother animation
  const rotateX = useSpring(useTransform(y, [-100, 100], [30, -30]), {
    stiffness: 200,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-30, 30]), {
    stiffness: 200,
    damping: 30,
  });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="about"
      className="py-16 bg-white"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeIn}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <motion.h2 className="text-4xl font-bold mb-12 text-center text-gray-800" variants={fadeIn}>
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            variants={fadeIn}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              perspective: 1000,
            }}
          >
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
            >
              <img
                src="/images/about.jpg"
                alt="Your Name"
                className="rounded-lg shadow-xl w-full max-w-md mx-auto"
                style={{
                  transform: "translateZ(50px)",
                }}
              />
            </motion.div>
          </motion.div>
          <motion.div className="md:w-1/2 md:pl-12" variants={fadeIn}>
            <p className="text-xl text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed
              erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.
              Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut
              dapibus.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
