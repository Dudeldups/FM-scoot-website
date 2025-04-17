import { useRef } from "react";
import { MotionHighlightContainer } from "./styles";
import { useInView, Variants } from "framer-motion";

type HighlightContainerProps = {
  className?: string;
  children: React.ReactNode;
  reversedArrow?: boolean;
  as?: keyof JSX.IntrinsicElements;
};

const containerVariants: Variants = {
  hidden: {
    y: "50px",
    scale: 0.8,
    opacity: 0.5,
  },
  visible: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const HighlightContainer = ({
  className,
  children,
  reversedArrow,
  as,
}: HighlightContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "250px", once: true });

  return (
    <MotionHighlightContainer
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
      $reversedArrow={reversedArrow}
      {...{ as }}>
      {children}
    </MotionHighlightContainer>
  );
};

export default HighlightContainer;
