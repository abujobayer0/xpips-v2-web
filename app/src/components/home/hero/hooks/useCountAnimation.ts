import React from 'react';
import { useMotionValue, useSpring } from 'motion/react';

export const useCountAnimation = (targetValue: number) => {
  const count = useMotionValue(0);
  const spring = useSpring(count, {
    duration: 2,
    stiffness: 50,
    damping: 20,
  });

  const [displayValue, setDisplayValue] = React.useState(0);

  React.useEffect(() => {
    const unsubscribe = spring.onChange((latest) => {
      setDisplayValue(Math.round(latest));
    });

    count.set(targetValue);
    return () => unsubscribe();
  }, [count, spring, targetValue]);

  return displayValue;
};
