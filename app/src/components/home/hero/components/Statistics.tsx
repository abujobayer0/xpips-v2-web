import React from 'react';
import { motion, useInView } from 'motion/react';
import { StatisticsProps } from '../types';
import { useCountAnimation } from '../hooks/useCountAnimation';

interface StatisticItemProps {
  stat: {
    value: number;
    label: string;
    prefix?: string;
    suffix?: string;
    animationDelay?: number;
  };
  index: number;
  isLast: boolean;
  isInView: boolean;
}

const StatisticItem: React.FC<StatisticItemProps> = ({
  stat,
  index,
  isLast,
  isInView,
}) => {
  const animatedValue = useCountAnimation(stat.value);

  return (
    <div
      className={`text-center relative ${
        !isLast
          ? 'lg:after:absolute lg:after:right-0 lg:after:top-0 lg:after:h-full lg:after:w-[1px] lg:after:bg-gradient-to-b lg:after:from-transparent lg:after:via-white lg:after:to-transparent lg:pr-8'
          : 'lg:pl-8'
      } ${index === 2 ? 'col-span-2 sm:col-span-1' : 'col-span-1'} ${
        !isLast ? 'lg:px-8' : ''
      }`}
    >
      <motion.div
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2 lg:mb-3"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{
          duration: 0.5,
          delay: stat.animationDelay || index * 0.1,
        }}
      >
        {stat.prefix}
        {animatedValue}
        {stat.suffix}
      </motion.div>
      <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
    </div>
  );
};

const Statistics: React.FC<StatisticsProps> = ({ statistics }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-4 lg:gap-0 max-w-7xl mx-auto py-6 sm:py-8 w-full"
    >
      {statistics.map((stat, index) => {
        const isLast = index === statistics.length - 1;

        return (
          <StatisticItem
            key={index}
            stat={stat}
            index={index}
            isLast={isLast}
            isInView={isInView}
          />
        );
      })}
    </div>
  );
};

export default Statistics;
